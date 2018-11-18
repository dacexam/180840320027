import { Component, OnInit } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component{

  title='DAC';
  post='';
  postList=[];

  postHere(){
    const postObject={};
    postObject['like']=0;
    postObject['dislike']=0;
    postObject['post']=this.post;

    
    postObject['comments']='';
    postObject['carray']=[];
    postObject['comment']=0;

    this.postList.splice(0,0,postObject);
    this.post='';
  }

  likeCount(item){
      item.like+=1;
  }

  dislikeCount(item){
    item.dislike+=1;
  }

  deletePost(item){
    this.postList.splice(this.postList.indexOf(item),1);
  }

  comment(item)
  {
    let c=item.comments;
    item.carray.splice(0,0,c);
    item.comment+=1;
    item.comments='';
  }

  deleteComment(item)
  {
    item.carray.splice(item.carray.indexOf(item.carray),1);
    item.comment-=1;
  }


}
