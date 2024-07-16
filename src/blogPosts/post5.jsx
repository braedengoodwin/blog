import PostComp from "../components/PostComp";
import { posts } from "../constants/posts";

const PostFive = () => {
  return (
    <PostComp
      title={posts[4].title}
      author={posts[4].author}
      date={posts[4].date}
      summary={posts[4].summary}
      paragraph={posts[4].paragraphs}
    />
  );
};

export default PostFive;
