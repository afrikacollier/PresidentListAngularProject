import { Component, Input, OnInit } from '@angular/core';
import { President } from '../president';
import { PRESIDENTS } from '../mock-presidents';
import { PresidentDetailComponent } from '../president-detail/president-detail.component';
import { PresidentsComponent } from '../presidents/presidents.component';

@Component({
  selector: 'app-president-infopage',
  templateUrl: './president-infopage.component.html',
  styleUrls: ['./president-infopage.component.css']
})
export class PresidentInfopageComponent extends PresidentsComponent implements OnInit {

  constructor() {
    super();
    super.onSelect = this.onSelect;
   }

  override ngOnInit(): void {
  }


  override onSelect(president: President): void {
    super.selectedPresident = president;
  }

}
