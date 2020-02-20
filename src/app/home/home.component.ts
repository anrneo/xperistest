import { ApiService } from './../api.service';
import { environment } from './../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


declare var M
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selecTech = ''
  selectTipo = ''
  dataTipo = []
  dataCheck = []
  isSelect = false
  isChecked = false
  tipeUser = 2
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.materialize()
    
  }

  materialize(){
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('select');
      var instances = M.FormSelect.init(elems, Option);
    });
  }

  onSubmit(selectTech){
    this.dataTipo = []
    this.dataCheck = []
    this.isSelect = true
  
    if (selectTech == 0) {
    
      for (const key in environment.xperia) {
        this.dataTipo.push(environment.xperia[key].net)
      }
    }else{
      for (const key in environment.xperia) {
        this.dataTipo.push(environment.xperia[key].java)
      }
    }
  }
  isvaluechecked(id, event){
    
    
   if(event.target.checked == true){
     this.dataCheck.push(id)
   }else{
     var index = this.dataCheck.findIndex(x=>x==id)
      this.dataCheck.splice(index,1)
   };
   
    if (this.dataCheck.length>0) {
      
      var data = this.dataCheck.toString()
    if (data == '1' || data == '1,3' || data == '1,3,5' || data == '3' ||  data == '5')  {
     this.isChecked = true
     this.tipeUser = 0
    }else if(data == '2' || data == '2,4' || data == '4') {
     this.isChecked = true
     this.tipeUser = 1
    }else{
       M.toast({html: 'Por favor no seleccione Id pares e impares simultaneamente.', classes: 'rounded cyan'})
     this.isChecked = false
     this.tipeUser = 2
    }
  }

  }


  getUsers(){
    this.router.navigate([`entrevista/${this.tipeUser}`])
   
  }

}
