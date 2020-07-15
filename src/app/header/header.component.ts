import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() featurSelected = new EventEmitter<string>();

  onSelect(feauter: string) {
    this.featurSelected.emit(feauter);
  }
}
