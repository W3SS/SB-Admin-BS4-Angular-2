import {Papel} from './papel';

export class Operacao {
	data: Date;	
	tipoOpeacao: string;
	precoUnitario: number;
	quantidade: number;
	despesa: number;
	observacao: string;
	papel: Papel;
}