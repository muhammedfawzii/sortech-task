import { CommonModule, DatePipe, NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-number-header',
  standalone: true,
  imports: [DatePipe, CommonModule , NgFor],
  templateUrl: './number-header.component.html',
  styleUrl: './number-header.component.scss'
})
export class NumberHeaderComponent {
  menuOpen:boolean = false
  @Input() numberDetails!: any;
  @Output() numberSelected = new EventEmitter<string>();

  phoneNumbers = [
    '01234567890',
    '01234567891',
    '01234567892',
    '01234567893',
    '01234567894'
  ];

  onNumberChange(event: Event) {
    const selectedNumber = (event.target as HTMLSelectElement).value;
    this.numberSelected.emit(selectedNumber);
  }
  
  openMenu():void{
    this.menuOpen = !this.menuOpen
  }
}
