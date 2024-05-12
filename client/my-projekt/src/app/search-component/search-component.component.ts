import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Lexikon } from '../shared/service/model/Lexikon';
import { User } from '../shared/service/model/User';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../shared/service/auth.service';
import { UserService } from '../shared/service/user.service';
import { Router } from '@angular/router';
// FormsModule, ReactiveFormsModule

@Component({
  selector: 'app-search-component',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './search-component.component.html',
  styleUrl: './search-component.component.scss'
})
export class SearchComponentComponent implements OnInit {
  lexikonForm!: FormGroup;
  lexikons?: Lexikon[];
  user?:User;

  
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private location: Location,
    private userService: UserService,
    private authService: AuthService
  ) { }

  

  ngOnInit() {
    
    this.lexikonForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      size: [''],
      likes: [''],
    })


    this.userService.getPlant().subscribe({
      next: (data) => {
        this.lexikons = data;
      }, error: (err) => {
        console.log(err);
      }
    });

    this.userService.getKnow().subscribe({
      next: (data) => {
        this.user = data;
      }, error: (err) => {
        console.log(err);
      }
    });

  }


  
    




  onSubmit() {
    if (this.lexikonForm.valid) {
      console.log('Form data:', this.lexikonForm.value);
      this.authService.text(this.lexikonForm.value).subscribe({
        next: (data) => {
          console.log(data);
        }, error: (err) => {
          console.log(err);
        }
      });
    } else {
      console.log('Form is not valid.');
    }
  }

  navigate(to: string){
    this.router.navigateByUrl(to);
  }

  goBack() {
    this.location.back();
  }
}