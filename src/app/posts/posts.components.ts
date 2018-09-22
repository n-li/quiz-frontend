import {Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {Post} from '../shared/post';
import {PostService} from '../shared/post.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.components.template.html',
  styleUrls: ['./posts.components.template.css']
})

export class PostsComponent implements OnInit {
  posts: Post[];
  post: Post;
  isEditPost: boolean;

  constructor(private postService: PostService) {}


  ngOnInit(): void {
    this.postService.getPosts().subscribe(posts => {
      console.log(posts);
      this.posts = posts;
    });
  }

  newPost() {
    this.isEditPost = true;
    this.post = new Post('', '');
  }

  cancelEdit() {
    this.isEditPost = false;
  }

  doSave(post: Post) {
    this.isEditPost = false;
    this.postService.savePost(post).subscribe(savedPost => {
      let currentPost = this.findPost(savedPost.id);
      if (currentPost != null) {
        currentPost.title = savedPost.title;
        currentPost.body = savedPost.body;
      } else {
        this.posts.push(savedPost);
      }
    });
  }

  doEdit(post: Post) {
    this.isEditPost = true;
    this.post = new Post(post.title, post.body, post.id, post.userId);
  }

  doDelete(post: Post) {
    this.postService.deletePost(post).subscribe(result => {
      let index = 0;
      for (let currentPost of this.posts) {
        if (currentPost.id === post.id) {
          this.posts.splice(index, 1);
          break;
        }
        index++;
      }
    });
  }

  private findPost(id: number): Post {
    for (let currentPost of this.posts) {
      if (currentPost.id === id) {
        return currentPost;
      }
    }
    return null;
  }
}
