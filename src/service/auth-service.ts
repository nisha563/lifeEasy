import { Injectable } from '@angular/core';
import { Auth,user } from '@angular/fire/auth';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, getAuth } from 'firebase/auth';
import "firebase/firestore";
import { Firestore, collection, addDoc, setDoc, doc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Dialogbox } from '../app/common-component/dialogbox/dialogbox';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 public user$: Observable<any | null>;

  constructor(private auth: Auth, private firestore: Firestore, private dialog: MatDialog) {
console.log("inside auth service", getAuth().currentUser);
 this.user$ = user(this.auth);
 this.user$.subscribe(userData => {
      if (userData) {
        console.log('User is logged in:', userData);
      } else {
        console.log('No user is logged in.');
      }
    });
  }



  signUp(userDetails: any) {

   return createUserWithEmailAndPassword(this.auth, userDetails.email, userDetails.password)
      // .then((userCredential) => {
      //   console.log('User created successfully', userCredential);
      //   // Signed in 
      //   var user = userCredential.user;
      //   //store user information in firestore
      //   this.createUserDocument(user.uid, userDetails);
      //   // ...
      // })
      // .catch((error) => {
      //   console.error('Error creating user:', error);
      //   var errorCode = error.code;
      //   var errorMessage = error.message;
      //   // ..
      // });
    // return createUserWithEmailAndPassword(this.auth, email, password);
  }

  logIn(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
      
  }
  setPersistemce(){
    
    //setPersistence(auth, browserLocalPersistence);  
  }

  signOut() {
    return signOut(this.auth);
  }

  isLoggedIn(): boolean {
    //setPersistence(auth, browserLocalPersistence);
// getAuth().onAuthStateChanged((user) => {console.log(user,"current user",user?.uid);
   const userIn= getAuth().currentUser;
    return !!userIn;
// });
    // Returns true if user is logged in, false otherwise
  }

  createUserDocument(uid: string, userDetails: any) {

    const usersRef = doc(this.firestore, 'users', uid);
    return setDoc(usersRef, { userName: userDetails.username, email: userDetails.email }).then(() => {
      console.log('User document created successfully')
    }).catch((error: any) => {
      console.error('Error creating user document:', error)
    });

  }

   openDialog(content: string, title:string): void {
      this.dialog.open(Dialogbox, {
        data: { content: content, title: title },
        width: '250px',
        enterAnimationDuration:'500ms',
        exitAnimationDuration:'500ms',
      });
    }
  
}
