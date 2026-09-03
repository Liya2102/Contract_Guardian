import { useEffect, useState } from "react";
import API from "../services/api";

function Dashboard() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    API.get("/")
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Contract Guardian Dashboard</h1>
      <p>{message}</p>
    </div>
  );
}

export default Dashboard;