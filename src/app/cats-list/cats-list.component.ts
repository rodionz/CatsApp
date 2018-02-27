import { Component, OnInit, ViewChild } from '@angular/core';
import { CatsService } from '../Shared/cats-service.service';
import {NgbDateStruct, NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NgForm, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cats-list',
  templateUrl: './cats-list.component.html',
  styleUrls: ['./cats-list.component.css']
})



export class CatsListComponent implements OnInit {
  cats: any[] = [];

  filteredColor ="";
  name:string; 
  color:string;
  ownerNumber: string;
  imageURL:string;

  constructor(private catService: CatsService) { }

  ngOnInit() {
   this.catService.getCats()
   .subscribe(result => {
     this.cats = result.json()
   });

   
  }
  

  getData(message:any){ 
    
    this.name = message.name.value; 
    this.color = message.color.value;
    this.ownerNumber = message.ownerNumber.value;
    this.imageURL = message.imageURL.value;
    var obj = {name: this.name, color :this.color, ownerNumber: this.ownerNumber, imageURL: this.imageURL };
    this.cats.push(obj);
     }

  sortByName(){
    this.cats.sort(
      function(a, b) {
        var nameA = a.name.toUpperCase(); 
        var nameB = b.name.toUpperCase(); 
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      }
    )
    console.log(this.cats)
  }

  sortbyColor(){
    this.cats.sort(function(a,b) {return (a.color > b.color) ? 1 : ((b.color > a.color) ? -1 : 0);});
    
    console.log(this.cats)
  }




}
