import { environment } from './../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
declare var M
@Component({
  selector: 'app-entrevista',
  templateUrl: './entrevista.component.html',
  styleUrls: ['./entrevista.component.css']
})
export class EntrevistaComponent implements OnInit {
 dataUser = {
   par: [],
   impar: []
 }
 form = {
  id:0,
  name:''
 }
 dataHora = environment.hora 
 dataInfo = []
 id = ''
 isEdit = false
 preload = false
  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
   
    this.getUsers()
    this.materialize()
    
  }

  materialize(){
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('select');
      var instances = M.FormSelect.init(elems, Option);
    });
  }
  getUsers(){
    this.apiService.getUsers()
    .subscribe(dat =>{  
      console.log(dat);
      
      this.id = this.route.snapshot.paramMap.get('id');
     
       for (const i in dat) { 
         if (dat[i].id%2 == 0) {
          this.dataUser.par.push(dat[i])
         }else{
          this.dataUser.impar.push(dat[i])
         }
       }

       if (this.id == '0') {
         this.dataInfo = this.dataUser.impar
       }else{
        this.dataInfo = this.dataUser.par
       }
      } )
  }

  datosEntrevista(id){ 
    
    var data = this.dataInfo.filter(x=>x.id==id)
      if (data.length>0 &&  data[0].form) {
        this.form =   data[0].form
      }else{
        this.form = {}   
        this.form.id = id
        this.form.name = data[0].name

      } 

      this.isEdit = true
   
   
   
  }

  onSubmit(form){
    var index = this.dataInfo.findIndex(x=>x.id==form.id)
    this.dataInfo[index].form = form
    this.form = {id:0, name:''}
    this.isEdit = false
  }

  validatedate(form){
    var data = this.dataInfo.filter(x=>x.form!=undefined)
    
    if (data.length>0) {
      for (const i in data) {
        if (form.fecha==data[i].form.fecha && form.hora==data[i].form.hora && form.id != data[i].id) { 
          form.hora=''
          M.toast({html: `${data[i].name} ya tiene esta fecha y hora`, classes: 'rounded cyan'})
          return false
        }
      }
    }
   
    
  }

  submit(){
    
    var data = this.dataInfo.filter(x=>x.form!=undefined)
    if (data.length>0) {
      this. preload = true
      var post = []
      for (const ite of data) {
        post.push(ite.form)
        
      }
      
      this.apiService.createxperia({post:post})
      .subscribe(dat=>{
        this. preload = false
        M.toast({html: `La información se actualizó con éxito`, classes: 'rounded cyan'})
        
      })
    }else{
      M.toast({html: `Por favor ingreso datos para las entrevistas`, classes: 'rounded cyan'})
    }
    
    
  }

}
