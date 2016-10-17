import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FormOperacaoComponent } from './form-operacao.component';

@NgModule({
    imports: [
    	BrowserModule,
    	FormsModule,
        RouterModule
    ],
    declarations: [FormOperacaoComponent],
    exports: [FormOperacaoComponent]
})

export class FormOperacaoModule { }
