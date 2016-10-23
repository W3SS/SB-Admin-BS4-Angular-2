import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import {
		AlertModule,
		ButtonsModule,
		DropdownModule,
		PaginationModule,
		ProgressbarModule,
		RatingModule,
		TabsModule,
		TooltipModule,
		ModalModule,
		TypeaheadModule
	} from 'ng2-bootstrap/ng2-bootstrap';

import { FormOperacaoComponent } from './form-operacao.component';

@NgModule({
    imports: [
    	BrowserModule,
    	FormsModule,
        RouterModule,
        AlertModule,
		ButtonsModule,
		DropdownModule,
		PaginationModule,
		ProgressbarModule,
		RatingModule,
		TabsModule,
		TooltipModule,
		ModalModule,
		TypeaheadModule
    ],
    declarations: [FormOperacaoComponent],
    exports: [FormOperacaoComponent]
})

export class FormOperacaoModule { }
