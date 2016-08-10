import { Component } from 'angular2/core';
import { Cd } from './cd.model';

@Component({
  selector: 'cd-display',
  inputs: ['cd'],
  template: `
  <div>
  <label>{{ cd.artist }} | {{ cd.title}} | {{ cd.price }} | {{ cd.genre }}</label>
  </div>
  `
})

export class CdComponent {
  public cd: Cd;
}
