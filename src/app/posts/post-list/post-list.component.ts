import { Component, OnDestroy, OnInit} from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from "@angular/material/input";
import { Post } from '../post.model';
import { PostsService } from '../post.service';
import { Subscription } from 'rxjs';
import { MatAnchor } from "@angular/material/button";
import { RouterLink } from "@angular/router";
import { MatProgressSpinner } from "@angular/material/progress-spinner";

@Component({
  selector: 'app-post-list',
  imports: [MatExpansionModule, MatAnchor, RouterLink, MatProgressSpinner],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent implements OnInit, OnDestroy {
  // posts = [
  //   {title: 'First Post', content: 'This is the first post'},
  //   {title: 'Second Post', content: 'This is the second post'},
  //   {title: 'Third Post', content: 'This is the third post'}
  // ];
  posts: Post[] = [];
  isLoading = false;
  private postsSub: Subscription = new Subscription;

  constructor(public postsService: PostsService) {}

  ngOnInit() {
    this.isLoading = true;
    this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
        this.isLoading = false;
      });
  }

  onDelete(postId: string) {
    this.postsService.deletePost(postId);
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}***REMOVED***
***REMOVED***