import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  onAddItem(form: NgForm) {
    axios
      .post('http://localhost:3000/posts', {
        "title": form.value.title, "text": form.value.postText
      });
    alert("Your post was added");
  }

}
