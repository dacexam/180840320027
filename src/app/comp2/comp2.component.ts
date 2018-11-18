import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component {

  postlist=[];
  comment='';
  post='';

  posthere(){
    if(this.post !=''){
    const postobject={};
    postobject['like']=0;
    postobject['dislike']=0;
    postobject['post']=this.post;
    
    postobject['comment']=[];
    

    this.postlist.splice(0,0,postobject);
    this.post='';
  }else
  {
    alert("post is empty");
  }
  }

  like(item){
    item.like +=1;
  }

  dislike(item){
    item.dislike +=1;
  }

  edit(item){
    item.post=this.post;
    this.post='';
  }

  delete(item){
    let index=this.postlist.indexOf(item);
    this.postlist.splice(index,1);
  }


/*commenthere(item1){
  item1.comment.push(this.item)
  this.comment='';
}*/

}
