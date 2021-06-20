import { Component, OnInit, Input, ɵɵtrustConstantResourceUrl } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-checkout-summary',
  templateUrl: './checkout-summary.component.html',
  styleUrls: ['./checkout-summary.component.scss']
})
export class CheckoutSummaryComponent implements OnInit {
  @Input('post') post = {
    title: '',
    text: '',
    id: undefined
  };

  constructor(private route: ActivatedRoute, private router: Router) {
    this.post["title"] = this.router.getCurrentNavigation().extras.state.title;
    this.post["text"] = this.router.getCurrentNavigation().extras.state.text;
    this.post["id"] = this.router.getCurrentNavigation().extras.state.id;
  }

  ngOnInit(): void {
  }
  sendPostToDataBase = () => {
    if (this.post.id !== undefined) {
      axios({
        method: 'PUT',
        url: 'http://localhost:3000/posts/' + this.post.id,
        headers: { 'Content-Type': 'application/json' },
        data: { "title": this.post.title, "text": this.post.text }
      });
      setTimeout(() => { this.router.navigate(['/']); }, 500);

    }
    else {
      axios
        .post('http://localhost:3000/posts', {
          "title": this.post.title, "text": this.post.text
        })
        .then(
          (res) => {
            this.post.id = res.data.id
          }
        );
      setTimeout(() => { this.router.navigate(['/']); }, 500);

    }


  }
}
