import { Component, OnChanges, SimpleChanges} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import {  FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { AuthService } from '../../service/auth-service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { Dialogbox } from '../common-component/dialogbox/dialogbox';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  imports: [CommonModule,ReactiveFormsModule, MatIconModule, MatDialogModule, MatButtonModule, Dialogbox],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup  {
  signupForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService, private dialog: MatDialog) {
    // Initialize the form with FormBuilder
    this.signupForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['',[ Validators.required, Validators.minLength(6),  Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&#])[A-Za-z\\d@$!%*?&#]{6,}$')]],
      confirmPassword: ['', [Validators.required,Validators.minLength(6),  Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&#])[A-Za-z\\d@$!%*?&#]{6,}$')]]
    });
    
  }

  validateConfirmPassword(password:FormControl,confirmPassword:FormControl) {
    console.log(password.value);
    if(password.value !== confirmPassword.value){
      this.signupForm.get('confirmPassword')?.setErrors({ mismatch: true });
    } else {
      this.signupForm.get('confirmPassword')?.setErrors(null);
    }
  }

  login() {
    this.router.navigateByUrl('/login');
  }

  onSubmit() {
    if (this.signupForm.valid) {
  
    this.authService.signUp(this.signupForm.value).then(response => {
      console.log(response);
      this.authService.createUserDocument(response.user.uid, this.signupForm.value);
      this.router.navigateByUrl('/login');
    }).catch(error => {

    this.authService.openDialog(error, "Error while doing Registration");

    });
  }
}
}
