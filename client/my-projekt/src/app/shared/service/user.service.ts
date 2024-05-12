import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './model/User';
import { Text } from './model/Text';
import { Diary } from './model/Diary';
import { Lexikon } from './model/Lexikon';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<User[]>('http://localhost:5000/app/getAllUsers', {withCredentials: true});
  }

  getQuest(){
    return this.http.get<Text[]>('http://localhost:5000/app/getQuest');
  }
  getDiary(){
    return this.http.get<Diary[]>('http://localhost:5000/app/getDiary');
  }

getPlant(){
  return this.http.get<Lexikon[]>('http://localhost:5000/app/getAllPlants');
}
getKnow(){
  return this.http.get<User>('http://localhost:5000/app/getUser');
}

}
