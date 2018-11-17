import { Component, OnInit } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component{
title='DACBOOK';
post='';
postlist=[];
comm='';
comment=[];

  postHere(){
    const postObject={};
    postObject['like']=0;
    postObject['dislike']=0;
    postObject['post']=this.post;
    this.postlist.splice(0,0,postObject);
    this.post='';
  }

  commentHere(){
    const comp1={};
    comp1['comm']=this.comm;
    this.comment.splice(0,0,comp1);
    this.comm='';
  }

  likeCount(item){
    item.like +=1
  }

  dislikeCount(item){
    item.dislike +=1;
  }

  delete(item){
    let index=this.postlist.indexOf(item);
    this.postlist.splice(index,1);
  }
}

