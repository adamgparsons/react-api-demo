import React, { useState, useEffect } from "react";
import Contacts from "./components/contacts";

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // make a get request to the endpoint
    fetch("http://jsonplaceholder.typicode.com/users")
      // ".then" returns a promises
      //parse the output to a JSON
      .then(res => res.json())
      .then(data => {
        // seys a value of the contacts state to the output of the API
        setContacts(data);
      })
      // if there are any errors they are logged to the console
      .catch(console.log);
  }, []);

  console.log("contacts:", contacts);

  return (
    <div>
      <Contacts contacts={contacts} />
    </div>
  );
}

export default App;
