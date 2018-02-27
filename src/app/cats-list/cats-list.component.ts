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
  spacing:number; 
  length:number;

  constructor(private catService: CatsService, private fb:FormBuilder) { }

  ngOnInit() {
   this.catService.getCats()
   .subscribe(result => {
     this.cats = result.json()
   });

   
  }
  

  getData(message:any){ 
    console.log(message);
    this.spacing=message.Spacing; 
    this.length=message.Length;
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
