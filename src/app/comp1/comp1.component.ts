import { Component, OnInit } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {

    post='';
    postList=[];
    upd='';
    comm='';
    

    postHere(){
      const postObject={};
      postObject['post']= this.post;
      postObject['like']=0;
      postObject['dislike']=0;

      let comment=[];
      postObject['cc']=0;
      postObject['comment']=comment;

      if(this.post != '')
      {
        this.postList.splice(0,0,postObject);
        this.post='';
      }
 
      
    }

    countLike(item){
      item.like+=1;
    }
    countDislike(item){
      item.dislike+=1;
    }

    deletePost(item){
      let x=this.postList.indexOf(item);
      this.postList.splice(x,1);
    }
    updatePost(item){
      item.post=item.upd;
      item.upd= '';
    }

    commentHere(item){
      item.comment.splice(0,0,this.comm);
      item.cc+=1;
      this.comm='';
    }

}
