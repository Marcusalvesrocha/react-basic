import P from 'prop-types';
import { PostCard } from '../PostCard/';
import './styles.css';

export const Posts = ({ posts = [] }) => (
  //console.log(`export const Posts ${posts[0]}`)
  <div className="posts">
    {!!posts.length >= 1 &&
      posts.map((post) => (
        <PostCard key={post.id} id={post.id} title={post.title} body={post.body} cover={post.cover} />
      ))}
  </div>
);

/* Posts.defaultProps = {
  posts: [],
}; */

Posts.propTypes = {
  posts: P.arrayOf(
    P.shape({
      id: P.number.isRequired,
      title: P.string.isRequired,
      body: P.string.isRequired,
      cover: P.string.isRequired,
    }),
  ),
};
