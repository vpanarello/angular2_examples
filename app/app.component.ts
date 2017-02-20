import { Component } from '@angular/core';

import {PrimeiroExemplo} from './exemplos/primeiro-exemplo.component';
import {CursosComponent} from './cursos/cursos.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Boilerplate</h1>
        <p>Hello World!</p>
        <p>Desing Responsivo</p>
        <primeiro-exemplo></primeiro-exemplo>
        <curso></curso>
    `,
    directives: [PrimeiroExemplo, CursosComponent]
})
export class AppComponent { }
