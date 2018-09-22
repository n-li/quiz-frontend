import {Component, Input, OnChanges, SimpleChanges, EventEmitter, Output} from '@angular/core';
import { Post } from '../shared/post';
import {PostService} from '../shared/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './form.template.html',
  styleUrls: ['./form.template.css']
})

export class FormComponent implements OnChanges {
  @Input() editPost: Post;
  @Output() cancel = new EventEmitter();
  @Output() save = new EventEmitter();
  constructor(private postService: PostService) {}
  doCancel() {
    this.cancel.emit();
  }
  doSave(event: Event) {
    event.preventDefault();
    this.postService.savePost(this.editPost).subscribe(post => {
      this.save.emit();
    });

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
