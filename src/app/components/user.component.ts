import { Component } from '@angular/core';
import {PostService} from '../services/post.service';

@Component({
  selector: 'user',
  template: `
    <h1>Hello {{name}}</h1>
    <button (click)="toggleCaption()">{{buttonCaption ? 'true v' : 'false v'}}</button>
    <button *ngIf="buttonCaption" (click)="getData()">get data</button>
    <br>
    <p>name:
      <input type="text" [(ngModel)]="name">
    </p>
    <p>street:
      <input type="text" [(ngModel)]="address.street">
    </p>
    <p>city:
      <input type="text" [(ngModel)]="address.city">
    </p>
    <p>{{address | json}}</p>
    
    <hr>
    <about></about>
    <hr>
    <p *ngFor="let post of posts"> {{post.id}} {{post.title}}</p>
  `,
  providers: [PostService]
})
export class UserComponent {
  name: string;
  address: Address;
  buttonCaption: boolean;
  posts: Post[];

  constructor(public postService: PostService) {
    this.name = 'Task 1';
    this.address = {
      street: 'rue AA',
      city: 'Lyon'
    };
    this.buttonCaption = true;
    console.log(this.address);
  }

  toggleCaption() {
    this.buttonCaption = !this.buttonCaption;
  }

  public getData() {
    this.postService.postMethode()
      .subscribe(rez => {
        console.log(rez);
        this.posts = rez;
        console.log(this.posts);
      }, err => {
        console.log(err);
      });
  }
}

interface Address {
  street: string;
  city: string;
}

interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}
