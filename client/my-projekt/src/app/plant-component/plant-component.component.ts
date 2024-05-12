import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Lexikon } from '../shared/service/model/Lexikon';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../shared/service/auth.service';
import { UserService } from '../shared/service/user.service';
import { Router } from '@angular/router';
// FormsModule, ReactiveFormsModule

@Component({
  selector: 'app-plant-component',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './plant-component.component.html',
  styleUrl: './plant-component.component.scss'
})
export class PlantComponentComponent implements OnInit {
    lexikonForm!: FormGroup;
    lexikons?: Lexikon[];
  
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
    }
  
  
  
    onSubmit() {
      if (this.lexikonForm.valid) {
        console.log('Form data:', this.lexikonForm.value);
        this.authService.registerplant(this.lexikonForm.value).subscribe({
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
