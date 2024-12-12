import "./App.css";

function App() {
  const apiUrl = process.env.REACT_APP_API_URL;

  console.log("API URL:", apiUrl);

  return (
    <div className="App">
      <h1>{apiUrl}</h1>
    </div>
  );
}

export default App;
