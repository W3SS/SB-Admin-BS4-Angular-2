import { Component, OnInit } from '@angular/core';
import { TabelaMagicaService } from './tabela-magica.service';
import { TabelaMagica} from './tabela-magica';


@Component({
    moduleId: module.id,
    selector: 'tables-cmp',
    templateUrl: 'tabela-magica.component.html',
    providers: [TabelaMagicaService]
})

export class TabelaMagicaComponent implements OnInit {
    tabelaMagica: TabelaMagica[];


    constructor(private tabelaMagicaService: TabelaMagicaService) { }

    getValoresTabelaMagica(): void {
        //this.tabelaMagicaService.getValores().then(valores => this.tabelaMagica = valores);
        //        this.tabelaMagicaService.getValores();
    }


    private getAllItems(): void {
        this.tabelaMagicaService.GetAll().subscribe(
            (data: TabelaMagica[]) => this.tabelaMagica = data,
            error => console.log(error),() => console.log('Get all Items complete'));
    }
    
    ngOnInit(): void {
        //this.getValoresTabelaMagica();
        this.getAllItems();
    }

}
