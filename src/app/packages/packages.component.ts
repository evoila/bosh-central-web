import { Component, OnInit } from '@angular/core';
import { PackageService } from '../package.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {
  public packages: Array<any>;
  constructor(private packageService: PackageService) { }

  ngOnInit() {
    this.packageService.getPackages().subscribe(k => this.packages = k);
  }

}
