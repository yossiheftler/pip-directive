import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pips',
  templateUrl: './pips.component.html',
  styleUrls: ['./pips.component.css']
})
export class PipsComponent implements OnInit {

  constructor() { }

  ageByFn(birthYear){
    let thisYear = new Date().getFullYear()
    return thisYear - birthYear
  }
  ngOnInit() {
  }

  puplis = [
    {name: 'ari', birthYear: '1996'},
    {name: 'yossi', birthYear: '1996'},
    {name: 'avi', birthYear: '1984'},
    {name: 'naty', birthYear: '2010'},
    {name: 'moshi', birthYear: '1972'},

   
   
    
  ]
}
