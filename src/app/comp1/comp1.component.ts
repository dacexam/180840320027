import { Component, OnInit } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component  {
title='SAMBOOK';
postlist=[];
postdata='';
variable='';
posteditdata='';
posthere(){
  if(this.postdata!=''){
  const postobject={ 'arrcomm': [] };
  postobject['like']=0;
  postobject['dislike']=0;
  postobject['postdata']=this.postdata;
  postobject['posteditdata']=this.posteditdata;
  postobject['temp1']=false;
  postobject['temp2']=false;
  postobject.arrcomm['temp3']=false;
  postobject['variable']=this.variable;
  this.postlist.splice(0,0,postobject);
  this.postdata='';
  this.posteditdata='';
}
}
editpost(item){
  item.temp1='true';
}
edit(item){
  item.temp1=false;
  item.postdata=item.posteditdata;
  
}
likecount(item){
  item.like +=1;
}
dislikecount(item){
  item.dislike +=1;
}
deletepost(item){
  for(let i=0;i<this.postlist.length;i++)
  {
    if(this.postlist[i]===item)
    {
      this.postlist.splice(i,1);
    }
  
}
}
commentbtn(item){
  item.temp2=true;
  item.temp3=true;
}
submitcomment(item){
  item.temp2=true;
  item.temp3=true;
  item.arrcomm.splice(0,0,item.variable);
  this.variable='';
}

}
