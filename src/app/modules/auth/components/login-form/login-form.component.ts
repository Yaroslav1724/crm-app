import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../../services";
import {Router} from "@angular/router";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'login-form',
  templateUrl: 'login-form.component.html',
  styleUrls: ['login-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent implements OnInit {
  form: FormGroup

  error = false

  constructor(private authService: AuthService, private router: Router, private dialogRef: MatDialogRef<LoginFormComponent>) {
  }

  ngOnInit() {
    this._initForm()
  }

  _initForm(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
  }

  login(): void {
    this.authService.login(this.form.getRawValue()).subscribe({
      complete: () => {
        this.error = false
      },
      error: (err) => {
        this.error = true
      },
      next: () => {
        this.router.navigate(['/order'])
        this.dialogRef.close()
      }
    })
  }
}
