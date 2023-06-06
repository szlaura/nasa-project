import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  formdata = this.formBuilder.group({
    username: '',
    pwd: ''
  });

  user: User  = {
    username: '',
    password: ''
  };

  succeed: any;
  failed: any;
  errorMsg= '';

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.succeed = false;
    this.failed = false;
  }

  onSubmit() {
    console.log("email of login "+this.formdata.value.pwd);
    this.user.username = this.formdata.value.username || '';
    this.user.password = this.formdata.value.pwd || '';
    console.log("PWD KIIRAS"+ this.user.password);
    
    this.authService.loginUser(this.user)
    .subscribe({
      next: (res) => {
        if(res.status == 200){
          this.succeed = true;
          this.router.navigate(['/asteroids']);
          console.log("KIRALY");
        }
          this.succeed = true;
          this.router.navigate(['/asteroids']);
      },
      error: (e) => {
        if(e.status == 401){
          this.failed = true;
          this.errorMsg = "Invalid user and/or password!"
        }else{
          this.failed = true;
          this.errorMsg = "Something went wrong!"
        }
        console.error(e)}
    });
  }
}
