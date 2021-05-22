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

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }
  public postId: string;
  public postText: string;
  public postTitle: string;

  ngOnInit(): void {
    this.postId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.postId);
    axios
      .get('http://localhost:3000/posts/' + this.postId)
      .then(response => {
        this.postTitle = response.data.title;
        this.postText = response.data.text;
      }
      );
  }

  onEditItem = (form: NgForm) => {

    axios({
      method: 'PUT',
      url: 'http://localhost:3000/posts/' + this.postId,
      headers: { 'Content-Type': 'application/json' },
      data: { "title": form.value.title, "text": form.value.postText }
    });
    this.router.navigate(['/checkout-summary', this.postId]);
  }

  onCancel = () => {
    this.router.navigate(['/posts']);
  }
}
