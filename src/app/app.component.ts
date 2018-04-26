import { Component, OnInit } from '@angular/core';
import { GetDataService } from './get-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  totalList = [];
  title = 'app';
  searchText = '';
  constructor(private _getDataService: GetDataService) { }
  ngOnInit() {
    this._getDataService.getList().subscribe(data => {
      this.totalList = data;
    });
  }
}
