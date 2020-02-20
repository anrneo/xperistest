import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
declare var M
@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {
  selectTech = ''
  dataUser : any
  dataTipo = []
  isSelect = false
  preload = false
  constructor(
    private apiService: ApiService 
  ) { }

  ngOnInit() {
    this.apiService.getUsers()
    .subscribe(dat=>{  
      this.dataUser = dat
      
    })
  }

  onSubmit(fecha){
    this.dataTipo = []
    this.preload = true
    this.apiService.getXperia(fecha)
    .subscribe(dat=>{
      this.preload = false 
      if (dat.length>0) { 
        for (const key in dat) {
          var data = this.dataUser.filter(x=>x.id == dat[key].user_id)
          data[0].form = dat[key]
           this.dataTipo.push(data)
         }
         this.isSelect = true
      }else{
        this.preload = false
        M.toast({html: 'No se genero ningun resultado.', classes: 'rounded cyan'})
      }
      
    })
    
  }

  deleteUser(id){
    this.apiService.deleteUser(id)
    .subscribe(dat=>{
      this.dataTipo = []
      console.log(dat);
      
    })
  }

}
