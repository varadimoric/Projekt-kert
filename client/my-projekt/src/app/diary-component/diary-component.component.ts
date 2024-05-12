import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../shared/service/auth.service';
import { Router, RouterModule } from '@angular/router';
// FormsModule, ReactiveFormsModule

@Component({
  selector: 'app-diary-component',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './diary-component.component.html',
  styleUrl: './diary-component.component.scss'
})
export class DiaryComponentComponent implements OnInit {
  diaryForm!: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private location: Location,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.diaryForm = this.formBuilder.group({
      diary: ['']
    })
  }



  onSubmit() {
    if (this.diaryForm.valid) {
      console.log('Form data:', this.diaryForm.value);
      this.authService.diary(this.diaryForm.value).subscribe({
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