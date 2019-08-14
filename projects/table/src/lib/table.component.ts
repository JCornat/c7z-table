import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'c7z-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input('header') set header(data: any) {
    this._header = this.processHeader(data);
    console.log('header', data);
  }

  @Input('data') set data(data: any) {
    this._data = data;
    console.log('data', data);
  }

  @Input('options') set options(data: any) {
    this._options = data;
    console.log('options', data);
  }

  @Output('onColumnClicked') public onColumnClicked = new EventEmitter<any>();
  @Output('onActionClicked') public onActionClicked = new EventEmitter<any>();
  @Output('onRowClicked') public onRowClicked = new EventEmitter<any>();
  @Output('onCellClicked') public onCellClicked = new EventEmitter<any>();
  @Output('onPageClicked') public onPageClicked = new EventEmitter<any>();

  public _header: any;
  public _data: any;
  public _options: any;

  constructor() {
    //
  }

  public ngOnInit() {
    //
  }

  public init(): void {
    console.log('init');
  }

  public clickColumn(column: any, event?: Event): void {
    if (event instanceof Event) {
      event.stopPropagation();
      event.preventDefault();
    }

    column.order = (!column.order) ? 'descending' : (column.order === 'descending') ? 'ascending' : null;
    this.onColumnClicked.emit({id: column.id, order: column.order});
  }

  public clickRow(row: any, event?: Event): void {
    if (event instanceof Event) {
      event.stopPropagation();
      event.preventDefault();
    }

    this.onRowClicked.emit(row);
  }

  public clickCell(row: any, column: any, event?: Event): void {
    if (event instanceof Event) {
      event.stopPropagation();
      event.preventDefault();
    }

    this.onCellClicked.emit({row, column});

    this.clickRow(row); // Propagate to row
  }

  public processHeader(data: any[]): any[] {
    const res = [];

    for (const item of data) {
      item.class = (item.size) ? item.size : 'flex';
      res.push(item);
    }

    return res;
  }
}
