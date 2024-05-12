import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch:'full'},
    {path: 'signup', loadComponent: ()=> import('./signup-component/singup-component.component').then((c)=>c.SingupComponentComponent)},
    {path: 'login', loadComponent: ()=> import('./login-component/login-component.component').then((c)=>c.LoginComponentComponent)},
    {path: 'forum', loadComponent: ()=> import('./forum-component/forum-component.component').then((c)=>c.ForumComponentComponent)},
    {path: 'search', loadComponent: ()=> import('./search-component/search-component.component').then((c)=>c.SearchComponentComponent)},
    {path: 'diary', loadComponent: ()=> import('./diary-component/diary-component.component').then((c)=>c.DiaryComponentComponent)},
    {path: 'diary-page', loadComponent: ()=> import('./diary-page-component/diary-page-component.component').then((c)=>c.DiaryPageComponentComponent)},
    {path: 'plant', loadComponent: ()=> import('./plant-component/plant-component.component').then((c)=>c.PlantComponentComponent)},
    {path: '**', redirectTo: 'login'}
];
