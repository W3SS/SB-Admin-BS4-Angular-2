import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Operacao } from './operacao';
// import { contentHeaders } from '../../common/headers';

import { Observable } from 'rxjs/Rx';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class FormOperacaoervice {
    private _url = 'http://localhost:8080/investimentoRestFul/salvarOperacao';  // URL to web api
    
    constructor(private http: Http) { }

    createAuthorizationHeader(contentHeaders:Headers) {        
        contentHeaders.append('Accept', 'application/json');
        contentHeaders.append('Content-Type', 'application/json');    
        contentHeaders.append('X-Auth-Token', localStorage.getItem('id_token'));
    }  
    
    public salvar(operacao): Observable<any>{      
        let contentHeaders = new Headers();
        this.createAuthorizationHeader(contentHeaders);   
        let body = JSON.stringify(operacao);
        console.log(body);
      
        return this.http.post(this._url, body, { headers: contentHeaders })
                      // ...and calling .json() on the response to return data
                       .map((res:Response) => res.json())
                       //...errors if any
                       .catch((error:any) => Observable.throw(error.text()));
     }     


}