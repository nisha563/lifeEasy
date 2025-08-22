import { Component } from '@angular/core';
import{MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';
import { FormControl,FormBuilder,FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../service/auth-service';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule,MatIconModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {
signupForm: FormGroup;
  constructor(private fb:FormBuilder,private router:Router, private authService: AuthService) { 
    // Initialize the form with FormBuilder
    this.signupForm = this.fb.group({
      username: ['',Validators.required],
      email: ['',Validators.required],
      password: ['',Validators.required],
      confirmPassword: ['',Validators.required]
    });
  }


 login(){
  
  this.router.navigateByUrl('/login');
 }

  onSubmit() {    console.log('Form submitted');
this.authService.signUp(this.signupForm.value);
    // Here you can handle the form submission logic, like sending data to a server
  }
}
