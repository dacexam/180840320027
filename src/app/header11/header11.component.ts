import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header11',
  templateUrl: './header11.component.html',
  styleUrls: ['./header11.component.css']
})
export class Header11Component {
  variable='';
  values=[];

  abcd='';
  constructor() { }

  posthere() {
    const node = {
      'data': this.abcd,
      'like': 0,
      'dislike': 0,
      'comcount': 0,
      'comm': []
    };
    this.values.splice(0,0,node);
    this.abcd='';
  }
  increaselike(temp){
    temp.like+=1
  }

  dislike(temp){
    temp.dislike+=1
  }

delete(temp){
    let index=this.values.indexOf(temp)
    this.values.splice(index,1)
  }
  comment(temp){
    temp.comm.splice(0,0,this.variable)
    this.variable=''
    temp.comcount+=1
  }
  deletecomment(temp){
    let index=this.values.indexOf(temp)
    this.values.splice(index,1)
  }
}
