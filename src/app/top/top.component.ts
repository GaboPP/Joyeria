import { Component, OnInit, Input } from '@angular/core';
import {MatDialog} from '@angular/material';
import { CartOComponent } from '../cart-o/cart-o.component';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  @Input() anillo: any;
  icon: HTMLElement| null;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(CartOComponent, {
      width: '80%',
      data: this.anillo
    });
  }
}
