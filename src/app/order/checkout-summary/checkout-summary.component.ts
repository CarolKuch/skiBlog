import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-checkout-summary',
  templateUrl: './checkout-summary.component.html',
  styleUrls: ['./checkout-summary.component.scss']
})
export class CheckoutSummaryComponent implements OnInit {
  post: {};
  id: number;
  constructor(private router: Router) { }

  ngOnInit(): void {
    axios
      .get('http://localhost:3000/posts')
      .then(response => {
        this.post = response.data.slice().reverse()[0];
        this.id = response.data.slice().reverse()[0].id;
      }
      );
  }
  checkoutAllPosts = () => {
    this.router.navigate(['/']);
  }

  deleteLastPosts = () => {
    axios({
      method: 'DELETE',
      url: 'http://localhost:3000/posts/' + (this.id),
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(this.id);
    alert("Your last post is removed");
    this.router.navigate(['/']);
  }
}
