import { Component, OnInit, Input } from '@angular/core';
import { initialState } from 'src/store/reducers/account-reducer';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() cardInfo = {
    income: 0,
    expenses: 0,
    surplus: 0
  };
  constructor() { }

  ngOnInit() {
  }

}
