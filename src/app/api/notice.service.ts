import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {

  private baseEndPointUrl = "http://localhost:8080/wordpress/wp-json/wp/v2/";
  
  constructor(private http: HttpClient) { }

  getAllNotices(){
    this.http.get(this.baseEndPointUrl + "notice").subscribe((response) => {
      console.log(response);
    });
  }
}
