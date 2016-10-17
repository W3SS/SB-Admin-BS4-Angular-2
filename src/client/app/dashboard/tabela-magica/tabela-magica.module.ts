import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { TabelaMagicaComponent } from './tabela-magica.component';

@NgModule({
    imports: [BrowserModule, RouterModule],
    declarations: [TabelaMagicaComponent],
    exports: [TabelaMagicaComponent]
})

export class TabelaMagicaModule { }
