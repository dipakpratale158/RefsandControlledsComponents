import { useState } from "react";
import Adduser from "./component/adduser/Adduser";
import Userlist from "./component/adduser/Userlist";
import Card from "./component/ui/Card";
import "./styles.css";

function App() {
  const [userlist, setuserlist] = useState([]);
  const handlesubmit = (uname, uage, ucollegename) => {
    setuserlist((prev) => {
      return [
        ...prev,
        {
          name: uname,
          age: uage,
          collegename: ucollegename,
          id: Math.random().toString()
        }
      ];
    });
  };

  return (
    <div>
      <Adduser handlesubnmit={handlesubmit} />
      <Userlist users={userlist} />
    </div>
  );
}
export default App;
