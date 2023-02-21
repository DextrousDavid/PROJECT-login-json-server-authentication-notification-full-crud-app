import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent {
  constructor(private router: Router, private route: ActivatedRoute) {

  }
  routeToSecondPage() {
    this.router.navigate(['/secondPage/second'])
  }
}
