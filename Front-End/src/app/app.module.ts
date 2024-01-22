import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms'; // Import this for using ngModel
import { AppRoutingModule } from './app-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';//for mat-form-field module
import {MatCardModule} from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';//for Accordion module
import {register} from 'swiper/element/bundle';

import { GlobalEventService } from './Services/global-event.service';

import { AppComponent } from './app.component';
import { SwipperComponent } from './Components/swipper/swipper.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './Pages/home/home.component';
import { SplashComponent } from './Pages/splash/splash.component';
import { StudentComponent } from './Pages/student/student.component';
import { UniversityComponent } from './Pages/university/university.component';
import { CollageComponent } from './Pages/collage/collage.component';
import { CourseComponent } from './Pages/course/course.component';
import { LessonComponent } from './Pages/lesson/lesson.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormatTimePipe } from './Pipes/format-time.pipe';
import { VideoPlayerComponent } from './Components/video-player/video-player.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ActiveCoursesComponent } from './Pages/student/active-courses/active-courses.component';
import { StudentInfoComponent } from './Pages/student/student-info/student-info.component';
import { MessageComponent } from './Components/message/message.component';
import { SubscripeComponent } from './Components/subscripe/subscripe.component';
import { ChatIconComponent } from './Components/chat-icon/chat-icon.component';
import { QuranKareemComponent } from './Pages/quran-kareem/quran-kareem.component';
import { CourseMessageComponent } from './Components/course-message/course-message.component';
import { VideoSubscribeMessageComponent } from './Components/video-subscribe-message/video-subscribe-message.component';
import { AllCoursesComponent } from './Pages/all-courses/all-courses.component';
import { NotFoundedComponent } from './Pages/not-founded/not-founded.component';
import { SwiperCoursesComponent } from './Components/swiper-courses/swiper-courses.component';
import { AboutComponent } from './Components/about/about.component';
import { WhoIsUSComponent } from './Components/who-is-us/who-is-us.component';


register();

@NgModule({
  declarations: [
    AppComponent,
    SwipperComponent,
    LayoutComponent,
    NavbarComponent,
    HomeComponent,
    SplashComponent,
    StudentComponent,
    UniversityComponent,
    CollageComponent,
    CourseComponent,
    LessonComponent,
    FormatTimePipe,
    VideoPlayerComponent,
    FooterComponent, 
    ActiveCoursesComponent, 
    StudentInfoComponent, MessageComponent, SubscripeComponent, ChatIconComponent, QuranKareemComponent, CourseMessageComponent, VideoSubscribeMessageComponent, AllCoursesComponent, NotFoundedComponent, SwiperCoursesComponent, AboutComponent, WhoIsUSComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule, 
    MatExpansionModule, 
    MatInputModule
  ],
  providers: [GlobalEventService],
  bootstrap: [AppComponent], 
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
}) 
export class AppModule {}