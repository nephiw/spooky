import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'admin/admin.service';
import { House } from 'house-decoration';

@Component({
  selector: 'bc-house-detail-page',
  templateUrl: './house-detail-page.component.html',
  styleUrls: ['./house-detail-page.component.less']
})
export class HouseDetailPageComponent implements OnInit {
  public key: string;
  public house: House;

  constructor(private readonly activatedRoute: ActivatedRoute, private readonly adminService: AdminService) { }

  ngOnInit() {
    this.key = this.activatedRoute.snapshot.paramMap.get('key');
    this.adminService.getHouse(this.key).subscribe((house: House) => {
      this.house = house;
    });
  }
}
