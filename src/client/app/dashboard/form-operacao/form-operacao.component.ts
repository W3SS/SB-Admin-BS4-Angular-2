import {Component, OnInit, ViewChild} from '@angular/core';

import {FormOperacaoervice} from './form-operacao.service';
import {Papel} from '../../shared/entity/papel';
import {Operacao} from '../../shared/entity/operacao';

import {AlertaUtil} from '../../shared/utils/alerta-util';
import { ModalDirective } from 'ng2-bootstrap/components/modal/modal.component';

@Component({
	moduleId: module.id,
    selector: 'form-operacao',
    templateUrl: './form-operacao.component.html',
    providers: [FormOperacaoervice]
})

export class FormOperacaoComponent implements OnInit {

	/*Variaveis*/
    papeis: Papel[];
	operacao: Operacao;	

	alertaUtil: AlertaUtil;

	operacoes: Operacao[];

	@ViewChild('childModal') public childModal:ModalDirective;
	
	/*Construtor*/
	constructor (private formOperacaoervice: FormOperacaoervice) { 		
		this.operacao = new Operacao();		
		this.alertaUtil = new AlertaUtil();
	}

	/*Métodos*/
	ngOnInit(): void {            
        this.getAllPapel();
        this.getAllOperacaoEntrada();
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
                        this.alertaUtil.addMessage(
                        		{
							     	type: 'danger',
							     	closable: true,
							     	msg: error
								}
                        	)
                        ;
                    } 
                );
    }        

	gravarOperacao(event): void{
		event.preventDefault(); 
		
	    this.formOperacaoervice.salvar(this.operacao)
	               .subscribe(
	                   result => { 	                   		
	                       this.getAllOperacaoEntrada();
	                       this.alertaUtil.addMessage(
                        		{
							     	type: 'success',
							     	closable: true,
							     	msg: result.message
								}
                        	);
	                   },
	                    err => {
	                        // Log errors if any                                    
	                        this.alertaUtil.addMessage(
                        		{
							     	type: 'danger',
							     	closable: true,
							     	msg: err.message
								}
                        	);
	                });
	}

	getAllOperacaoEntrada(): void {
        this.formOperacaoervice.getAllOperacaoEntrada()
                .subscribe( 
                    data => {
                    		this.operacoes = data;
                    		for (var i = this.operacoes.length - 1; i >= 0; i++) {

                    			console.log(this.operacoes[i].quantidade);
                    			console.log(this.operacoes[i].precoUnitario);
                    			console.log(this.operacoes[i].quantidade * this.operacoes[i].precoUnitario);
                    			
                    			if(this.operacoes[i].quantidade != undefined && this.operacoes[i].precoUnitario != undefined){
                    				this.operacoes[i].totalOperacao = this.operacoes[i].quantidade * this.operacoes[i].precoUnitario;

                    			}
                    			
                    		}
                            console.log("Sucesso getAllOperacaoEntrada().");
                    }
                    ,
                    error => {
                        this.alertaUtil.addMessage(
                        		{
							     	type: 'danger',
							     	closable: true,
							     	msg: error
								}
                        	);
                    } 
                );
    }        
}
