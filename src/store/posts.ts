import { makeAutoObservable, runInAction } from "mobx";

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
class Posts {
  posts: IPost[] = [];
  comments: IComment[] = [];
  constructor() {
    makeAutoObservable(this);
  }

  fetchPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => {
        runInAction(() => {
          this.posts = [...posts];
        });
      });
  }

  fetchComments(postId: number) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => response.json())
      .then((comments) => {
        runInAction(() => {
          this.comments = [...comments];
        });
      });
  }
}

export default new Posts();
