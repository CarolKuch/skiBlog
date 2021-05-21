import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  onAddItem(form: NgForm) {
    if (form.value.title.length > 2 && form.value.postText.length > 9) {
      axios
        .post('http://localhost:3000/posts', {
          "title": form.value.title, "text": form.value.postText
        });
      this.router.navigate(['/checkout-summary']);

    } else {
      if (form.value.title.length <= 2) {
        console.log("Title must contain at least 3 characters")
      }
      if (form.value.postText.length <= 9) {
        console.log("Post text must contain at least 10 characters")
      }
    }
  }

}
