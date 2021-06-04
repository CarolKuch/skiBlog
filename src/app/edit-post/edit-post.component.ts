import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import axios from 'axios';
import { title } from 'process';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {
  public postId: string;
  public postText: string;
  public postTitle: string;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.postTitle = this.router.getCurrentNavigation().extras.state.title;
    this.postText = this.router.getCurrentNavigation().extras.state.text;
    if (this.router.getCurrentNavigation().extras.state.id) {
      this.postId = this.router.getCurrentNavigation().extras.state.id;
    }
  }


  ngOnInit(): void {
    this.postId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.postId) {
      axios
        .get('http://localhost:3000/posts/' + this.postId)
        .then(response => {
          this.postTitle = response.data.title;
          this.postText = response.data.text;
        }
        );
    }
  }

  onEditItem = (form: NgForm) => {
    if (this.postId !== undefined) {
      this.router.navigate(['/checkout-summary'], { state: { title: form.value.title, text: form.value.postText, id: this.postId } });
    } else {
      this.router.navigate(['/checkout-summary'], { state: { title: form.value.title, text: form.value.postText } });
    }
  }

  onCancel = () => {
    this.router.navigate(['/posts']);
  }
}
