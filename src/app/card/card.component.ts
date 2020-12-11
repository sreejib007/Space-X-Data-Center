import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  missionData;
  modelData
  @Input() set cardData(val) {
    this.missionData = val;
  }
  constructor() {
    this.missionData = [];
   }

  ngOnInit(): void {
  }

  getLaunchDate(date) :string {
    let dateString = new Date(date).toDateString();
    dateString = new Date(dateString).toUTCString();
    dateString = dateString.split(' ').slice(0, 3).join(' ');
    return dateString
  }

  setModelData(data){
    this.modelData = data;
  }

}
