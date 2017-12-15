import { Component, Input } from '@angular/core';

@Component({
    selector: 'tutorial-link',
    templateUrl: './tutorial-link.component.html',
    styleUrls: ['./tutorial-link.component.scss']
})

export class TutorialLinkComponent {
  @Input()
  link: string;
}
