import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Text } from '../shared/service/model/Text';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../shared/service/auth.service';
import { UserService } from '../shared/service/user.service';
import { Router } from '@angular/router';
// FormsModule, ReactiveFormsModule

@Component({
  selector: 'app-forum-component',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './forum-component.component.html',
  styleUrl: './forum-component.component.scss'
})
export class ForumComponentComponent implements OnInit {
  forumForm!: FormGroup;
  texts?: Text[];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private location: Location,
    private userService: UserService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.forumForm = this.formBuilder.group({
      text: ['']
    })


    this.userService.getQuest().subscribe({
      next: (data) => {
        this.texts = data;
      }, error: (err) => {
        console.log(err);
      }
    });
  }



  onSubmit() {
    if (this.forumForm.valid) {
      console.log('Form data:', this.forumForm.value);
      this.authService.text(this.forumForm.value).subscribe({
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