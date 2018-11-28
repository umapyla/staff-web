import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from '../core/constant';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  nextPage = Constants.transactions.nextPage;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onNextPage() {
    this.router.navigate(['/transactional']);
  }
}
