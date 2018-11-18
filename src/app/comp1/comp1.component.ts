import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component  {
title= 'DACBOOK';
post='';
postlist=[];

posthere(){
  const postObject={};
  postObject['like']=0;
  postObject['dislike']=0; 
  postObject['comment']=0; 
  postObject[this.post]='';


  this.postlist.splice(0,0,postObject);
   this.post='';


 }
 likecount(item){
    item.like+=1;
  }
  dislikecount(item){
    item.dislike+=1;

  }

  commentcount(item){
    item.comment+=1;
  }
delete(item){
  let i=this.postlist.indexOf(this.post);
  this.postlist.splice(i,1)
}
}

  

  

}
