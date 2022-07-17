import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent {

  @Input()
  public src: string = '';

  @Input()
  public full: boolean = false;

  @Output()
  public onClick: EventEmitter<boolean> = new EventEmitter<boolean>();

  public sendEvent(): void {
    this.onClick.emit(true);
  }

}
