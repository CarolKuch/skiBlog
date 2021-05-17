import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: {}[];
  constructor() {

  }

  ngOnInit(): void {
    axios
      .get('http://localhost:3000/posts')
      .then(response => {
        this.posts = response.data;
        console.log(this.posts);
      }
      );
  }

}
