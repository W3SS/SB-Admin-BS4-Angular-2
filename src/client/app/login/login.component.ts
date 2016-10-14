import { Component } from '@angular/core';
import { Router } from '@angular/router';

/**
*	This class represents the lazy loaded LoginComponent.
*/

@Component({
    moduleId: module.id,
    selector: 'login-cmp',
    templateUrl: 'login.component.html'
})

export class LoginComponent {

    constructor(
        private router: Router) {
    }

    login(): void {
        let link = ['/dashboard/home'];
        console.log("logando..." + link);
        this.router.navigate(link);
    }
}
