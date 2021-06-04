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

  constructor(private router: Router) { }

  ngOnInit(): void { }

  onAddItem(form: NgForm) {
    if (form.value.title.trim().length > 2 && form.value.postText.trim().length > 9) {
      this.router.navigate(['/checkout-summary'], { state: { title: form.value.title, text: form.value.postText } })
    } else {
      let popupTitle = document.getElementsByClassName("popupTitle")[0];
      let popupText = document.getElementsByClassName("popupText")[0];
      if (form.value.title.trim().length <= 2) {

        if (!popupTitle.classList.contains('show')) {
          popupTitle.classList.add('show');
        }
      } else {
        if (popupTitle.classList.contains('show')) {
          popupTitle.classList.remove('show');
        }
      }
      if (form.value.postText.trim().length <= 9) {
        if (!popupText.classList.contains('show')) {
          popupText.classList.add('show');
        }
      } else {
        if (popupText.classList.contains('show')) {
          popupText.classList.remove('show');
        }
      }
    }
  }

}
