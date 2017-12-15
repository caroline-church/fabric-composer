import { Component, Input } from '@angular/core';

@Component({
    selector: 'tutorial-link',
    templateUrl: './tutorial-link.component.html',
    styles: [require('./tutorial-link.component.scss').toString()]
})

export class TutorialLinkComponent {
  @Input()
  link: string;
}
