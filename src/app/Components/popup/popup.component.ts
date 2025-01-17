import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})
export class PopupComponent {
  @Input() message: string = '';
  @Input() popupType: 'success' | 'failure' = 'success'; // Can be 'success' or 'failure'
  @Input() isVisible: boolean = false;

  @Output() close = new EventEmitter<void>();

  closePopup() {
    this.close.emit();
  }
}
