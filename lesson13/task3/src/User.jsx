import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getUser } from './userGateway';

const User = () => {
  const [userData, setUserData] = useState(null);
  const { userId } = useParams();

  const fetchUser = () => {
    getUser(userId).then(body => {
      setUserData(body);
    });
  };

  useEffect(() => {
    fetchUser(userId);
  }, [userId]);

  if (!userData) {
    return null;
  }

  const { avatar_url, location, name } = userData;

  return (
    <div className="user">
      <img alt="User Avatar" src={avatar_url} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{location}</span>
      </div>
    </div>
  );
};

// class User extends React.Component {
//   state = {
//     userData: null,
//   };

//   fetchUser = id => {
//     getUser(id).then(body => {
//       this.setState({
//         userData: body,
//       });
//     });
//   };

//   componentDidMount() {
//     const { userId } = this.props.match.params;
//     this.fetchUser(userId);
//   }

//   componentDidUpdate(prevProps) {
//     const prevProp = prevProps.match.params.userId;
//     const currentProp = this.props.match.params.userId;

//     if (prevProp !== currentProp) {
//       this.fetchUser(currentProp);
//     }
//   }

//   render() {
//     if (!this.state.userData) {
//       return null;
//     }

//     const { avatar_url, location, name } = this.state.userData;

//     return (
//       <div className="user">
//         <img alt="User Avatar" src={avatar_url} className="user__avatar" />
//         <div className="user__info">
//           <span className="user__name">{name}</span>
//           <span className="user__location">{location}</span>
//         </div>
//       </div>
//     );
//   }
// }

export default User;

// User.propTypes = {
//   match: PropTypes.object.isRequired,
// };
