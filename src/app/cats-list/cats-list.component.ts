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
  constructor(private catService: CatsService,private modalService: NgbModal) { }

  ngOnInit() {
   this.catService.getCats()
   .subscribe(result => {
   })
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
