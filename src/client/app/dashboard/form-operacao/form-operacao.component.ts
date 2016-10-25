import {Component, OnInit, ViewChild} from '@angular/core';

import {FormOperacaoervice} from './form-operacao.service';
import {Papel} from '../../shared/entity/papel';
import {Operacao} from '../../shared/entity/operacao';

import {AlertaUtil} from '../../shared/utils/alerta-util';
import { ModalDirective } from 'ng2-bootstrap/components/modal/modal.component';

const PAPEIS: Papel[] = [
	{id: 1, nome: "HERING", papel: "HGTX3", setor: 1, rank: 4},
	{id: 2, nome: "AMBEV", papel: "ABEV3", setor: 1, rank: 4}
];

const OPERACOES: Operacao[] = [
	{data: new Date(), tipoOperacao: "Comprar", precoUnitario: 15.6,	quantidade: 100, despesa: 10.9,	observacao: "verificar", papel: PAPEIS[0]},
	{data: new Date(), tipoOperacao: "Vender", precoUnitario: 13,	quantidade: 400, despesa: 18.9,	observacao: "verificar", papel: PAPEIS[1]}
];

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
	operacaoModal: Operacao;	

	alertaUtil: AlertaUtil;

	// operacoes: Operacao[];
	operacoes = OPERACOES;

	@ViewChild('modalOperacao') public modalOperacao:ModalDirective;
	
	/*Construtor*/
	constructor (private formOperacaoervice: FormOperacaoervice) { 		
		this.operacao = new Operacao();		
		this.alertaUtil = new AlertaUtil();
	}

	/*Métodos*/
	ngOnInit(): void {            
        // this.getAllPapel();
        // this.getAllOperacaoEntrada();
        this.calcularCamposOperacao();
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

	gravarOperacaoEntrada(event): void{
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


	gravarOperacaoSaida(event): void{
		event.preventDefault(); 
		
	    this.formOperacaoervice.salvar(this.operacaoModal)
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
                    		this.calcularCamposOperacao();                    		
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

    calcularCamposOperacao(): void{
    	for (var i = 0; i < this.operacoes.length; i++) {						
			this.operacoes[i].totalOperacao = (this.operacoes[i].quantidade * this.operacoes[i].precoUnitario) + this.operacoes[i].despesa;	
		}
    }       

    showModalOperacao(operacao): void{
    	this.operacaoModal = new Operacao();
    	this.operacaoModal.papel = operacao.papel;
    	this.operacaoModal.quantidade = operacao.quantidade;
    	if ("Comprar" == operacao.tipoOperacao) {
    		this.operacaoModal.tipoOperacao = "Vender"
    	} else {
			this.operacaoModal.tipoOperacao = "Comprar"
    	}
    	this.modalOperacao.show();
    }
}
