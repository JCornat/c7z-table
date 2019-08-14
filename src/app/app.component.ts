import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <c7z-table [header]="header" [data]="data" [options]="options" (onActionClicked)="onActionClicked($event)" (onCellClicked)="onCellClicked($event)" (onColumnClicked)="onColumnClicked($event)" (onPageClicked)="onPageClicked($event)" (onRowClicked)="onRowClicked($event)"></c7z-table>
  `,
  styles: []
})
export class AppComponent {
  public header = [
    {
      id: 'a',
      label: 'Lorem',
      order: 'ascending',
      clickable: true,
      size: 'flex-20',
      styles: [
        'italic',
        'bold',
      ],
      display: {
        extraSmall: true,
        small: true,
        medium: true,
        large: true,
        extraLarge: true,
      }
    },
    {
      id: 'b',
      label: 'Ipsum',
      order: 'descending',
      size: 'flex-50',
      clickable: true,
      styles: [
        'bold',
      ],
      display: {
        extraSmall: true,
        small: true,
        medium: true,
        large: false,
        extraLarge: false,
      }
    },
    {
      id: 'c',
      label: 'Dolor',
      order: 'ascending',
      clickable: true,
      styles: [
        'italic',
      ],
      size: 'flex-20',
      display: {
        extraSmall: false,
        small: false,
        medium: false,
        large: true,
        extraLarge: true,
      }
    },
    {
      id: 'd',
      label: 'Sit Amet',
    },
  ];

  public data = [
    {
      a: 'Cell 0-0',
      b: 'Cell 1-0',
      c: 'Cell 2-0',
      d: 'Cell 3-0',
    },
    {
      a: 'Cell 0-1',
      b: 'Cell 1-1',
      c: 'Cell 2-1',
      d: 'Cell 3-1',
    },
    {
      a: 'Cell 0-2',
      c: 'Cell 2-2',
      d: 'Cell 3-2',
    },
    {
      a: 'Cell 0-3',
      b: 'Cell 1-3',
      c: 'Cell 2-3',
      d: 'Cell 3-3',
      z: 'Cell 4-3',
    },
  ];

  public options = [];

  public onActionClicked(data: any): void {
    console.log('onActionClicked', data);
  }

  public onCellClicked(data: any): void {
    console.log('onCellClicked', data);
  }

  public onColumnClicked(data: any): void {
    console.log('onColumnClicked', data);
  }

  public onPageClicked(data: any): void {
    console.log('onPageClicked', data);
  }

  public onRowClicked(data: any): void {
    console.log('onRowClicked', data);
  }
}
