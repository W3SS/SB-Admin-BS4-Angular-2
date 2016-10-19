import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import { contentHeaders } from '../common/headers';

import { Usuario} from './usuario';


@Injectable()
export class LoginService {
    private _url = 'http://localhost:8080/investimentoRestFul/auth'; 
    //    private headers: Headers;

    constructor(private http: Http, private router: Router) { }

    login(usuario) {           
        let body = JSON.stringify(usuario);
        console.log('body '+body);
        this.http.post(this._url, body, { headers: contentHeaders })
          .subscribe(
            response => {
              console.log("resposta "+response.json());
              console.log("id_token: "+response.json().token);
              localStorage.setItem('id_token', response.json().token);
              this.router.navigate(['/dashboard/home']);
            },
            error => {
              alert(error.text());
              console.log(error.text());
            }
          );
      }

}
