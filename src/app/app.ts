import { Component, signal } from '@angular/core';
import { PostCreateComponent } from "./posts/post-create/post-create.component";
import { MatInputModule } from '@angular/material/input';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './posts/post-list/post-list.component';

@Component({
  selector: 'app-root',
  imports: [
    PostCreateComponent, MatInputModule,
    HeaderComponent, PostListComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('mean-course');
}***REMOVED***
***REMOVED***