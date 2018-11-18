import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pro',
  templateUrl: './pro.component.html',
  styleUrls: ['./pro.component.css']
})
export class ProComponent{
  title='DacBook';
  postList=[];
  comArray=[];
  comv='';
  post='';
  epost='';


  postHere(){
    if(this.post =='')
    {
      alert("PLz Write Something into PostHere box ");
      return;
    }
    const postObject={'like':0, 'dislike':0,'post':this.post}
    this.postList.splice(0,0,postObject);
    this.post='';
  }
  likeCount(item){
    item.like +=1;
  }
  dislikeCount(item){
    item.dislike +=1;
  }
  removepost(item){
    this.postList.splice(this.postList.indexOf(item),1);
  }
  addComment(){
    if(this.comv==''){
      return;
    }
    this.comArray.splice(0,0,this.comv);
    this.comv='';
  }
  delComment(i){
    this.comArray.splice(this.comArray.indexOf(i),1);
  }
  editPost(item){
    item.post=this.epost;    
    this.epost='';
  }
  updateCom(i){
    i=this.comv;
    this.comArray.splice(0,1);
    this.comArray.push(i);
    this.comv='';
  }
  
}
