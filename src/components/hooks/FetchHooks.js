import React, { useState, useEffect } from "react";

const useFetch = url => {
  const [data, setData] = useState(null);

  async function fetchData() {
    const response = await fetch(url);
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
  const data = useFetch("https://api.github.com/orgs/lexiconna18/repos");

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
