import { Component, OnInit } from '@angular/core';
import {GetDataService} from "../get-data.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  totalList = [];
  searchText = '';

  constructor(private _getDataService: GetDataService) {
  }

  ngOnInit() {
    this._getDataService.getList().subscribe(data => {
      this.totalList = data;
    });

  }
}
