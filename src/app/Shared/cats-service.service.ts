import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class CatsService {

  constructor(private http: Http) { }

  getCats(){
    return this.http.get("https://cats-97a3a.firebaseio.com/cats.json")
    
  }

  updateCat(index, cat){
    //this.cats[index] = cat;
  }

}



