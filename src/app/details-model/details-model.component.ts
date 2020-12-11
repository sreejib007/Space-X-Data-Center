import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-model',
  templateUrl: './details-model.component.html',
  styleUrls: ['./details-model.component.css']
})
export class DetailsModelComponent implements OnInit {
  modelData;
  btnName: string ="Get Json View";
  isShowJson: boolean = false;
  isReddit : boolean = false;
  @Input() set dataModel(data){
    this.modelData = data;
    console.log(this.modelData, '##########')
  }
  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.isShowJson = !this.isShowJson;
    if(this.isShowJson){
      this.btnName = "Hide Json View";
    }else{
      this.btnName = "Get Json View"
    }
  }

  toggleReddit(){
    this.isReddit = !this.isReddit
  }

  close(){
    this.btnName ="Get Json View";
    this.isShowJson = false;
    this.isReddit  = false;
  }

}
