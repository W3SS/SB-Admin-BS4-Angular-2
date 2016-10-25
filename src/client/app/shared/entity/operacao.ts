import {Papel} from './papel';

export class Operacao {
	data: Date;	
	tipoOperacao: string;
	precoUnitario: number;
	quantidade: number;
	despesa: number;
	observacao: string;
	papel: Papel;

	totalOperacao: number;
/*
	getTotalOperacao(): number{
		console.log(this.precoUnitario * this.quantidade);
		return this.precoUnitario * this.quantidade;
	}*/
}