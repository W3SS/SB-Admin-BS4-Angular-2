import {Component, OnInit} from '@angular/core';

import {FormOperacaoervice} from './form-operacao.service';
import {Papel} from '../../shared/entity/papel';
import {Operacao} from '../../shared/entity/operacao';

import {AlertaUtil} from '../../shared/utils/alerta-util';

@Component({
	moduleId: module.id,
    selector: 'form-operacao',
    templateUrl: './form-operacao.component.html',
    providers: [FormOperacaoervice]
})

export class FormOperacaoComponent implements OnInit {

	msgError: string;
	msgSuccess: string;

    papeis: Papel[];
	operacao: Operacao;	

	alertaUtil: AlertaUtil;
	

	constructor (private formOperacaoervice: FormOperacaoervice) { 		
		this.operacao = new Operacao();		
		this.alertaUtil = new AlertaUtil();
	}

	ngOnInit(): void {            
        this.getAllPapel();
    }

	getAllPapel(): void {
        this.formOperacaoervice.getAllPapel()
                .subscribe( 
                    data => {
                    		this.papeis = data;
                            console.log("Sucesso getAllPapel().")
                    }
                    ,
                    error => {
                        // console.log(error)
                        this.alertaUtil.addMessage('danger', error);
                    } 
                );
    }        

	gravarOperacao(event): void{
		event.preventDefault(); 
		
		this.msgSuccess = null;		
		this.msgError = null;				
	    this.formOperacaoervice.salvar(this.operacao)
	               .subscribe(
	                   result => { 	                   		
	                       this.msgSuccess = result.message;
	                   },
	                    err => {
	                        // Log errors if any                                    
	                        
	                        this.msgError = err.message;
	                });
	}
}
