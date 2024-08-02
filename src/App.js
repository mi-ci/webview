import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    // Expose a function to JavaScript interface
    window.myApp = {
      showAlert: (message) => alert(message),
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to React</h1>
        <button onClick={() => window.myApp.showAlert("Hello from React!")}>
          Show Alert
        </button>
      </header>
    </div>
  );
}

export default App;
