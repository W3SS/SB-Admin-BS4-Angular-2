import {Component} from '@angular/core';
import {Operacao} from './operacao';

@Component({
	moduleId: module.id,
    selector: 'form-operacao',
    templateUrl: './form-operacao.component.html'
})

export class FormOperacaoComponent {
	operacao: Operacao;
	constructor () { 		
		this.operacao = new Operacao();		
	}

	gravarOperacao(): void{
		console.log("gravarOperacao "+this.operacao.toString());
	}
}
