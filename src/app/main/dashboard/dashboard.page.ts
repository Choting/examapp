import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { DataService } from '../../services/data.service'



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  assets: any
  total: string
  sample: ['1', '2', '3', '4'];
  main_policy = []
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getAssets()
    this.getMainPolicy()
    
    
  }
  getAssets(): void {
    this.dataService.getAssets().subscribe(data =>
      this.setAssets(data)
       )
  }
  getMainPolicy(): void{
    this.dataService.getMainPolicy().subscribe(data =>
      this.setMain(data)
       )
  }
  setAssets(data){
    this.assets = data.assets
    this.total = data.total
  }

  //re arrange data array for column/row
  setMain(data){
    console.log(data);
    let creating = true;
    this.main_policy = []
    let k = 0;
    do {
      let layer = [];
      for(let i = 0; i<2; i++){
        if(k < data.length){
          let arr = {
            id: data[k].id,
            name: data[k].name,
            value: data[k].value,
            img: data[k].img
          }
          layer.push(arr)
          k++
        }else{
          creating = false
        }
      }
      if(layer.length>0){
        this.main_policy.push(layer)
      }
    }while(creating){
      console.log(this.main_policy);    
    }
  }

  

}
