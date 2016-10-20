import {Component} from '@angular/core';
import {Operacao} from './operacao';
import {FormOperacaoervice} from './form-operacao.service';

@Component({
	moduleId: module.id,
    selector: 'form-operacao',
    templateUrl: './form-operacao.component.html',
    providers: [FormOperacaoervice]
})

export class FormOperacaoComponent {
	operacao: Operacao;
	msg: string;

	constructor (private formOperacaoervice: FormOperacaoervice) { 		
		this.operacao = new Operacao();		
	}

	gravarOperacao(): void{
		this.msg = null;
		console.log("gravarOperacao "+this.operacao.toString());
	    this.formOperacaoervice.salvar(this.operacao)
	               .subscribe(
	                   result => { 
	                       this.msg = result;
	                   },
	                    err => {
	                        // Log errors if any                                    
	                        this.msg = err;
	                });
	}
}
