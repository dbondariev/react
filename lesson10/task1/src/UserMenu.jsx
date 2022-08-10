import React from 'react';

const UserMenu = ({ userData }) => {
  if (!userData) {
    return null;
  }

  const { name, avatarUrl } = userData;
  return (
    <div className="menu">
      <span className="menu__greeting">{`Hello, ${name}`}</span>
      <img className="menu__avatar" src={avatarUrl} alt="User Avatar" />
    </div>
  );
};

export default UserMenu;
