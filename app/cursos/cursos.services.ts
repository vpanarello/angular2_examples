
import { Injectable } from '@angular/core'

@Injectable()
export class CursosServices {
    getDisciplinas() {
        return ['Persistencia',
            'Java Web',
            'EJB 3.0',
            'Design Responsive'];
    }
}