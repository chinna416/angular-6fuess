import { Component, ViewChild } from '@angular/core';
import { HeaderComponent } from './header.component';

@Component({
  selector: 'app-body',
  template:
    '<app-header (childData)="inputData($event)"></app-header>  <button (click)="getVal()">Get Value</button><app-footer [ouput]="inputResult"></app-footer>',
})
export class BodyComponent {
  
  @ViewChild(HeaderComponent) child: HeaderComponent;

  inputResult = '';
  inputData(data: any) {
    this.inputResult = data;
  }
  getVal() {
    this.child.addion();
  }
}
