import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");

  // use this function for hold the parameter that come from function called and send it to use state of name
  const handleChange = (e) => {
    setName(e.target.value);
    // catch value of field
  };

  return (
    <div>

      <form>
        <label>
          Enter your name : 
          <input
            // this is input type ex.radio,select
            type="text"
            // hold the value of input field in name
            value={name}
            // on live change on input field this function is called
            onChange={handleChange} />
        </label>
      </form>

      <h1> Hello ,{name}! </h1>

    </div>
  );
}

export default App;
