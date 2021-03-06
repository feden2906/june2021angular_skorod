import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {UserComponent} from './components/user/user.component';
import {UsersComponent} from './components/users/users.component';
import {PostsComponent} from './components/posts/posts.component';
import {PostComponent} from './components/post/post.component';
import {Route, RouterModule} from "@angular/router";
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {PostDetailsComponent} from './components/post-details/post-details.component';
import {PostResolveService, UserResolveService} from "./services";
import {HomeComponent} from './components/home/home.component';
import {TestGuard} from "./guards/test.guard";
import {FormsComponent} from './components/forms/forms.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DetailsComponent } from './components/details/details.component';

const routes:Route[] = [
  {
    path: '', component: HomeComponent,
    children: [
      {
        path: 'users',
        component: UsersComponent,
        canActivateChild: [TestGuard],
        canDeactivate: [TestGuard],
        children: [
          {
            path: ':id', component: UserDetailsComponent,
            resolve: {data: UserResolveService}
          }
        ]
      },
      {
        path: 'posts',
        component: PostsComponent,
        children: [
          {
            path: ':id', component: PostDetailsComponent,
            resolve: {data: PostResolveService}
          }
        ]
      },
      {path: 'details', component: DetailsComponent}
    ]
  },
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    PostsComponent,
    PostComponent,
    UserDetailsComponent,
    PostDetailsComponent,
    HomeComponent,
    FormsComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
