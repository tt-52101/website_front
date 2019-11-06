import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://reqres.in/api/users');
  }

  login(params) {
    // 1.userId保存到localStorage；2.跳转到后台admin页面
    return this.http.post(environment.baseUrl +  `auth/login?username=${params.username}&password=${params.password}`, null);
  }

  logout() {
    // todo 把localStorage全部清空
  }

  getMenuList(userId: number) {
    return this.http.get(environment.baseUrl + `menu/selectByUserId?userId=${userId}`);
  }

}
