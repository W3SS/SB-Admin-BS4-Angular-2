import { Route } from '@angular/router';

import { HomeRoutes } from './home/index';
import { ChartRoutes } from './charts/index';
import { BlankPageRoutes } from './blank-page/index';
import { TableRoutes } from './tables/index';
import { FormRoutes } from './forms/index';
import { FormEmpresaRoutes } from './form-empresa/index';
import { FormOperacaoRoutes } from './form-operacao/index';
import { GridRoutes } from './grid/index';
import { BSComponentRoutes } from './bs-component/index';
import { BSElementRoutes } from './bs-element/index';
import { TabelaMagicaRoutes } from './tabela-magica/index';

import { DashboardComponent } from './index';


export const DashboardRoutes: Route[] = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            //{ path: 'home',   component: HomeRoutes, canActivate: [AuthGuard] },
            ...HomeRoutes,
            ...ChartRoutes,
            ...BSComponentRoutes,
            ...TableRoutes,
            ...BlankPageRoutes,
            ...FormRoutes,
            ...FormEmpresaRoutes,
            ...FormOperacaoRoutes,
            ...GridRoutes,
            ...BSElementRoutes,
            ...TabelaMagicaRoutes
            
        ]
    }
];
