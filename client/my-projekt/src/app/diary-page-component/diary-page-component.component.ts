import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { Diary } from '../shared/service/model/Diary';
import { UserService } from '../shared/service/user.service';
import { AuthService } from '../shared/service/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-diary-page-component',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './diary-page-component.component.html',
  styleUrl: './diary-page-component.component.scss'
})
export class DiaryPageComponentComponent {
  diarys?: Diary[];

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private location: Location,
    private router: Router  
  ) { }


  ngOnInit(){
    this.userService.getDiary().subscribe({
      next: (data) => {
        this.diarys = data;
      }, error: (err) => {
        console.log(err);
      }
    });
  }
  goBack() {
    this.location.back();
  }
}
