import { Component } from '@angular/core';
import { CustomPipe, Item } from './custom-pipe/custom-pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task4',
  imports: [CustomPipe, CommonModule],
  templateUrl: './task4.html',
  styleUrl: './task4.scss',
  standalone: true,
})
export class Task4 {
  options: Item[] = [
    { name: 'Item 2', price: 11, date: new Date('2023-01-01'), flagged: true  },
    { name: 'Item 3', price: 12, date: new Date('2023-01-01'), flagged: true, symb: undefined },
    { name: 'Item 4', price: 13, date: new Date('2023-01-04'), flagged: true, symb: Symbol('item2')  },
    { name: 'Item 4', price: 14, date: new Date('2023-01-03'), flagged: false, symb: Symbol('item1')  },
  ]
}
