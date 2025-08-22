import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, getAuth } from 'firebase/auth';
import "firebase/firestore";
import { Firestore, collection, addDoc, setDoc, doc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private auth: Auth, private firestore: Firestore) {

  }



  signUp(userDetails: any) {

    createUserWithEmailAndPassword(this.auth, userDetails.email, userDetails.password)
      .then((userCredential) => {
        console.log('User created successfully', userCredential);
        // Signed in 
        var user = userCredential.user;
        //store user information in firestore
        this.createUserDocument(user.uid, userDetails);
        // ...
      })
      .catch((error) => {
        console.error('Error creating user:', error);
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
    // return createUserWithEmailAndPassword(this.auth, email, password);
  }

  logIn(email: string, password: string) {
    signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log('User logged in successfully');
        var user = userCredential.user;
        // ...
      })
      .catch((error) => {
        console.error('Error logging in:', error);
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  }

  signOut() {
    return signOut(this.auth);
  }

  createUserDocument(uid: string, userDetails: any) {

    const usersRef = doc(this.firestore, 'users', uid);
    return setDoc(usersRef, { userName: userDetails.username, email: userDetails.email }).then(() => {
      console.log('User document created successfully')
    }).catch((error: any) => {
      console.error('Error creating user document:', error)
    });

  }

}
