import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { HttpWrapperService } from './http-wrapper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Space X Data';
  constructor(){
  }
  ngOnInit(){
  }
}
