import React from 'react';

class UserProfile extends React.Component {
  render() {
    if (!this.props.userData) {
      return null;
    }

    const { name, location, vatarUrl } = this.props.userData;

    return (
      <div className="user">
        <img className="user__avatar" src={vatarUrl} alt="User Avatar" />
        <div className="user__info">
          <span className="user__name">{name}</span>
          <span className="user__location">{location}</span>
        </div>
      </div>
    );
  }
}

export default UserProfile;
