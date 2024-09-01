import {useState, useEffect} from "react";

function VisitorIp() {
  const [ipAddress, setIpAddress] = useState('0.0.0.0');

  useEffect(() => {
    fetch('https://api64.ipify.org?format=json')
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        setIpAddress('I see you are coming from IP address ' + data.ip + '.');
      })
      .catch((err) => {
        console.log(err.message);
        setIpAddress('I\'m merribly sorry. There was an error retrieving your IP address.');
      });
  }, []);

  return (
    <span className="visitorip">{ipAddress}</span>
  );
}

export default VisitorIp;