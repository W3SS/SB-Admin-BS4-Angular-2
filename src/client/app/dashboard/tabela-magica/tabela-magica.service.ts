import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { TabelaMagica } from '../../shared/entity/tabela-magica';
// import { contentHeaders } from '../../common/headers';

import { Observable } from 'rxjs/Rx';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TabelaMagicaService {
    private urlTabelaMagica = 'http://localhost:8080/investimentoRestFul/tabelaMagica';  // URL to web api
    
    constructor(private http: Http) { }

    createAuthorizationHeader(contentHeaders:Headers) {        
        contentHeaders.append('Accept', 'application/json');
        contentHeaders.append('Content-Type', 'application/json');    
        contentHeaders.append('X-Auth-Token', localStorage.getItem('id_token'));
    }  
    
    public getAll(): Observable<any>{      
        let contentHeaders = new Headers();
        this.createAuthorizationHeader(contentHeaders);   

        return this.http.get(this.urlTabelaMagica, { headers: contentHeaders })
                    // ...sucesso
                    .map((response: Response) => response.json())
                    //...errors if any
                    .catch((error:any) => Observable.throw(error.text()));
    }


}
