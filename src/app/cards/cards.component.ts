import { Component, OnInit, Input } from '@angular/core';
import {MatDialog} from '@angular/material';
import { CartOComponent } from '../cart-o/cart-o.component';
import {MatSnackBar} from '@angular/material';
import {AvisoComponent} from '../aviso/aviso.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() anillo: any;
  @Input() id: any;
  icon: HTMLElement| null;
  constructor(public dialog: MatDialog, public snackBar: MatSnackBar) { }

  ngOnInit() {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(CartOComponent, {
      width: '80%',
      data: this.anillo
    });
  }
  paint(id): void {
    this.icon = document.getElementById(id);
    if (this.icon) {
      this.icon.style.color = 'red';
    }
  }
  openBar() {
    this.snackBar.openFromComponent(AvisoComponent, {
      duration: 500,
    });
    
  }
}

