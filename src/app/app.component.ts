import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'postbook';
  post='';
  update='';
  com='';
  postlist=[];

  posthere(){
    const obj={
      'comm':[],
      'like':0,
      'dislike':0,
      'post':this.post,
      'com':this.com,
    };

    if(this.post!=''){
      this.postlist.splice(0,0,obj);
      this.post='';
    }
  }

  likes(ref){
    ref.like=ref.like+1;
  }

  dislikes(ref){
    ref.dislike=ref.dislike+1;
  }

  updates(ref){
    if(this.update!='')
    {
      ref.post=this.update;
      this.update='';
    }
  }

  deletes(ref){
    let index=this.postlist.indexOf(ref);
    this.postlist.splice(index,1);
  }

  comm(ref){
    if(ref.com!=''){
    ref.comm.splice(0,0,this.com);
    this.com='';
    }
  }

  delcom(ref,value){
    let index=ref.comm.indexOf(value);
    ref.comm.splice(index,1);
  }

}