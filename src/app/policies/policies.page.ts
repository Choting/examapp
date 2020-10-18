import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service'
import { IPolicies } from '../interfaces/i-policies'
@Component({
  selector: 'app-policies',
  templateUrl: './policies.page.html',
  styleUrls: ['./policies.page.scss'],
})
export class PoliciesPage implements OnInit {
  policies: IPolicies

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getPolicy()
  }
  getPolicy(): void {
    this.dataService.getPolicy().subscribe(data =>
      this.policies = data
       )
  }

}
