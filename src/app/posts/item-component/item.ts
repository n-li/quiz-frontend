import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../../shared/post';

@Component({
  selector: 'app-post-item',
  templateUrl: './item.template.html',
  styleUrls: ['./item.template.css']
})

export class PostItemComponent {
  @Input() post: Post;
  @Output() delete = new EventEmitter();
  @Output() edit = new EventEmitter();
  doDelete() {
    if (!window.confirm('Do you really want to delete this post?')) {
      return;
    }
    this.delete.emit(this.post);
  }
  doEdit() {
    this.edit.emit(this.post);
  }
}
