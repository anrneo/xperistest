import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }


  getUsers (){  
    var url = 'http://jsonplaceholder.typicode.com/users'
    return this.http.get(url)
  }

  createxperia (form){
    var url = 'https://bitplacecoin.com/api_lar/public/api/createxperia'
    // var url = 'http://localhost/api_lar/public/api/createxperia'
    return this.http.post(url,form)
  }

  getXperia (fecha){
     var url = 'https://bitplacecoin.com/api_lar/public/api/getxperia'
    // var url = 'http://localhost/api_lar/public/api/getxperia'
    return this.http.get(`${url}/${fecha}`)
  }
}
