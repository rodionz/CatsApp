import { Component, OnInit } from '@angular/core';
import { CatsService } from '../Shared/cats-service.service';

@Component({
  selector: 'app-cats-list',
  templateUrl: './cats-list.component.html',
  styleUrls: ['./cats-list.component.css']
})
export class CatsListComponent implements OnInit {
  cats: any[] = [];
  constructor(private catService: CatsService) { }

  ngOnInit() {
   this.cats = this.catService.getCats();
  }

}
