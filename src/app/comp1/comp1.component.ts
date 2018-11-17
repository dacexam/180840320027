import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component  {
  title="Mumbai Darshan";
  post='';
  postList=[];

  postHere(){
    const postObject={};
    postObject['Like']=0;
    postObject['Dislike']=0;
    postObject['Comment']=0;
    postObject['post']=this.post;

    this.postList.splice(0,0,postObject);
    this.post='';
  }
  comment='';
  commentList=[];

  postComment(item){
    const commentObject={};
    commentObject['comment']=this.comment;
    item.Comment+=1;
    this.comment='';

  }

  Like(item){
    item.Like+=1;
  }
  Dislike(item){
    item.Dislike+=1;
  }
  Delete(item){
    let index=this.postList.indexOf(item);
    this.postList.splice(index,1);
  }
  Edit(item){
    this.post=item.post;

  }





}
