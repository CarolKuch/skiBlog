import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input('postElement') element;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  confirmPostRemoval = () => {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
    return true;
  }

  deletePost = () => {
    if (this.confirmPostRemoval()) {
      axios({
        method: 'DELETE',
        url: 'http://localhost:3000/posts/' + (this.element.id),
        headers: { 'Content-Type': 'application/json' },
      });
      console.log(this.element.id);
      alert("Post is removed");

      if (this.router.url === '/posts') {
        window.location.reload()
      } else {
        this.router.navigate(['/posts']);
      }
    }
  }

  editPost = () => {
    this.router.navigate(['/edit/' + this.element.id]);
  }
}
