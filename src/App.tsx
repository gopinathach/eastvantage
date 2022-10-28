import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import PeopleCard from "./comps/peopleCard/PeopleCard";

function App() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  var config = {
    method: "get",
    url: "https://randomuser.me/api",
  };

  async function getData() {
    var userData = await axios(config);
    console.log("userData", userData.data.results);
    setApiData(userData.data.results);
    localStorage.setItem("userData", JSON.stringify(apiData));
  }

  return (
    <div className="App d-flex justify-content-center align-items-center container">
      {apiData.map((curr: any, i) => (
        <div key={i.toString()}>
          <PeopleCard
            name={`${curr.name.title}. ${curr.name.first} ${curr.name.last}`}
            email={curr.email}
            age={`Age: ${curr.dob.age}`}
            department={curr.cell}
            phone={curr.phone}
            address={`${curr.location.city}, ${curr.location.country}.`}
            initial={
              curr.name.first && curr.name.last ? (
                curr.name.first.split("")[0] + curr.name.last.split("")[0]
              ) : (
                <i className="fas fa-user-alt"></i>
              )
            }
            imageUrl={curr.picture.large}
            getData={getData}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
