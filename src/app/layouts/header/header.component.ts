import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService } from '../../services';
import { Router } from '@angular/router';
import { IAuth } from '../../interfaces';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  user: IAuth | null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.getAuthUser().subscribe((value) => {
      if (value) {
        this.user = value;
      } else {
        this.authService.me().subscribe((value) => {
          this.authService.setAuthUser(value);
          this.user = value;
        });
      }
    });
  }

  deleteToken(): void {
    this.authService.deleteTokens();
    this.router.navigateByUrl('/auth/login');
  }
}
