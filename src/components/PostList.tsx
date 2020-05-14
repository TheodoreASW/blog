import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
interface IPostListProps {
  fetchPosts: () => {};
}
class PostList extends React.Component<IPostListProps> {
  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    return <div>Post list!</div>;
  }
}

export default connect(null, { fetchPosts })(PostList);
