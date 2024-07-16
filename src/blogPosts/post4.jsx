import PostComp from "../components/PostComp";
import { posts } from "../constants/posts";

const PostFour = () => {
  return (
    <PostComp
      title={posts[3].title}
      author={posts[3].author}
      date={posts[3].date}
      summary={posts[3].summary}
      paragraph={posts[3].paragraphs}
    />
  );
};

export default PostFour;
