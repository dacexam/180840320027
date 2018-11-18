import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {

  title='DACBOOK'
  post='';
  postlist=[];
  editpost='';
  comment='';
  //editbool='false';

  posthere()
  {
    if(this.post!='')
    {
    const postobject={};
    postobject['like']=0;
    postobject['dislike']=0;
    postobject['post']=this.post;
    postobject['editpost']=this.editpost;
    postobject['comment']=[];

    this.postlist.splice(0,0,postobject);
    this.post='';
    }
  }
  
  likecount(item)
  {
    item.like+=1;
  }

  dislikecount(item)
  {
    item.dislike+=1;
  }

  deletepost(item)
  {
    let index=this.postlist.indexOf(item);
    this.postlist.splice(index,1);
  }

  editpostfn(item){

    if(item.editpost!='')
    {
    item.post=item.editpost;
    item.editpost='';
    }
  }

  commenthere(item)
  {
    item.comment.push(this.comment);
    this.comment='';
  }



}
