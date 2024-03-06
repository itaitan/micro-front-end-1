import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'projeto-teste1';

  constructor(private cookieService: CookieService) {}

  ngOnInit(): void {
    this.cookieService.set('itaCookie', 'testeCookie');
  }
}
