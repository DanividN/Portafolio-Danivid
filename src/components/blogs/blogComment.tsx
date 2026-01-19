import CommentForm from "./commentForm";

interface Comment {
  id: number;
  author: string;
  img: string;
  text: string;
  replies?: Comment[];
}

const comments: Comment[] = [
  {
    id: 1,
    author: "Monsur Rahman Lito",
    img: "/images/blog-details/c-user1.png",
    text: "Phasellus ac consequat turpis, sit amet fermentum nulla. Donec dignissi augue nunc. Praesent bibendum erat ac lectus molestie lobortis. Curabi ultrices justo ac leo facilisis tincidunt Maecenas et dui.",
    replies: [
      {
        id: 2,
        author: "Monsur Rahman Lito",
        img: "/images/blog-details/c-user2.png",
        text: "Phasellus ac consequat turpis, sit amet fermentum nulla. Donec dignissi augue nunc. Praesent bibendum erat ac lectus molestie lobortis. Curabi ultrices justo ac leo facilisis tincidunt Maecenas et dui.",
      },
    ],
  },
];

const CommentList = ({ items }: { items: Comment[] }) => {
  return (
    <ul>
      {items.map((comment) => (
        <li key={comment.id} className="single-comment">
          <div className="thum">
            <img width={70} height={70} src={comment.img} alt="thumb" />
          </div>
          <div className="content">
            <h4>{comment.author}</h4>
            <p>{comment.text}</p>
          </div>

          {/* Nested Replies */}
          {comment.replies && comment.replies.length > 0 && (
            <ul className="comment-reply">
              <CommentList items={comment.replies} />
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

const BlogComment = () => {
  return (
    <div className="comment-section-full">
      <div className="cooment-s-header mb-30">
        <h5 className="title">02 Comments</h5>
        <p className="p-content">
          Nunc velit metus, volutpat elementum euismod eget, cursus nec nunc.
        </p>
      </div>
      {/* Comment List */}
      <CommentList items={comments} />
      <div className="cooment-s-header mt-40 mb-30">
        <h5 className="title">Post Comments</h5>
        <p className="p-content">
          Nunc velit metus, volutpat elementum euismod eget, cursus nec nunc.
        </p>
      </div>
      {/* Comment Form */}
      <CommentForm />
    </div>
  );
};

export default BlogComment;
