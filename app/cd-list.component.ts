import { Component } from 'angular2/core';
import { Cd } from './cd.model';
import { CdComponent } from './cd.component';

@Component ({
  selector: 'cd-list',
  inputs: ['cdList'],
  directives: [CdComponent],
  template: `
  <cd-display *ngFor="#currentCd of cdList"
    [cd]="currentCd">
  </cd-display>
  `
})

export class CdListComponent {
  public cdList: Cd[];
}
