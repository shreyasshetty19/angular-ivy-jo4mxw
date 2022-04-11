import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'events-app',
  template: '<h2>Hello ji</h2>',
})
export class EventsAppComponent {
  name = 'Angular ' + VERSION.major;
}
