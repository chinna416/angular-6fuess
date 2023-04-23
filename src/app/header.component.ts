import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  template:
    '<input type="number" [(ngModel)]="name1" [disabled]="disabled"><br><br><input type="number" [(ngModel)]="name2" [disabled]="disabled"><br><br>',
})
export class HeaderComponent {
  name1: number = 13;
  name2: number = 10;

  // disabled = false;

  @Output() childData: EventEmitter<any> = new EventEmitter();

  addion() {
    this.childData.emit(this.name1 + this.name2);
  }
}
