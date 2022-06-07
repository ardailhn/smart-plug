import { Component, OnInit } from '@angular/core';
import { Akim } from '../models/akim';
import { Gerilim } from '../models/gerilim';
import { Guc } from '../models/guc';
import { Nem } from '../models/nem';
import { Sicaklik } from '../models/sicaklik';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  constructor(private dataService:DataService) { }

  akim!:Akim
  gerilim!:Gerilim
  sicaklik!:Sicaklik
  guc!:Guc
  nem!:Nem

  ngOnInit() {
    this.getAkim();
    this.getGerilim();
    this.getGuc();
    this.getSicaklik();
    this.getNem();
  }

  getSicaklik(){
    this.dataService.getSicaklik().subscribe(data => {
      this.sicaklik = data
    })
  }

  getNem(){
    this.dataService.getNem().subscribe(data => {
      this.nem = data
    })
  }

  getAkim(){
    this.dataService.getAkim().subscribe(data => {
      this.akim = data
    })
  }

  getGerilim(){
    this.dataService.getGerilim().subscribe(data => {
      this.gerilim = data
    })
  }

  getGuc(){
    this.dataService.getGuc().subscribe(data => {
      this.guc = data
    })
  }

  putOpen(){
    this.dataService.putOpen();
  }

  putClose(){
    this.dataService.putClose();
  }

}
