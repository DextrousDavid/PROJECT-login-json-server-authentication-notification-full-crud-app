import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})
export class SecondPageComponent {
 constructor(private router: Router, private route: ActivatedRoute) {

  }
  routeToFirstPage() {
    this.router.navigate(['/firstPage/first'])
  }
}
