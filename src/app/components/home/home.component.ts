import { Component, OnInit } from '@angular/core';
import { UsersService } from "src/app/services/users.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  usuario;
  activeId = 1;
  constructor(public userService: UsersService, public router: Router) { }
  
  ngOnInit() {
    this.getUserLogged();
  }
  getUserLogged() {
    this.userService.getUser().subscribe(data => {
      this.usuario=data
      console.log(data)
    });
  }
  salir(){
    this.userService.logout()
    this.router.navigateByUrl('/login');
      }
}
