import { Component, OnInit, ViewChild } from '@angular/core';
import {CardsComponent} from '../cards/cards.component';
import {TopComponent} from '../top/top.component';

@Component({
  selector: 'app-vitrina',
  templateUrl: './vitrina.component.html',
  styleUrls: ['./vitrina.component.css']
})
export class VitrinaComponent implements OnInit {
  Anillos = [
  {
    nombre: 'Lady',
    gramo: 3.5,
    medidas: '10-24',
    stock: true
  },
  {
    nombre: 'medio cintillo',
    gramo: 2.5,
    medidas: '10-24',
    stock: true
  },
  {
    nombre: 'Reina',
    gramo: 4.5,
    medidas: '10-24',
    stock: true
  },
  {
    nombre: 'León',
    gramo: 6,
    medidas: '16-24',
    stock: true
  },
  {
    nombre: 'Aros lady',
    gramo: 1.5,
    medidas: '10-24',
    stock: true
  }
];
  Anillos_top = [
    {
      nombre: 'Lady',
      gramo: 3.5,
      medidas: '10-24',
      stock: true
    },
    {
      nombre: 'medio cintillo',
      gramo: 2.5,
      medidas: '10-24',
      stock: true
    },
    {
      nombre: 'Reina',
      gramo: 4.5,
      medidas: '10-24',
      stock: true
    },
  ];
  @ViewChild(CardsComponent) card: CardsComponent;
  @ViewChild(TopComponent) top: TopComponent;
  constructor() { }

  ngOnInit() {
  }

}
