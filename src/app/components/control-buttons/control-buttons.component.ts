import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-control-buttons',
  templateUrl: './control-buttons.component.html',
  styleUrls: ['./control-buttons.component.css'],
})
export class ControlButtonsComponent {
  @Output() notifyParentPlus = new EventEmitter<boolean>();
  public addLinkPlus: boolean = false;

  public checkVariable() {
    this.addLinkPlus = !this.addLinkPlus;
    this.notifyParentPlusFunc();
  }

  public notifyParentPlusFunc() {
    this.notifyParentPlus.emit(this.addLinkPlus);
  }

  @HostListener('window:keydown.control.d', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.checkVariable();
    event?.preventDefault();
  }
}
