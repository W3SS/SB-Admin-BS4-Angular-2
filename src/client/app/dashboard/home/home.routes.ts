import { Route } from '@angular/router';
import { HomeComponent } from './index';

import { AuthGuard } from '../../common/auth.guard';

export const HomeRoutes: Route[] = [
  	{
    	path: 'home',
    	component: HomeComponent,
    	canActivate: [AuthGuard]
  	}
];
