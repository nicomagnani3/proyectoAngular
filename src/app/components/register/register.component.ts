import { Component, OnInit } from '@angular/core';
import { UsersService } from "src/app/services/users.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  loading = false;
  submitted = false;  
  error = '';
  

  constructor(public userService: UsersService,private formBuilder: FormBuilder,public router: Router) { }

  ngOnInit(): void {
        this.registerForm = this.formBuilder.group({
          email: ['', [Validators.required,Validators.email]],
          password: ['', Validators.required],
          confirmedpassword: ['', Validators.required],
      });    
  }
  get f() { return this.registerForm.controls; }

  register() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
  } 
  this.loading = true;
    const user = { email: this.f.email.value, password: this.f.password.value };
    this.userService.register(user).subscribe(data => {
      this.userService.setToken(data.token);
      this.router.navigateByUrl('/novedades');
    },
    error => {
      this.loading = false;           
      this.error=error.error.error
     
    }); 
}
}
