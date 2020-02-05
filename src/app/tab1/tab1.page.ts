import { NoticeService } from '../api/notice.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private noticeService: NoticeService) {
    this.getAllNotice();
  }

  getAllNotice(){
    this.noticeService.getAllNotices();
  }

}
