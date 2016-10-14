import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FormEmpresaComponent } from './form-empresa.component';

@NgModule({
    imports: [
        RouterModule
    ],
    declarations: [FormEmpresaComponent],
    exports: [FormEmpresaComponent]
})

export class FormEmpresaModule { }
