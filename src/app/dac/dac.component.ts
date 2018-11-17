import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dac',
  templateUrl: './dac.component.html',
  styleUrls: ['./dac.component.css']
})
export class DacComponent{

  title="CDACBOOK";
  post = '';
  postList = [];
  comment ='';
  updatee='';
  postHere(){
  const postObject={};
  postObject['like'] = 0;
  postObject['dislike'] = 0;
  postObject['post'] = this.post;
  postObject['updatee'] = this.updatee;
  postObject['commentList']=[];
  postObject['update1']=[];


    if(this.post != ''){
      this.postList.splice(0, 0, postObject);
      this.post='';
    }
    else{
      alert("Please Enter Valid Input");
    }
  }

  likeCount(item){
    item.like += 1;
  }

  dislikeCount(item){
    item.dislike += 1;
  }

  deletePost(item){
    let index = this.postList.indexOf(item);
    this.postList.splice(index,1);
  }

  editpost(item){
    item.post=this.updatee;
    this.updatee='';
  }

  commenthere(item){
    const index=this.postList.indexOf(item);
    item.commentList.splice(index,0,this.comment);
    this.comment = '';
  }

  deletePost1(item){
    let index=this.postList.indexOf(item)
    this.postList.splice(index,1);
  }

  deleteComment(item,j){
    let index=item.commentList.indexOf(j);
    item.commentList.splice(index,1);
  }
}
