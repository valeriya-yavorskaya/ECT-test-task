// Create a repeater component which repeats everything within the
// enclosing tags as many times as there are elements in the input array. The
// repeated template has access to the current object, exposed as “item”.
// // Example
// data = [{ name: 'A' }, { name: 'B' }, { name: 'C' }]
// // HTML
// ...
// <repeater [option]='data'>
//  <!-- template comes here -->
// </repeater>
// ...
// // Example template
// <div>{{item.name}}</div>
// // Output
// A
// B
// C

import { Component } from '@angular/core';
import { Repeater } from './repeater/repeater';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task5',
  imports: [Repeater, CommonModule],
  templateUrl: './task5.html',
  styleUrl: './task5.scss',
  standalone: true,
})
export class Task5 {
  data = [
    {name: 'A'},
    {name: 'B'},
    {name: 'C'}
  ];
}
