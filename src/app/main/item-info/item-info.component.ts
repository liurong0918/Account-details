import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.scss']
})
export class ItemInfoComponent implements OnInit {
  payNumber = -1.37;
  @Input() data = {};
  constructor() { }

  ngOnInit() {
  }

}
