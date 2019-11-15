import React, {useState,useEffect} from "react";
import axios from "axios";
import "./App.css";
import CreatePhoto from "./Components/photoComponent";

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=fzliRPzGtv8laLOSxUmx3BaFza3Hdc6nhogBMxba")
    .then( (response)=> {
      //Handle sucess
      console.log(response.data);
      setData(response.data);

    })
    .catch(function (error) {
     // handle error
      console.log(error);
    });

  }, []);
  console.log(data);
  return (
    <div className="App">
     <h1>Nasa's Image of the Day</h1>
      <p>Created by Josiah Williams</p>
      { data && <CreatePhoto obj={data} /> }
    </div>
  );
}

export default App;
