import { Component, OnInit } from '@angular/core';
import { IUser } from '../interfaces/i-user'
import { DataService } from '../services/data.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  image: string
  name: string
  tag: string
  active: any
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.getUser()
  }
  getUser(): void{
    this.dataService.getUser().subscribe(data =>
      this.setUser(data)
       )
  }
  setUser(user: IUser){
    this.image = user.image
    this.name = user.fullname
    this.tag = user.tag
  }
  async redirectPage(url){

    this.router.navigate([url]);
    
  }
  // isActive(view): boolean{
  //   if(view == this.active){
  //     return true;
  //   }
  //   return false;

  // }
  

}
