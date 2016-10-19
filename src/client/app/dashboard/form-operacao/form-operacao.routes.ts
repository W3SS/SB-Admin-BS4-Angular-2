import { Route } from '@angular/router';
import { AuthGuard } from '../../common/auth.guard';
import { FormOperacaoComponent } from './index';

export const FormOperacaoRoutes: Route[] = [
	{
		path: 'form-operacao',
		component: FormOperacaoComponent,
		canActivate: [AuthGuard]
	},
];