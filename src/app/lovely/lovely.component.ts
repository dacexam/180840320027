import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lovely',
  templateUrl: './lovely.component.html',
  styleUrls: ['./lovely.component.css']
})
export class LovelyComponent  {

post='';
like=0;
dislike=0;
comment1=0;
postList=[];

comm='';
comment=[];
 postHere(){
   if(this.post!='')
   {
  const postObject={}
  postObject['post']=this.post;
  postObject['like']=this.like;
  postObject['comment1']=this.comment1;
  postObject['dislike']=this.dislike;
  postObject['comment']=this.comment;
  this.postList.splice(0,0,postObject);
  this.post='';
 }
 else{
   alert("empty input box");
 }
 }
 
   likeCount(item) {
     item.like += 1;
    }

    dislikeCount(item) {
      item.dislike += 1;
      }
      delete(item) {
        const index=this.postList.indexOf(item);
        this.postList.splice(index,1);
      }
      commentHere(cont){
        cont.comment1 += 1;
        const com1={}
        com1['comm']=this.comm;
        this.comment.splice(0,0,com1);
       this.comm='';
       
      }
}

  
  
  
