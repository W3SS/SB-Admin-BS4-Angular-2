import { Component,ViewChild } from '@angular/core';
import {OPERACOES} from '../../shared/entity/operacoesMock';
import {Papel} from '../../shared/entity/papel';
import {Operacao} from '../../shared/entity/operacao';
import { ModalDirective } from 'ng2-bootstrap/components/modal/modal.component';


/**
*	This class represents the lazy loaded HomeComponent.
*/

@Component({
	moduleId: module.id,
	selector: 'timeline-cmp',
	templateUrl: 'timeline.html',
	styleUrls: ['timeline.css'],
})
export class TimelineComponent { }

@Component({
	moduleId: module.id,
	selector: 'chat-cmp',
	templateUrl: 'chat.html'
})
export class ChatComponent {}

@Component({
	moduleId: module.id,
	selector: 'notifications-cmp',
	templateUrl: 'notifications.html'
})
export class NotificationComponent { }

@Component({
	moduleId: module.id,
	selector: 'home-cmp',
	templateUrl: 'home.component.html'
})

export class HomeComponent {
	/* Carousel Variable */
	myInterval: number = 5000;
	index: number = 0;
	slides: Array<any> = [];
	imgUrl: Array<any> = [
		`assets/img/slider1.jpg`,
		`assets/img/slider2.jpg`,
		`assets/img/slider3.jpg`,
		`assets/img/slider0.jpg`
	];
	/* END */
	/* Alert component */
	public alerts:Array<Object> = [
	   {
	     type: 'danger',
	     msg: 'Oh snap! Change a few things up and try submitting again.'
	   },
	   {
	     type: 'success',
	     msg: 'Well done! You successfully read this important alert message.',
	     closable: true
	   }
	 ];

	 public closeAlert(i:number):void {
	   this.alerts.splice(i, 1);
	 }
	/* END*/

	constructor() {
		for (let i = 0; i < 4; i++) {
			this.addSlide();
		}
		this.calcularCamposOperacao();
	}

	/* Carousel */
	addSlide() {
		let i = this.slides.length;
		this.slides.push({
			image: this.imgUrl[i],
			text: `${['Dummy ', 'Dummy ', 'Dummy ', 'Dummy '][this.slides.length % 4]}
      			${['text 0', 'text 1', 'text 2', 'text 3'][this.slides.length % 4]}`
		});
	}
	/* END */

	// tabela de operações
	operacoes = OPERACOES;
	operacaoModal: Operacao;	
	@ViewChild('modalOperacao') public modalOperacao:ModalDirective;

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
    // final

// Botão ação
    public status:{isopen:boolean} = {isopen: false};
}
