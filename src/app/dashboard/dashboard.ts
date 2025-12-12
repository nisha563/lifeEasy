import { Component } from '@angular/core';
import{MatIconModule} from '@angular/material/icon';
import { AuthService } from '../../service/auth-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  imports: [MatIconModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  constructor(private authService: AuthService,private router:Router ) { }

  logout(){
    console.log("logout method");
    this.authService.signOut().then(() => {
      console.log('User signed out successfully');
      this.router.navigateByUrl('/login');
      // Redirect to login or perform other actions after logout
    }).catch((error) => {
      console.error('Error signing out:', error);
    });
  }
}
