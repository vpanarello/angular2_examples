"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var EventosComponent = (function () {
    function EventosComponent() {
    }
    EventosComponent.prototype.onClick = function () {
        alert('Execução de evento no Angular 2');
    };
    EventosComponent.prototype.onKeyUp = function (event) {
        this.conteudoAtual = event.target.value;
    };
    EventosComponent.prototype.onSave = function (valor) {
        this.conteudoArmazenado = valor;
    };
    EventosComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'eventos-binding',
            templateUrl: 'eventos.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], EventosComponent);
    return EventosComponent;
}());
exports.EventosComponent = EventosComponent;
//# sourceMappingURL=eventos.component.js.map