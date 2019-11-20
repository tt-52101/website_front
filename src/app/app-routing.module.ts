import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { ArticleComponent } from './views/article/article.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';


const routes: Routes = [


  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },// todo 下面的路径作为''的children
  { path: 'contact', component: ContactComponent },

  { path: 'login', component: LoginComponent }, //todo 在上面一个todo的基础上，是否单独拿出来，和''平级
  { path: 'register', component: RegisterComponent },
  { path: 'article', component: ArticleComponent },
  { path: 'dashboard', component: DashboardComponent },

  // todo 最后加默认路由或者路由重定向

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
