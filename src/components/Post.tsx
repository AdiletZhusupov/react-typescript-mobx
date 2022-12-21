import { IPost } from "../store/posts";
import posts from "../store/posts";

interface PostProps {
  post: IPost;
}

export const Post = ({ post }: PostProps) => {
  const handleClick = (id: number) => {
    posts.fetchComments(id);
  };
  return (
    <div className="wrapper">
      <p>
        <strong>
          User {post.userId} / Post {post.id}
        </strong>
      </p>
      <p>
        <strong>Post Title: </strong>
        {post.title}
      </p>
      <p>
        <strong>Post Content: </strong>
        {post.body}
      </p>
      <button onClick={() => handleClick(post.id)} className="btn">
        Comments
      </button>
    </div>
  );
};
