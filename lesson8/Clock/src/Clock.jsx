import React from 'react';
import moment from 'moment';

const formatDate = date => moment(date).format('LTS');

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: formatDate(getTimeWithOffset(this.props.offset)),
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        time: formatDate(getTimeWithOffset(this.props.offset)),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <>
        <div className="clock">
          <div className="clock__location">{this.props.location}</div>
          <div className="clock__time">{this.state.time}</div>
        </div>
      </>
    );
  }
}
