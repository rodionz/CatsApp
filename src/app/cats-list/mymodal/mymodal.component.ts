import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-mymodal',
  templateUrl: './mymodal.component.html',
  styleUrls: ['./mymodal.component.css']
})
export class MymodalComponent implements OnInit {

  closeResult: string;
  inputsForm:FormGroup;
 

  @Output() passData:EventEmitter<Object> = new EventEmitter();

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.inputsForm = new FormGroup({
      'name' : new FormControl('', Validators.required),
      'color' : new FormControl('', Validators.required),
      'ownerNumber' : new FormControl('', Validators.required),
      'imageURL' : new FormControl('', Validators.required)

    })
    }

  setValues(){
    this.passData.emit(this.inputsForm.controls)
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
