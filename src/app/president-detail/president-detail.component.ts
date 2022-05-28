import { Component, Input, OnInit } from '@angular/core';
import { President } from '../president';

@Component({
  selector: 'app-president-detail',
  templateUrl: './president-detail.component.html',
  styleUrls: ['./president-detail.component.css']
})
export class PresidentDetailComponent implements OnInit {

  @Input() president?: President; //relook at this file as well

  constructor() { }

  ngOnInit(): void {
  }

}
