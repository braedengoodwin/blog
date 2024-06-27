import PostComp from "../components/PostComp";
import { posts } from "../constants/posts";

const PostOne = () => {
  return (
    <PostComp
      title={posts[0].title}
      author={posts[0].author}
      date={posts[0].date}
      summary={posts[0].summary}
      paragraph={posts[0].paragraphs}
    />
  );
};

export default PostOne;
