import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dacbook',
  templateUrl: './dacbook.component.html',
  styleUrls: ['./dacbook.component.css']
})
export class DacbookComponent {
  title = 'DACBOOK';
  post = '';
  postList = [];
  edit = '';
  comment1 = '';

  commentList = [];
  
  postHere() 
  {
    const postObject = {};
    postObject['like'] = 0;
    postObject['dislike'] = 0;
    postObject['post'] = this.post;
    postObject['comment'] = [];
    this.postList.splice(0, 0, postObject);

    this.post = '';
  
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

  editpost(item) {
    if(this.edit != '')
    {
      item.post=this.edit;
      this.edit='';
    }
  } 

  comment(item) {
    item.comment.splice(0,0,this.comment1);
    this.comment1 = '';
  }


  delcomment(item) {
    const index=this.commentList.indexOf(item);
    this.commentList.splice(index,1);
    this.comment1='';
  }


}



