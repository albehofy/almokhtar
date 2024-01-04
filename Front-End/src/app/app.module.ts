import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlyrComponent } from './Components/plyr/plyr.component';
import { SwipperComponent } from './Components/swipper/swipper.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './Pages/home/home.component';
import { RequestNewCourseComponent } from './Pages/request-new-course/request-new-course.component';
import { SplashComponent } from './Pages/splash/splash.component';
import { StudentComponent } from './Pages/student/student.component';
import { UniversityComponent } from './Pages/university/university.component';
import { CollageComponent } from './Pages/collage/collage.component';
import { CourseComponent } from './Pages/course/course.component';
import { LessonComponent } from './Pages/lesson/lesson.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormatTimePipe } from './Pipes/format-time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PlyrComponent,
    SwipperComponent,
    LayoutComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    HomeComponent,
    RequestNewCourseComponent,
    SplashComponent,
    StudentComponent,
    UniversityComponent,
    CollageComponent,
    CourseComponent,
    LessonComponent,
    FormatTimePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
