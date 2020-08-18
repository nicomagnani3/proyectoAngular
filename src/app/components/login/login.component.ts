import { Component, OnInit } from '@angular/core';
import { UsersService } from "src/app/services/users.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  loading = false;
  submitted = false;  
  error = '';
 
  constructor(private formBuilder: FormBuilder, public userService: UsersService, public router: Router) {    
      if (userService.getToken()) { 
        this.router.navigate(['/']);
    }
   }

    ngOnInit(): void {
          this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required,Validators.email]],
            password: ['', Validators.required]
        });      
    }
    get f() { return this.loginForm.controls; }
 login() {
   this.submitted = true;
      if (this.loginForm.invalid) {
        return;
    } 
    this.loading = true;
     const user = {email: this.f.email.value, password: this.f.password.value};
          this.userService.login(user).subscribe( data => {
            this.userService.setToken(data.token);
            this.router.navigateByUrl('/novedades');
            console.log(data)
          },
          error => {
            this.loading = false;           
            this.error=error.error.error
           
          }); 
  }

  
}
