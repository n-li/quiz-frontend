import {Component, Input, Output, EventEmitter} from '@angular/core';
import { Post } from '../../shared/post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './list.template.html',
  styleUrls: ['./list.template.css']
})

export class PostsListComponent {
  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();
  @Input() posts: Post[];

  doDelete(post: Post) {
    this.delete.emit(post);
  }

  doEdit(post: Post) {
    this.edit.emit(post);
  }

}
