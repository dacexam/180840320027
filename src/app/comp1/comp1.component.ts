import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {
    post='';
    postList=[];
    title="DACBOOK";

    posthere(){
      if(this.post=='')
      {
        alert("Write post");
      }
      else{
           const postobj={};
           postobj['post']=this.post;
           postobj['like']=0;
           postobj['dislike']=0;
           this.postList.splice(0,0,postobj);
           this.post='';

      }
    }
  likecount(item){
          item.like += 1;
  }
  dislikecount(item){
    item.dislike += 1;
}
delete(item){
  this.postList.splice(this.postList.indexOf(item),1);
}
    
  
}
