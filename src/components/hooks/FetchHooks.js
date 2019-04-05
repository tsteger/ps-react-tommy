import React, { useState, useEffect } from "react";
//---
const url =
  "http://connect.qa01.maklare.vitec.net/User/GetUser?UserId=CANVANDARE4AE1UTFRNK2CPKMS&CustomerId=S31412";
const username = "66";
const password =
  "YSVkjEuQa9LsCoD5UIcB7KOm0hHEQLSDy1O7d1mlFf9rN3KifXPRUNqD3hk2vgyE";
const headers = {
  headers: new Headers({
    Authorization: "Basic " + btoa("username:password")
  })
};

//---
const useFetch = url => {
  const [data, setData] = useState(null);

  async function fetchData() {
    const response = await fetch(url, headers);
    const json = await response.json();
    setData(json);
    console.log(json);
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return data;
};

function FetchHooks() {
  const data = useFetch(url);

  if (!data) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        <li>{data.id}</li>
        <li>{data.title}</li>
      </ul>
    );
  }
}

export default FetchHooks;
