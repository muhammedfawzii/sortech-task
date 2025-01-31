import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TableRow } from '../core/data';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NgFor],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  @Input() tableData: TableRow[] = [];
  displayCount!: number;
  changeDisplayCount(count:number) :void{
    this.displayCount = count
  }
}
