import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component{
  title ="Instagram";
  post='';
  postList=[];

  postHere()
  { 
     const postObject={};
     postObject['like']=0;

     postObject['dislike']=0; 

     postObject['post']=this.post;

     this.postList.splice(0,0,postObject);
     
     this.post='';
  }

  likeCount(item)
  {
     item.like+=1;
    
  }

  
  dislikeCount(item)
  {
     item.dislike+=1;
    
  }

}

