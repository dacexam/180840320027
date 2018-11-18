import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {

  post='';
  cpost='';

  array=[];

  function(){
    const postObject={};
    postObject['like']=0;
    postObject['dislike']=0;
    postObject['post']=this.post;
    postObject['countList']=[];
    postObject['del']=[];

    if(this.post!='')
    this.array.splice(0,0,postObject);
    this.post='';
  }

  likeCount(i){
    i.like += 1;
  }
  dislikeCount(i){
    i.dislike += 1;
  }
  delete(i){
    let x=this.array.indexOf(i);
    this.array.splice(x,1);
  }
  delete1(del){
    let y=this.array.indexOf(del);
    this.array.splice(y,1);
  }
  update(i){
    i.post=i.newupdate;
    i.newupdate='';
  }
  comment(i){
    i.countList.splice(0,0,this.cpost);
    this.cpost='';
  }
 

}
