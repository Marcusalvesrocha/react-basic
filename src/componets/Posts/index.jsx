import { PostCard } from '../PostCard/';
import "./styles.css";

export const Posts = ({posts}) => (
  //console.log(`export const Posts ${posts[0]}`)
  <div className="posts">
    {posts.map(post => (
      <PostCard
        key={post.id}
        id={post.id}
        title={post.title}
        body={post.body}
        cover={post.cover}
      />
    ))}
  </div>
)
