import { Component, OnInit } from '@angular/core';
import { TabelaMagicaService } from './tabela-magica.service';
import { TabelaMagica} from '../../shared/entity/tabela-magica';

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
        this.tabelaMagicaService.getAll()
                .subscribe( 
                    data => {this.tabelaMagica = data;
                            console.log("Sucesso get tabela mágica.")}
                    ,
                    error => {
                        console.log(error)
                    } 
                );
    }
    
    ngOnInit(): void {            
        this.getValoresTabelaMagica();
    }

}
