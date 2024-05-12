import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../shared/service/auth.service';

@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.scss'
})
export class LoginComponentComponent {
  email: string='';
  password:string='';
  errorMassage='';

  constructor(private router: Router, private authService: AuthService){  }

  login(){
    if(this.email && this.password){
      this.errorMassage='';
      this.authService.login(this.email,this.password).subscribe({
        next: (data)=>{
          if (data){
            console.log(data)
          }
        }, error:(err)=>{
          console.log(err);
        }
      })
    }else {
      this.errorMassage='Form is empty.';
    }
  }

  navigate(to: string){
    this.router.navigateByUrl(to);
  }
}
