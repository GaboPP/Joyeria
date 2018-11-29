import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  count = 0;
  visible = false;
  constructor(private _route: ActivatedRoute, private _router: Router, private location: Location) { }

  ngOnInit() {
  }
  public go_cotizar() {
    this.location.forward();
    location.href = 'joyeria';
    this._router.navigate(['joyeria']);
  }

}
