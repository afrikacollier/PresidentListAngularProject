import { Component, Input, OnInit } from '@angular/core';
import { President } from '../president';
import { PRESIDENTS } from '../mock-presidents';
import { PresidentDetailComponent } from '../president-detail/president-detail.component';
import { PresidentsComponent } from '../presidents/presidents.component';
import { PresidentService } from '../president.service';

@Component({
  selector: 'app-president-infopage',
  templateUrl: './president-infopage.component.html',
  styleUrls: ['./president-infopage.component.css']
})
export class PresidentInfopageComponent implements OnInit {

  constructor(public presidentService: PresidentService) {
   }

  ngOnInit(): void {
  }


}
