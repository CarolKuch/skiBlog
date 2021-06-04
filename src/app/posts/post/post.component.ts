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

  confirmPostRemoval = (id?) => {
    let popups = document.getElementsByClassName("myPopup");
    if (id[0] !== undefined && id[0] !== null) {
      console.log("DETE", id[0])
      Array.prototype.forEach.call(popups, (popup) => {
        if (popup.classList.contains(id[0])) {
          popup.classList.toggle("show");
        }
      })
    } else {
      console.log("DETE")
      Array.prototype.forEach.call(popups, (popup) => {
        popup.classList.toggle("show");
      })
    }
    return true;
  }

  deletePost = (id: number) => {
    if (this.confirmPostRemoval(id)) {
      axios({
        method: 'DELETE',
        url: 'http://localhost:3000/posts/' + (id),
        headers: { 'Content-Type': 'application/json' },
      });
      setTimeout(() => { }, 2000);
      if (this.router.url === '/posts') {
        window.location.reload();
      } else {
        this.router.navigate(['/posts']);
      }
    } else {
      this.router.navigate(['/posts'])
    }
  }

  editPost = (id) => {
    if (this.element.id) {
      this.router.navigate(['/edit/' + id], { state: { title: this.element.title, text: this.element.text, id: id } });
    } else {
      this.router.navigate(['/edit/'], { state: { title: this.element.title, text: this.element.text } });
    }

  }
}
