import { Component } from '@angular/core';

import { CursosServices } from './cursos.services';

@Component({
    moduleId: module.id,
    selector: 'curso',
    /* 
    template: `
    
    <p>Curso: {{nome}} </p>
    <p>Lista de disciplinas</p>
    <ul>
        <li *ngFor="let disciplina of disciplinas">
            {{ disciplina }}
        </li>
        
    </ul>
    `
    */
    templateUrl: 'cursos.component.html',
    providers: [ CursosServices ]
})
export class CursosComponent {
    nome = 'MBA Java SOA';

    disciplinas: string[];

    constructor(cursosServices : CursosServices) {
        this.disciplinas = cursosServices.getDisciplinas();
    }
}

