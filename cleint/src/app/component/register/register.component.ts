import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) { }
  
  ngOnInit(): void {
    this.succeed = false;
    this.failed = false;
  } 

  formdata = this.formBuilder.group({
    username: '',
    password: '',
    email: ''
  });

  newUser: User  = {
    email: '',
    username: '',
    password: ''
  };

  succeed: any;
  failed: any;
  errorMsg= '';

  register(){
    this.newUser.username = this.formdata.value.username || '';
    this.newUser.password = this.formdata.value.password || '';
    this.newUser.email = this.formdata.value.email || '';

    this.authService.register(this.newUser.username,this.newUser.password, this.newUser.email)
    .subscribe({next:() => {
        this.succeed = true;
        this.router.navigate(['/login']);
    },error : (err) =>{
      this.failed = true;
      if(err.error.code == 11000){
        this.errorMsg= 'User already exists! Try something else.';
      } 
      else {
        this.errorMsg= 'Something went wrong!';
      }
      console.error(err);
    }});
  }
}
