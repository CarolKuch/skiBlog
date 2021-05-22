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
    console.log(document.getElementsByClassName("myPopup"));
    let popups = document.getElementsByClassName("myPopup");
    let popup = Array.prototype.slice.call(popups, 0).reverse()[this.element.id - 1];
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
