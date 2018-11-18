import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component  {

  title='CdacBook';
  postlist=[];
  post='';
  commentvar='';
   
  

  Posttext()
  {
    if(this.post=='')
    return;
    const ref={};

    ref['like']=0;
    ref['dislike']=0;
    ref['post']=this.post;

    const comment=[];

    ref['comment']=comment;
    this.postlist.splice(0,0,ref);
    this.post='';
  }
 
  EditPost(item)
  {
    item.post=this.post;
    this.post='';
  }

  DeletePost(item)
  {
      this.postlist.splice((this.postlist.indexOf(item)),1);
  }

  likecount(item)
  {
      item.like+=1;
  }

  dislikecount(item)
  {
    item.dislike+=1;
  }

  

}
