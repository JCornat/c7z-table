import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <c7z-table [header]="header" [data]="data" [options]="options" (onActionClicked)="onActionClicked($event)" (onCellClicked)="onCellClicked($event)" (onColumnClicked)="onColumnClicked($event)" (onPageClicked)="onPageClicked($event)" (onRowClicked)="onRowClicked($event)"></c7z-table>
  `,
  styles: []
})
export class AppComponent {
  title = 'x';
  header = [
    {
      id: 'a',
      label: 'Lorem',
      order: 'ascending',
      clickable: true,
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
  data = [
    {
      a: '1',
      b: '2',
      c: '3',
      d: '4',
    }
  ];
  options = [];

  onActionClicked(data: any) {
    console.log('onActionClicked', data);
  }

  onCellClicked(data: any) {
    console.log('onCellClicked', data);
  }

  onColumnClicked(data: any) {
    console.log('onColumnClicked', data);
  }

  onPageClicked(data: any) {
    console.log('onPageClicked', data);
  }

  onRowClicked(data: any) {
    console.log('onRowClicked', data);
  }
}
