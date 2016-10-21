import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

import { FormOperacaoComponent } from './form-operacao.component';

@NgModule({
    imports: [
    	BrowserModule,
    	FormsModule,
        RouterModule,
        AlertModule
    ],
    declarations: [FormOperacaoComponent],
    exports: [FormOperacaoComponent]
})

export class FormOperacaoModule { }
