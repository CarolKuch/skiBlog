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

  confirmPostRemoval = (id: number) => {
    let popups = document.getElementsByClassName("myPopup");
    Array.prototype.forEach.call(popups, (popup) => {
      if (popup.classList.contains(id)) {
        popup.classList.toggle("show");
      }
    })
    return true;
  }

  deletePost = (id: number) => {
    if (this.confirmPostRemoval(id)) {
      axios({
        method: 'DELETE',
        url: 'http://localhost:3000/posts/' + (id),
        headers: { 'Content-Type': 'application/json' },
      });

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
