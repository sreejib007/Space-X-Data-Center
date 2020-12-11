
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  yearFilterList: Array<number>;
  selectedYear: number
  selectedLaunch: boolean;
  selectedLand: boolean;
  filterParam: {launch_year?:number, launch_success?: boolean, land_success?: boolean}
  @Input() set yearList(val : Array<number>){
    this.yearFilterList = val;
  }

  @Output() change = new EventEmitter();

  constructor() {
    this.filterParam = {
      launch_year: this.selectedYear,
      launch_success: this.selectedLaunch,
      land_success: this.selectedLand
    }
   }

  ngOnInit(): void {
  }

  onYearChange(event,value) {
    event.stopPropagation();
    this.filterParam.launch_year = value;
    this.change.emit(this.filterParam);
  }
  onLaunchChange(event,value) {
    event.stopPropagation();
    this.filterParam.launch_success = value;
    this.change.emit(this.filterParam);
  }
  onLandChange(event,value) {
    event.stopPropagation();
    this.filterParam.land_success = value;
    this.change.emit(this.filterParam);
  }
  clear(value){
    if(value==='year'){
      this.selectedYear = undefined;
      this.filterParam.launch_year = this.selectedYear
    }
    else if(value==='launch'){
      this.selectedLaunch = undefined;
      this.filterParam.launch_success = this.selectedLaunch;
    }
    else if(value==='land'){
      this.selectedLand = undefined;
      this.filterParam.land_success = this.selectedLand;
    }
    this.change.emit(this.filterParam);
  }

}

