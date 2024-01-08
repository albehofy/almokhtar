import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashComponent } from './Pages/splash/splash.component';
import { RequestNewCourseComponent } from './Pages/request-new-course/request-new-course.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { HomeComponent } from './Pages/home/home.component';
import { CollageComponent } from './Pages/collage/collage.component';
import { CourseComponent } from './Pages/course/course.component';
import { StudentComponent } from './Pages/student/student.component';
import { LessonComponent } from './Pages/lesson/lesson.component';
import { UniversityComponent } from './Pages/university/university.component';

const routes: Routes = [
  { path: "", redirectTo: 'splash', pathMatch: 'full' },
  { path: "splash", component: SplashComponent },
  {path:"request-new-course", component: RequestNewCourseComponent},
  {
    path: "", component: LayoutComponent,
    children: [
      { path: "home", component: HomeComponent },
      { path: "universities/:id", component: UniversityComponent },
      { path: "colleges/:id", component: CollageComponent },
      { path: "lesson", component: LessonComponent },
      {
        path: "profile", component: StudentComponent,
        children: []
      }, 
      // { path: '**', component: notFounded }

    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
