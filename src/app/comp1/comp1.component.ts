import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component  {
title='LIFELINE'
post='';
postlist=[];

postHere(item){
  const postobject={};
  postobject['like']=0;
  postobject['dislike']=0;
  postobject['comment']=0;
  postobject['comments']='';
  postobject['post']=this.post;
  postobject['postarray']=[];

  if(this.post=='')
  {
    alert("insert message")
 
  }
  else{
    this.postlist.splice(0,0,postobject);
  }
  this.post='';
}
like(item){
  item.like+=1;
}
dislike(item){
  item.dislike+=1;
}
delete(item){
   let index=this.postlist.indexOf(item);
   this.postlist.splice(index,1);
}
 
comment(item){
  item.comment+=1;
  let comm=item.comments;
  item.postarray.splice(0,0,comm);
  item.comments='';
}
}
