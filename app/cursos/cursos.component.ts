import {Component} from '@angular/core';

@Component({

    selector: 'curso',
    template: `<p>Curso: {{nome}} </p>

    <p>Lista de disciplinas</p>
    <ul>
        <li *ngFor="let disciplina of disciplinas">
            {{ disciplina }}
        </li>
        
    </ul>
    `
})
export class  CursosComponent{
    nome = 'MBA Java SOA'
    disciplinas = ['Persistencia', 'Java Web', 'EJB 3.0', 'Design Responsive'];
}

