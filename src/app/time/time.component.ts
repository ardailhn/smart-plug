import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {

  constructor(private dataService:DataService) { }
  saat!:number;
  dakika!:number;
  ngOnInit() {
  }

  putTime(x:string){
    this.dataService.putTime(parseInt(x));
  }

}
