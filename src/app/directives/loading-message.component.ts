import { Component, Input } from '@angular/core';

@Component({
  template: '<p>{{message}}</p>',
  standalone: true
})
export class LoadingMessageComponent {
  @Input() message = 'You have No Data';
}
