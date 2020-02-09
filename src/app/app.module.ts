import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from './auth.service';
import { routes } from './app.routes';


// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyD3CPvUjZydivGkiSSWxN0yOqSlQ-Ulgn8",
  authDomain: "planner-f2e4b.firebaseapp.com",
  databaseURL: "https://planner-f2e4b.firebaseio.com",
  projectId: "planner-f2e4b",
  storageBucket: "planner-f2e4b.appspot.com",
  messagingSenderId: "123083479575",
  appId: "1:123083479575:web:48b29fc758bc01fc8b5a52",
  measurementId: "G-WZ244SJ37C"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routes
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
