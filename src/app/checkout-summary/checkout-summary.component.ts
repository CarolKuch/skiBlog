import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-checkout-summary',
  templateUrl: './checkout-summary.component.html',
  styleUrls: ['./checkout-summary.component.scss']
})
export class CheckoutSummaryComponent implements OnInit {
  post: {} = { "title": "", "text": "" };
  id: number;
  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    axios
      .get('http://localhost:3000/posts')
      .then(response => {
        if (this.router.url === '/checkout-summary') {
          this.post = response.data.slice().reverse()[0];
        } else {
          this.id = Number(this.route.snapshot.paramMap.get('id'));
          this.post = response.data.slice()[this.id - 1];
        }
      }
      );
  }
  checkoutAllPosts = () => {
    this.router.navigate(['/']);
  }
}
