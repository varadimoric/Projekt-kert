import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../shared/service/auth.service';

@Component({
  selector: 'app-singup-component',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './singup-component.component.html',
  styleUrl: './singup-component.component.scss'
})
export class SingupComponentComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private location: Location, private authService: AuthService) { }

  ngOnInit() {
    this.signupForm=this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]],
      name: [''],
      address: [''],
      nickname: [''],
      title: [''],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    }, {
      validator: this.mustMatch('password', 'confirmPassword')
    })

  }

  mustMatch(controlName: string, matchingControlName: string) {
    return(FormGroup: FormGroup)=>{
      const control = FormGroup.controls[controlName];
      const matchingControl = FormGroup.controls[matchingControlName];

      if (matchingControl.errors && matchingControl.errors['mustMatch']){
        return;
      }

      if(control.value!==matchingControl.value){
        matchingControl.setErrors({mustMatch: true});
      }else{

        matchingControl.setErrors(null);
      }
    }
  }
  
  onSubmit(){
    if(this.signupForm.valid) {
      console.log('Form data:', this.signupForm.value);
      this.authService.register(this.signupForm.value).subscribe({
        next:(data)=>{
          console.log(data);
        }, error: (err)=>{
          console.log(err);
        }
      });
    }else {
      console.log('Form is not valid');
    }
  }

  goBack(){
    this.location.back();
  }


}
