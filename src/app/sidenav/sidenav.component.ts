import { Component, OnInit } from '@angular/core';
export interface Jew {
  value: string;
  viewValue: string;
}
export interface Opcion {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  jews: Jew[] = [
    {value: '0', viewValue: 'Anillo'},
    {value: '1', viewValue: 'Aros'},
    {value: '2', viewValue: 'Cadenas'}
  ];
  opciones: Opcion[] = [
    {value: '0', viewValue: 'Menor a Mayor Precio'},
    {value: '1', viewValue: 'Mayor a Menor Precio'},
    {value: '2', viewValue: 'Populares'}
  ];
  constructor() { }
  ngOnInit() {
  }

}
