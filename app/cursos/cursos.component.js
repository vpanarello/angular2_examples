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
var cursos_services_1 = require('./cursos.services');
var CursosComponent = (function () {
    function CursosComponent(cursosServices) {
        this.nome = 'MBA Java SOA';
        this.disciplinas = cursosServices.getDisciplinas();
    }
    CursosComponent = __decorate([
        core_1.Component({
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
            providers: [cursos_services_1.CursosServices]
        }), 
        __metadata('design:paramtypes', [cursos_services_1.CursosServices])
    ], CursosComponent);
    return CursosComponent;
}());
exports.CursosComponent = CursosComponent;
//# sourceMappingURL=cursos.component.js.map