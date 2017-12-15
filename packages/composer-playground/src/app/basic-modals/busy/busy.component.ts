import { Component, Input } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'busy',
    templateUrl: './busy.component.html',
    styles: [require('./busy.component.scss').toString()]
})
export class BusyComponent {
    @Input() busy;

    constructor(public activeModal: NgbActiveModal) {

    }
}
