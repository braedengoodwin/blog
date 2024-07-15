import PostComp from "../components/PostComp";
import { posts } from "../constants/posts";

const PostThree = () => {
  return (
    <PostComp
      title={posts[2].title}
      author={posts[2].author}
      date={posts[2].date}
      summary={posts[2].summary}
      paragraph={posts[2].paragraphs}
    />
  );
};

export default PostThree;
