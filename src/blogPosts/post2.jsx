import PostComp from "../components/PostComp";
import { posts } from "../constants/posts";

const PostTwo = () => {
  return (
    <PostComp
      title={posts[1].title}
      author={posts[1].author}
      date={posts[1].date}
      summary={posts[1].summary}
      paragraph={posts[1].paragraphs}
    />
  );
};

export default PostTwo;
