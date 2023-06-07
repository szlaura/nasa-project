import { Component, OnInit } from '@angular/core';
import { Emitter } from 'src/app/emitters/authEmitter';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  constructor(private authService: AuthService) {}
  
  ngOnInit(): void {

    this.authService.currentState.subscribe(data => {
      this.currentState = data;
    })

    Emitter.authEmitter.subscribe((res: any)=>{
      this.isLoggedIn = res
    })

  }

  isLoggedIn = false ;
  currentState: any;

  logout(){
    localStorage.removeItem('token')
    Emitter.authEmitter.emit(false)
  }
}
