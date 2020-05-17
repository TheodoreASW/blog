import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component<{ userId: String; fetchUser: (id: String) => {}; user: any }> {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render() {
    const { user } = this.props;
    if (!user) {
      return null;
    }
    return <div className="header">{user.name}</div>;
  }
}
const mapStateToProps = (state: any, ownProps: any) => {
  const user = state.users.find((user: any) => user.id === ownProps.userId);

  return { user };
};
export default connect(mapStateToProps, { fetchUser })(UserHeader);
