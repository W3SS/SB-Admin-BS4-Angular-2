import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { TabelaMagica } from './tabela-magica';
import 'rxjs/Rx';

@Injectable()
export class TabelaMagicaService {
    private urlTabelaMagica = 'http://localhost:8080/investimentoRestFul/tabelaMagica';  // URL to web api
    //    private headers: Headers;

    constructor(private http: Http) { }

    //this.headers = new Headers();
    //this.headers.append('Content-Type', 'application/json');
    //this.headers.append('Accept', 'application/json');

    public getValores(): Promise<TabelaMagica[]> {
        console.log("estou no servico da tabela mágica");
        return this.http.get(this.urlTabelaMagica)
            .toPromise().then( response => response.json().data as TabelaMagica[]).catch(this.handleError);
    }
    
    public GetAll = (): Observable<TabelaMagica[]> => {
        console.log("Recupar dados da tabela mágica.");
        return this.http.get(this.urlTabelaMagica)
            .map((response: Response) => <TabelaMagica[]>response.json())
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
    }

}
