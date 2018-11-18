import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {

  title='DACBOOK'
  post='';
  comm='';
  update='';
  postList=[]

  postHere(){
    const postObject={
           'like':0,
           'dislike':0,
           'comment': [],
           'post':this.post
    }
   if(this.post==''){
     alert("Enter Post");
   }
   else{
    this.postList.splice(0,0,postObject);
    this.post='';    
  }
}

  likeCount(item){
    item.like +=1;
  }
  
  dislikeCount(item){
    item.dislike +=1;
  }

  commentHere(item){
    if(this.comm=''){
      alert("Enter comment");
    }
    else{
      item.postList.splice(0,0,this.comm);
      this.comm='';
    }
  }

  updatePost(item){
    if(this.update=''){
      alert("Please Write Something");
    }
    else{
      this.post=item.update;
      //this.update='';
    }
  }

  delete(item){
    this.postList.splice(this.postList.indexOf(item,1))
  }
  

}
