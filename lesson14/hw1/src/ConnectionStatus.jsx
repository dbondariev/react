import React, { useEffect, useState } from "react";

const ConnectionStatus = () => {
  const [networkStatus, setNetworkStatus] = useState(true);

  useEffect(() => {
    const handleStatus = e => {
      const networkStatus = e.target.navigator.onLine;
      return setNetworkStatus(networkStatus);
    };

    window.addEventListener("offline", handleStatus);
    window.addEventListener("online", handleStatus);

    return () => {
      window.removeEventListener("offline", handleStatus);
      window.removeEventListener("online", handleStatus);
    };
  }, []);

  return networkStatus ? (
    <div className="status">online</div>
  ) : (
    <div className="status status_offline">offline</div>
  );
};

export default ConnectionStatus;
