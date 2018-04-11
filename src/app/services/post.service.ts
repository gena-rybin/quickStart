import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PostService {
  constructor(private http: Http) {
    console.log('PostService');
  }

  postMethode(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
        .map(res => {
          // console.log(res.json());
          return res.json();
        });
  }
}
