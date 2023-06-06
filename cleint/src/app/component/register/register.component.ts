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

  formdata = this.formBuilder.group({
    username: '',
    password: '',
    // password2: '',
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

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) { }
  
  ngOnInit(): void {
    this.succeed = false;
    this.failed = false;
  }

  onSignUp(){
    console.log("email of login "+this.formdata.value.password);
    this.newUser.username = this.formdata.value.username || '';
    this.newUser.password = this.formdata.value.password || '';
    this.newUser.email = this.formdata.value.email || '';
    console.log("PWD KIIRAS"+ this.newUser.password);
    
    this.authService.signupUser(this.newUser)
    .subscribe({
      next: (res) => {
        if(res.status == 200){
          this.succeed = true;
          this.router.navigate(['/login']);
          console.log("KIRALY");
        }
          this.succeed = true;
          this.router.navigate(['/login']);
      },
      error: (e) => {
          this.failed = true;
          this.errorMsg = "Something went wrong!"
        
        console.error(e)}
    });
  }

}
