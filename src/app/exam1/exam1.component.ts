import { Component, OnInit } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-exam1',
  templateUrl: './exam1.component.html',
  styleUrls: ['./exam1.component.css']
})
export class Exam1Component  {

  post ='';
  postlist =[];
              posthere()
              {
                const objectRef={};

                objectRef['like']=0;
                objectRef['dislike']=0;
                objectRef['comcount']=0;
                
                objectRef['post']=this.post;

                if(this.post=='')
                {
                  alert("SORRY.......!!!  WE CAN'T ADD EMPTY POST HERE...!!");
                }
                else
                {
                  this.postlist.splice(0,0,objectRef);

                }
                
                this.post='';
              }


              likepost(item)
              {
                item.like +=1;
              }


              dislikepost(item)
              {
                item.dislike +=1;
              }
             

              comment='';
              comarray=[];

              postcomment(item)
              {
                  const objectRef1={};
                
                  objectRef1['comment']=this.comment;
                  item.comcount +=1;

                  if(this.comment=='')
                  {
                    alert("plz..write something in comment box");
                  }
                  else{
                    this.comarray.splice(0,0,objectRef1);

                  }
                    
                  this.comment='';
              }
                editcomm ='';
                editcomarray=[];
              editcommpost(item)
              {
                const objectRef2={};
                objectRef2['editcomm']=this.editcomm;

                if(this.editcomm=='')
                {

                }
                else{
                  this.comarray.splice(0,0,objectRef2);
                }
               

                this.editcomm='';

               
              }

              deletecomm(item)
              {
                this.comarray.splice(item,1);
              }

              editpost='';
                editpost1(item){

                  const obj={};
                  obj['post']=this.editpost;
                  
                  if(this.editpost=='')
                  {
                    alert("sorry..you can not edit empty post");
                  }
                  else
                  {
                    this.postlist.splice(0,0,obj);

                  }
                  
                  this.editpost='';
                }

                delete(item)
                {
                  this.postlist.splice(item,1);
                }
}
