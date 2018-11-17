import { Component, OnInit } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component{

  title='krishana';
  postList=[];
  post='';

  postHere(){
     
    const postobject={};
    postobject['like']=0;
    postobject['dislike']=0;
    postobject['post']=this.post;
    this.postList.splice(0,0,postobject);
    this.post='';
  }

    likecount(item){

      item.like+=1;

    }

    dislikecount(item){

      item.dislike+=1;
    
    }

  }

      
    
  
  
