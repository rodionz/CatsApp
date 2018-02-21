import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cats-item',
  templateUrl: './cats-item.component.html',
  styleUrls: ['./cats-item.component.css']
})
export class CatsItemComponent implements OnInit {
@Input() singleCat;
  constructor() { }

  catName = "";
  catColor ="";
  ownerId = "";
  imgPath = "";


  ngOnInit() {
    this.catName = this.singleCat.name;
    this.catColor = this.singleCat.color;
    this.ownerId = this.singleCat.ownerNumber;
    this.imgPath = this.singleCat.imageURL;
  }

}
