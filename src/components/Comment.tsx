import { IComment } from "../store/posts";

interface CommentProps {
  comment: IComment;
}

export const Comment = ({ comment }: CommentProps) => {
  return (
    <div className="wrapper">
      <p>
        <strong>
          Post {comment.postId} / Comment {comment.id}
        </strong>
      </p>
      <p>
        <strong>Comment by: </strong>
        {comment.email}
      </p>
      <p>
        <strong>Comment Content: </strong>
        {comment.body}
      </p>
    </div>
  );
};
