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
    this.authService.setLoggedIn(false);
  }

  onSubmit(){
    this.user.username = this.formdata.value.username || '';
    this.user.password = this.formdata.value.pwd || '';

    this.authService.login( this.user.username,this.user.password)
    .subscribe({
      next: (res) => {
        this.succeed = true;
        console.log(res)
        localStorage.setItem('token',res.token);
        this.router.navigate(['/asteroids']);
        this.authService.setLoggedIn(true);
        this.authService.setCurrentUser(this.user.username);
    },error : (err)=>{
      this.failed = true;
      if(err.status == 401){
        this.errorMsg='User does not exist!';
        }
        else{
          this.errorMsg='Wrong password or username!';
        }
        console.error(err);
    }})
  }
}
