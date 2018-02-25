import { Injectable } from '@angular/core';

@Injectable()
export class CatsService {

  constructor() { }

 private cats: any[] = [{"name": "vaska", "color": "red","ownerNumber" : "0545746382", "imageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhVYyiQSV6H-s_cyngCBCqea4xGuHUG3bOeaOOwegRpLrtujUU"}, 
 {"name": "vaska", "color": "red", "ownerNumber" : "0534535345", "imageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyPHmcrxmxM75Riu4No3L-uwZVT_D4lW1Jv-y5HMmSASwnDgo1Vg" },  
 {"name": "petka", "color": "white", "ownerNumber" : "054234567565", "imageURL":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHwTg8ONFftaSfn6CE-4Jv9yK_eb_xWwKuRSE06GqwaFeRgq-l" } ,
 {"name": "grisha", "color": "white", "ownerNumber" : "774345345", "imageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn_LjE23one8z9QtpuZN5hjVN4yiTzIHsMipNeZxY1u9gBvqg7hg"} ,
 {"name": "gena", "color": "grey", "ownerNumber" : "76756754676", "imageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSel67NsFyzKOgEI0WKs9rRNAkZF6B4MsTuYEr_gtZVbU9Xd076gQ"} ,
 {"name": "mahsa", "color": "blue", "ownerNumber" : "76345244", "imageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTilQXN44kj5_52gcbjWQJUlFHPvm0_S5kk8H-i-m8tlLhpps7P"} ,
 {"name": "alisa", "color": "white", "ownerNumber" : "43452435", "imageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ9HMyfAho7UtELTlYhLMH2WCucu0gE8n4goMzTEsblojxKj6a"}, 
 {"name": "kira", "color": "white", "ownerNumber": "32123123", "imageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNbnMyYxxLPvRFLtM1pqMCJhYwNtcwlmMNjWC-vGK4yzxIU0G_xw "} ,
 {"name": "yulya", "color": "tigris", "ownerNumber" : "1234652", "imageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4JKZwi3lgGzmAeENyJ-TIK2Z0NaeWq9f_48wlzw6h85O7nLrhqQ"}, 
 {"name": "musya", "color": "paints", "ownerNumber" : "452123445", "imageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAbDAe_o9TKilYX9s3QjFdOvYR2W9QxOgffwjiE0U2M2BEZ2nzPw"} ,
 {"name": "busya", "color": "none", "ownerNumber" : "4455234", "imageURL":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX22Jib60aEstrHGIlfSQm4yCPplqsxCUBuP-iln39fzEnYXFN" }, 
 {"name": "kusya", "color": "red", "ownerNumber" : "76545656", "imageURL":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKE-f9PWfJFQksIG_k2B9xkJUIaP-aGltDOWsd-dAgIs5WdjS18A" } 
 ];
  

  getCats(){
    return this.cats;
  }

  updateCat(index, cat){
    this.cats[index] = cat;
  }

}



