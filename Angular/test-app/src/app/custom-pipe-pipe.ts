//  Create a sorting pipe
// - sorting criteria can be either string or Array<string>
// - use “-” to specify if the sorting should be ascending or descending
// - consider all primitive types, objects, arrays and dates
// // Examples
// // Simple sort by name
// <div *ngFor=”let item of options | customSort: '-name'”>{{item}}</div>
// // Sort by name and then by price
// <div *ngFor=”let item of options | customSort: ['name', '-
// price']”>{{item}}</div>

import { Pipe, PipeTransform } from '@angular/core';

export interface Item {
  name: string;
  price: number;
  date: Date;
  flagged: boolean;
  symb?: symbol;
  [key: string]: any;
}

@Pipe({
  name: 'customSort'
})
export class CustomPipe implements PipeTransform {
  transform(value: Item[], args: string | string[]): Item[] {
    if (typeof args === 'string') {
      args = [args];
    }
    return value.sort(this.compareBy(args));
  }

 private compareBy = (sortingFields: string[]) => (a: Item, b: Item) => {
  for (let i = 0; i < sortingFields.length; i++) {
    const sortingAspect = sortingFields[i].startsWith('-') ? -1 : 1;
    const property = sortingFields[i].startsWith('-') ? sortingFields[i].substring(1) : sortingFields[i];

    if (!(property in a) || !(property in b)) {
      continue;
    }

    if (a[property] === undefined || b[property] === undefined) continue;
    if (a[property] === null || b[property] === null) continue;

    let comparisonResult = 0;
    if (typeof a[property] === 'string' && typeof b[property] === 'string') {
      comparisonResult = a[property].localeCompare(b[property]);
    }
    if (typeof a[property] === 'symbol' && typeof b[property] === 'symbol') {
      comparisonResult = a[property].toString().localeCompare(b[property].toString());
    }
    if (typeof a[property] === 'boolean' && typeof b[property] === 'boolean') {
      comparisonResult = Number(a[property]) - Number(b[property]);
    }
    if (a[property] instanceof Date && b[property] instanceof Date) {
      if (a[property].getTime() === b[property].getTime()) {
        comparisonResult = 0;
      } else {
        comparisonResult = a[property] > b[property] ? 1 : -1;
      }
    }
     if (typeof a[property] === 'number' && typeof b[property] === 'number' ||
      typeof a[property] === 'bigint' && typeof b[property] === 'bigint'
     ) {
      if (a[property] === b[property]) {
        comparisonResult = 0;
      } else {
        comparisonResult = a[property] > b[property] ? 1 : -1;
      }
    }
    if (comparisonResult !== 0) return comparisonResult * sortingAspect;

  }
  return 0;
};

}
