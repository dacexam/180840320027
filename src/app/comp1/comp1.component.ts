import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

title = 'ROLLID';
post = '';
postList = [];
edited = '';

newPost(){
  let PostObj = {
    like : 0,
    dislike : 0,
    post : this.post,
    edited : this.edited,
  }
  this.postList.splice(0,0,PostObj);
  this.post = '';
}

like(i){
  i.like++;
}

dislike(i){
  i.dislike++;
}
delete(i){
  this.postList.splice(this.postList.indexOf(i),1)
}


edit(){
  i.edited = this.edited;
}

  constructor() { }

  ngOnInit() {
  }

}
