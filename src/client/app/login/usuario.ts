export class Usuario {
	private _email : string;
	private _senha : string;

	public get email() : string{
		return this._email;
	}
	public get senha() : string{
		return this._senha
	}

	public set email(e : string){
		this._email = e;
	}
	public set senha(s: string){
		this._senha = s;
	}
}