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
    console.log(form.value);
  }

}
