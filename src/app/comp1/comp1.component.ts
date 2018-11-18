import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {


title="myproject";
post={};
postlist=[];
comm={};
addcomment=[];

mypost()
{
  if(this.post!='')
  {
  const pobj={};
  pobj['post']=this.post;
  pobj['like']=0;
  pobj['dislike']=0;
  pobj['postlist']=this.postlist;
  this.postlist.splice(0,0,pobj);
 }
  else
  {
    alert("empty")
  }
  this.post='';

}

likecount(item){
  item.like += 1;
}

dislikecount(item){
  item.dislike += 1;
}

comment(com1){
  if(this.comm!=''){
  const cobj={};
   cobj['comm']=this.comm;
  this.addcomment.splice(0,0,cobj);
  }else{
   alert("write something");
  }
  this.comm='';
}

delete(item){
  let position=this.postlist.indexOf(item);
  this.postlist.splice(position,1)
}

deletecomment(com1){
  let position=this.addcomment.indexOf(com1);
  this.addcomment.splice(position,1)
}
 
  constructor() { }

  ngOnInit() {
  }

}



