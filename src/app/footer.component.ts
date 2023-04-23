import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: '<h1>{{ouput}}</h1>',
})
export class FooterComponent {
  @Input() ouput: any;
}
