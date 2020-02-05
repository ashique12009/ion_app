import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {

  private baseEndPointUrl = "http://localhost:8080/wordpress/wp-json/wp/v2/";
  public data : any;
  
  constructor(private http: HttpClient) { }

  getAllNotices(){

    return new Promise(resolve => {
      // We're using Angular HTTP provider to request the data,
      // then on the response, it'll map the JSON data to a parsed JS object.
      // Next, we process the data and resolve the promise with the new data.
      this.http.get(this.baseEndPointUrl + "notice")
        // .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.data = data;
          resolve(this.data);
        });
    });

    // this.http.get(this.baseEndPointUrl + "notice").subscribe((response) => {
    //   console.log(response);
    //   return response;
    // });
  }
}
