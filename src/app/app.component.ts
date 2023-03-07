import { Component } from '@angular/core';
import { LoginServiceService } from './services/login-service.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'page-routing';

  constructor(private service: LoginServiceService, private toastr: ToastrService,
    ) {}

  logout() {
    this.service.userIsLoggedOut();
    this.toastr.success('You logged out!');
  }
}
