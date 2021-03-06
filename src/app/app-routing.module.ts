import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/business/about/about.component';
import { ContactComponent } from './views/business/contact/contact.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { AddArticleComponent } from './views/business/article/article-add/add-article.component';
import { DashboardComponent } from './views/business/dashboard/dashboard.component';
import { ArticleListComponent } from './views/business/article/article-list/article-list.component';
import { PermAssignComponent } from './views/business/perm/perm-assign/perm-assign.component';
import { AddMenuComponent } from './views/business/menu/menu-add/add-menu.component';
import { UserListComponent } from './views/business/user/user-list/user-list.component';
import { AddRoleComponent } from './views/business/role/role-add/add-role.component';
import { RoleListComponent } from './views/business/role/role-list/role-list.component';
import { AuthGuard } from './auth.guard';
import { AddUserComponent } from './views/business/user/user-add/add-user.component';
import { ThirdPartyComponent } from './views/business/third-party/third-party.component';
import { MainComponent } from './views/business/main/main.component';
import { MsgComponent } from './views/business/msg/msg.component';


const routes: Routes = [
  // todo 配置canActivateChild及与父级的关系：https://www.cnblogs.com/gushiyoyo/p/11271389.html
  // todo 什么场景适合使用canActivateChild？
  // todo 后续模块多了用子路由
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent, children: [// , canActivate: [AuthGuard]
    { path: 'main', component: MainComponent, canActivate: [AuthGuard] },
    { path: 'adduser', component: AddUserComponent, canActivate: [AuthGuard] },
    { path: 'userlist', component: UserListComponent, canActivate: [AuthGuard] },
    { path: 'addrole', component: AddRoleComponent, canActivate: [AuthGuard] },
    { path: 'rolelist', component: RoleListComponent, canActivate: [AuthGuard] },
    { path: 'addarticle', component: AddArticleComponent, canActivate: [AuthGuard] },
    { path: 'articlelist', component: ArticleListComponent, canActivate: [AuthGuard] },
    { path: 'addmenu', component: AddMenuComponent, canActivate: [AuthGuard] },
    { path: 'permassign', component: PermAssignComponent, canActivate: [AuthGuard] },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'components', component: AboutComponent, canActivate: [AuthGuard] },
    { path: '3rdparty', component: ThirdPartyComponent, canActivate: [AuthGuard] },
    { path: 'message', component: MsgComponent, canActivate: [AuthGuard] },
    { path: 'contact', component: ContactComponent, canActivate: [AuthGuard] },
    
  ]}

  

  // todo 最后加默认路由或者路由重定向

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
