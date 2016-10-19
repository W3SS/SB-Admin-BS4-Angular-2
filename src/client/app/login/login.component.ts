import { Component } from '@angular/core';

import { LoginService} from './login.service';
import { Usuario} from './usuario';


/**
*	This class represents the lazy loaded LoginComponent.
*/

@Component({
    moduleId: module.id,
    selector: 'login-cmp',
    templateUrl: 'login.component.html',
    providers: [LoginService]
})

export class LoginComponent {
    usuario = new Usuario();

    constructor(private loginSerice: LoginService) { }

    login(event): void {        
        event.preventDefault();     
        this.loginSerice.login(this.usuario);        
    }

    get diagnostic() { 
        return JSON.stringify(this.usuario); 
    }  
}
