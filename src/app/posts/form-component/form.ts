import {Component, Input, SimpleChanges, EventEmitter, Output} from '@angular/core';
import { Post } from '../../shared/post';

@Component({
  selector: 'app-post-form',
  templateUrl: './form.template.html',
  styleUrls: ['./form.template.css']
})

export class FormComponent  {
  @Input() editPost: Post;
  @Output() cancel = new EventEmitter();
  @Output() save = new EventEmitter();

  doCancel() {
    this.cancel.emit();
  }
  doSave(event: Event) {
    event.preventDefault();
    this.save.emit(this.editPost);
  }
}
