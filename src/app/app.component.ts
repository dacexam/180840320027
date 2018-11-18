import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dacbook';
  post='';
  edit='';
  comment='';
  editcom='';
  postlist=[];

  posthere(){
    let obj={'like':0,
    'dislike':0,
    'post':this.post,
    'commentlist':[]
    };
    if(this.post==''){
      alert("Write at least something....");
    }
    else
    {
      this.postlist.splice(0,0,obj);
      this.post='';
    }
  }

  likecount(ref){
    ref.like+=1;
  }

  dislikecount(ref){
    ref.dislike+=1;
  }

  deletepost(ref){
    this.postlist.splice(this.postlist.indexOf(ref),1);
  }

  editpost(ref){
    if(this.edit==''){
      alert("Enter something to edit your post");
    }
    else{
      ref.post=this.edit;
      this.edit='';
    }
  }

  commenthere(ref){
    if(this.comment=='')
    {
      alert("Enter a comment");
    }
    else{
      ref.commentlist.splice(0,0,this.comment);
      this.comment='';
    }
  }

  deletecomment(ref,value){
    let index=ref.commentlist.indexOf(value);
    ref.commentlist.splice(index,1);
  }

  editcomment(ref,val){
    if(this.editcom=='')
    {
      alert("Enter something to edit comment");
    }
    else
    {
    let index=ref.commentlist.indexOf(val);
    ref.commentlist[index]=this.editcom;
    this.editcom='';
    }
  }
}
