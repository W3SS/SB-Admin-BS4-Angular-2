export class AlertaUtil {
	/* Alert component */
	public alerts:Array<Object> = [10];
	  /* {
	     type: 'danger',
	     msg: 'Oh snap! Change a few things up and try submitting again.'
	   },
	   {
	     type: 'success',
	     msg: 'Well done! You successfully read this important alert message.',
	     closable: true
	   }*/
	 ];

	 public closeAlert(i:number):void {
	   this.alerts.splice(i, 1);
	 }

	 public addMessage(tipo, mensagem): void{
	 	console.log(this.alerts);
	 	this.alerts.push({
	 		type: tipo,
	     	msg: mensagem
	 	});
	 }
	/* END*/
}