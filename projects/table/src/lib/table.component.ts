import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'c7z-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input('header') set header(data: any) {
    this._header = data;
    console.log('header', data);
    this.init();
  }

  @Input('data') set data(data: any) {
    this._data = data;
    console.log('data', data);
    this.init();
  }

  @Input('options') set options(data: any) {
    this._options = data;
    console.log('options', data);
    this.init();
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

  ngOnInit() {
  }

  public init(): void {
    console.log('init');
  }

  public clickHeader(item: any, event?: Event): void {
    if (event instanceof Event) {
      event.stopPropagation();
      event.preventDefault();
    }

    item.order = (!item.order) ? 'descending' : (item.order === 'descending') ? 'ascending' : null;
    this.onColumnClicked.emit({id: item.id, order: item.order});
  }
}
