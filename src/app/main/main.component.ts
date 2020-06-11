import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  todayList = [1,2];
  yesterdayList = [1,2];
  cardInfo: any;
  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.mainService.getAccountDetail().subscribe(data => {
      this.cardInfo = data.acount;
    });
    this.mainService.getRecordDetail().subscribe(data => {
      this.todayList = data.result.today;
      this.yesterdayList = data.result.yesterday;

    });
  }

}
