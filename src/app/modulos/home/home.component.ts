import { Component, OnInit } from '@angular/core';
import { SspsService } from '../../servicios/ssps.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private ssps:SspsService) { }

  ngOnInit(): void {

  }

}
