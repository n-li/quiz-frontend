import {Post} from './post';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable()
export class PostService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: Http) {}

  getPosts(): Observable<Post[]> {
    return this.http.get(this.apiUrl)
      .map(res => res.json() as Post[])
      .catch(this.handleError);
  }
  deletePost(post: Post): Observable<Post> {
    return this.http.delete(this.apiUrl + '/' + post.id)
      .map(res => res.json() as void)
      .catch(this.handleError);
  }
  savePost(post: Post): Observable<Post> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers});
    if (!post.id) {
      return this.http.post(this.apiUrl, post, options)
        .map(res => res.json() as Post)
        .catch(this.handleError);
    } else {
      console.log('save ' + post.id);
      return this.http.put(this.apiUrl + '/' + post.id, post, options)
        .map(res => res.json() as Post)
        .catch(this.handleError);
    }

  }
  private handleError(error: any) {
    console.log(error);
    return Observable.throw(error.message);
  }
}
