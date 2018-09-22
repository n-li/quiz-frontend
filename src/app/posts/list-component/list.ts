import {Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import { Post } from '../shared/post';
import { PostService } from '../shared/post.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './list.template.html',
  styleUrls: ['./list.template.css']
})

export class PostsListComponent implements OnInit, OnChanges {
  posts: Post[];
  @Output() editStart = new EventEmitter();
  @Input() needUpdatePostsList: boolean;

  constructor(private postService: PostService) {}

  doDelete(post: Post) {
    this.postService.deletePost(post);
    this.updatePostsList();
  }

  doEdit(post: Post) {
    this.editStart.emit(post);
  }

  updatePostsList() {

    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
      console.log(this.posts);
    });
  }
  ngOnInit(): void {
    this.updatePostsList();
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (let propName in changes) {
      let chng = changes[propName];
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }
}
