import { CommonModule, DatePipe, NgFor } from '@angular/common';
import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

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
  
  openMenu(event: Event) {
    event.stopPropagation();  
    this.menuOpen = !this.menuOpen;
  }

  @HostListener('document:click', ['$event'])
  closeMenu(event: Event) {
    const target = event.target as HTMLElement;
    
     
    if (!target.closest('.dropdown-menu') && !target.closest('.btn')) {
      this.menuOpen = false;
    }
  }
}
