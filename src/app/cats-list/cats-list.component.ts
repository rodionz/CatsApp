import { Component, OnInit } from '@angular/core';
import { CatsService } from '../Shared/cats-service.service';
import {NgbDateStruct, NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cats-list',
  templateUrl: './cats-list.component.html',
  styleUrls: ['./cats-list.component.css']
})



export class CatsListComponent implements OnInit {
  cats: any[] = [];
  closeResult: string;
  sortParam: '';
  constructor(private catService: CatsService,private modalService: NgbModal) { }

  ngOnInit() {
   this.catService.getCats()
   .subscribe(result => {
     this.cats = result.json()
   })
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



  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
