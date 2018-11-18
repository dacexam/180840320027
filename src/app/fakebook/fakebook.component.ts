import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fakebook',
  templateUrl: './fakebook.component.html',
  styleUrls: ['./fakebook.component.css']
})
export class FakebookComponent  {

  post='';
  update='';
  list=[];
  comm='';
  upc='';

  posthere(){
    let obj={
      'comment':[],
      'like': 0,
      'dislike': 0,
      'post' : this.post, 
      'comm' : this.comm,
      'upc' : this.upc
     
    };
    if(this.post!='')
    {
    this.list.splice(0,0,obj);
    this.post='';
    }
    else
    {
      alert("please write something.");
    }
  }

  likee(item)
{
  item.like+=1;
}

dislikee(item)
{
  item.dislike+=1;
}

updatee(item)
{
  item.post=item.update;
  item.update='';
}

delete(item){
  let index= this.list.indexOf(item);
  this.list.splice(index,1);
}

comnt(item)
{
  item.comment.splice(0,0,item.comm);
    item.comm='';
}

delcom(item,val)
{
  let index= item.comment.indexOf(val);
  item.comment.splice(index,1);
}

upcom(item,val)
{
  if(val!='')
  {
  let index= item.comment.indexOf(val);
  item.comment.splice(index,1);
  item.comment.splice(index,0,item.upc);
  item.upc='';
  }
  
}

}




