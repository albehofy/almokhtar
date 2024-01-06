import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms'; // Import this for using ngModel
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { VideoPlayerComponent } from './Components/video-player/video-player.component';

@NgModule({
  declarations: [
    AppComponent,
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
    FormatTimePipe,
    VideoPlayerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
}) 
export class AppModule {}