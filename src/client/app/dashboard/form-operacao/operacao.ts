export class Operacao {
	data: Date;
	papel: string;
	tipoOpeacao: string;
	precoUnitario: number;
	quantidade: number;
	despesa: number;
	observacao: string;

	Operacao.prototype.toString = function toString() {
	  var out = 'Data: ' 	 		+ this.data + ';'
	  	  		+' Papel: '	 		+ this.papel + ';'
	  	  		+' Tipo Operação: '	+ this.tipoOpeacao + ';'
	  	  		+' Valor: '	 		+ this.valor + ';'
	  	  		+' Quantidade: '	+ this.quantidade + ';'
	  	  		+' Despesa: '		+ this.despesa + ';'
	  	  		+' Observacao: '	+ this.observacao + ';';
	  return out;
	}
}