import { Component, OnInit } from '@angular/core';
import { IServices } from '../../interfaces/i-services'
import { DataService } from '../../services/data.service'
@Component({
  selector: 'app-policy-servicing',
  templateUrl: './policy-servicing.page.html',
  styleUrls: ['./policy-servicing.page.scss'],
})
export class PolicyServicingPage implements OnInit {
  services: IServices

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getService()
  }
  getService(): void {
    this.dataService.getService().subscribe(data =>
      this.services = data
       )
  }

}
