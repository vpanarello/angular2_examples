import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'eventos-binding',
    templateUrl: 'eventos.component.html',
    styles : [ `
        .destaque {
            background-color: yellow;
            font-weight: bold;
        }
    
    
    `
    ]
})
export class EventosComponent{

    conteudoAtual: string;
    conteudoArmazenado: string;
    isMouseOver = false;

    onClick() {
        alert('Execução de evento no Angular 2');
    }

    onKeyUp(event:KeyboardEvent) {
        this.conteudoAtual = event.target.value;
    }

    onSave(valor: string) {
        this.conteudoArmazenado = valor;
    }

    onMouseSpan() {
        this.isMouseOver = ! this.isMouseOver;
    }

}