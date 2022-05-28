//This took my some time to figure out should relook at it later
import { Component, OnInit } from '@angular/core';
import { President } from '../president';
import { PRESIDENTS } from '../mock-presidents';
@Component({
  selector: 'app-presidents',
  templateUrl: './presidents.component.html',
  styleUrls: ['./presidents.component.css']
})
export class PresidentsComponent implements OnInit {
  presidents: President[] = PRESIDENTS;
  selectedPresident?: President;
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(president: President): void {
    this.selectedPresident = president;
  }

}
