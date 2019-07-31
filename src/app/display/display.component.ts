import { Component, OnInit } from '@angular/core';
import { DataService } from '../d.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  constructor(private ds: DataService) {

  }

  ngOnInit() {
    console.log('from display', (this.ds.getEnteredUser()));
  }

  deleteA(index) {
    this.ds.a.splice(index, 1);
  }
  deleteAll() {
    this.ds.a = [];
  }
  update(i): void {
    this.ds.pushBackData(this.ds.a[i]);
  }

}
