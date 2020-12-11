import { Component, OnInit } from '@angular/core';
import { HttpWrapperService } from '../http-wrapper.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allMissionData;
  missionData
  isLoadMoreButton: boolean = true;
  yearFilterList;
  constructor(public httpWrapperService:HttpWrapperService) { } 

  ngOnInit(): void {
    this.getData({limit:100}, true);
  }

  getData(data, needtoReset?:boolean) {
    this.httpWrapperService.getData('/launches', data).subscribe((response)=>{
      this.allMissionData = response;
      if(needtoReset){
        this.yearFilterList = [...new Set(this.allMissionData.map(a => a.launch_year))];
      }
      this.missionData = this.allMissionData.slice(0,10);
      this.isLoadMoreButton = this.allMissionData.length > 10 ? true : false;
    })
  }

  loadMoreData() : void {
    if(this.allMissionData.length > this.missionData.length){
      this.isLoadMoreButton = true;
      this.missionData = this.allMissionData.slice(0,this.missionData.length+10);
    }else{
      this.isLoadMoreButton = false;
    }
  }

  filterChanged(event:{launch_year?:number, launch_success?: boolean, land_success?: boolean}){
    if(!event.land_success){
      delete event.land_success
    }
    if(!event.launch_success){
      delete event.launch_success
    }
    if(!event.launch_year){
      delete event.launch_year
    }
    this.getData(event)
  }
}
