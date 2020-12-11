import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpWrapperService {

  private baseUrl: string;

  constructor(private httpclient:HttpClient) { 
    this.baseUrl = 'https://api.spaceXdata.com/v3';
  }

  getData(urlRout, data?){
    let url = this.baseUrl+urlRout
    let params = new HttpParams();
    if(data){
      Object.keys(data).forEach((key,index)=>{
        params = params.append(key, data[key]);
      })
    }
    return this.httpclient.get(url, {params: params}).pipe(
      map( (response) => {
       return response; 
     } )
    )
     
  }

  postData(urlRout, data){
    return this.httpclient.post(urlRout,data).pipe(
      map( (response) => {
       return response; 
     } )
    )
  }

  putData(urlRout, data) {
    return this.httpclient.put(urlRout,data).pipe(
      map( (response) => {
       return response; 
     } )
    )
  }

  deleteData(urlRout, data){
    return this.httpclient.delete(urlRout,data).pipe(
      map( (response) => {
       return response; 
     } )
    )
  }
}
