import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component  {

  post='';
  postlist=[];

  posthere()
  {
    const list={};
    list['like']=0;
    list['unlike']=0;
    list['post']=this.post;
    list['comment']=0;

    if(this.post=='')
    {
      alert("please insert something in post box");
    }
    else{
    this.postlist.splice(0,0,list);
    }
    this.post='';
  }
  deletepost(item)
  {
    this.postlist.splice(item,1);
  }

  likepost(item)
  {
    item.like += 1;
  }
  unlikepost(item)
  {
    item.unlike += 1;
  }

  comment1='';
  commentlist=[];

  commenthere(item)
  {
    const list2={};

    list2['comment1']=this.comment1;

    if(this.comment1=='')
    {
      alert("please insert something on commnet box");
    }
    else
    {
    this.commentlist.splice(0,0,list2);
    item.comment += 1;
    }
    this.comment1='';

  }
  epost='';
  editpost(item)
  {
    if(this.epost=='')
    {
      alert("please insert something on Edit post box");
    }
    else{
    item.post=this.epost;
    }
    this.epost='';
  }
  ecomment='';
  editcomment(i)
  {
    if(this.ecomment=='')
    {
      alert("please insert something on Edit comment box");
    }
    else
    {
    i.comment1=this.ecomment;
    }
    this.ecomment='';
  }

  deletecomment(i)
  {
    this.commentlist.splice(i,1);
  }

}
