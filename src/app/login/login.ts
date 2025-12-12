import { ChangeDetectionStrategy, Component } from '@angular/core';
import{MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';
import { FormControl,FormBuilder,FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../service/auth-service';

@Component({
  selector: 'app-login',
 // standalone:true,
  imports: [ReactiveFormsModule,MatIconModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Login {
 loginForm: FormGroup;
  constructor(private fb:FormBuilder,private router:Router,private authService: AuthService) { 
    // Initialize the form with FormBuilder
    this.loginForm = this.fb.group({
      email: ['',Validators.required],
      password: ['',Validators.required]
    });
  }


 signup(){
  console.log("Signup method");
  this.router.navigateByUrl('/signup');
 }

  onSubmit() {    console.log('Form submitted');
    this.authService.logIn(this.loginForm.value.email, this.loginForm.value.password).then((userCredential) => {
        // Signed in
        console.log('User logged in successfully');
        var user = userCredential.user;
         this.router.navigateByUrl('/dashboard');
        // ...
      })
      .catch((error) => {
        console.error('Error logging in:', error);
          this.authService.openDialog(error, "Error while doing Login");
        var errorCode = error.code;
        var errorMessage = error.message;
      });;
    // Here you can handle the form submission logic, like sending data to a server
  }
}
