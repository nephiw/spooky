import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'bc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  public isAdmin = false;

  constructor(
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.isAdmin = val.url.indexOf('admin') > -1;
        window.scrollTo(0, 0);
      }
    });
  }
}
