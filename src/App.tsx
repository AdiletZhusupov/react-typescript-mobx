import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import posts from "./store/posts";
import { Post } from "./components/Post";
import { Comment } from "./components/Comment";
import "./styles.css";

export const App = observer(() => {
  useEffect(() => {
    posts.fetchPosts();
  }, []);

  return (
    <div className="App">
      <div className="news-feed">
        <h3 className="head">News Feed</h3>
        <div className="posts">
          {posts.posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </div>
      </div>
      <div className="post-comments">
        <h3 className="head">Post Comments</h3>
        {posts.comments.map((comment) => {
          return <Comment key={comment.id} comment={comment} />;
        })}
      </div>
    </div>
  );
});
