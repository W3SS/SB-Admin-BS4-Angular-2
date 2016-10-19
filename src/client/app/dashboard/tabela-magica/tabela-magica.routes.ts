import { Route } from '@angular/router';
import { AuthGuard } from '../../common/auth.guard';
import { TabelaMagicaComponent } from './index';

export const TabelaMagicaRoutes: Route[] = [
	{
		path: 'tabela-magica-route',
		component: TabelaMagicaComponent,
		canActivate: [AuthGuard]
	},
];
