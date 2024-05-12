import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './model/User';
import { Text } from './model/Text';
import { Diary } from './model/Diary';
import { Lexikon } from './model/Lexikon';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string,password:string) {

    const body = new URLSearchParams();
    body.set('username',email);
    body.set('password',password);


    const headers= new HttpHeaders({
      'Content-Type':'application/x-www-form-urlencoded'
    });


    return this.http.post('http://localhost:5000/app/login', body, {headers: headers, withCredentials: true});
  }


  register(user: User){
    const body = new URLSearchParams();
    body.set('email', user.email);
    body.set('name', user.name);
    body.set('address',user.address);
    body.set('nickname',user.nickname);
    body.set('password',user.password);
    


    const headers= new HttpHeaders({
      'Content-Type':'application/x-www-form-urlencoded'
    });


    return this.http.post('http://localhost:5000/app/register', body, {headers: headers});
  }

  registerplant(lexikon: Lexikon){
    const body = new URLSearchParams();
    body.set('name', lexikon.name);
    body.set('size', lexikon.size);
    body.set('likes', lexikon.likes);

    const headers= new HttpHeaders({
      'Content-Type':'application/x-www-form-urlencoded'
    });


    return this.http.post('http://localhost:5000/app/registerplant', body, {headers: headers});
  }

  text(texts: Text){
    const body = new URLSearchParams();
    body.set('text', texts.text);

    const headers= new HttpHeaders({
      'Content-Type':'application/x-www-form-urlencoded'
    });


    return this.http.post('http://localhost:5000/app/text', body, {headers: headers});
  }

  diary(diarys: Diary){
    const body = new URLSearchParams();
    body.set('diary', diarys.diary);

    const headers= new HttpHeaders({
      'Content-Type':'application/x-www-form-urlencoded'
    });


    return this.http.post('http://localhost:5000/app/diary', body, {headers: headers});
  }


}
