export function fetchOffices() {
  // Where we're fetching data from

  let url = "http://eu.httpbin.org/basic-auth/user/passwd";
  let username = "66";
  let password =
    "YSVkjEuQa9LsCoD5UIcB7KOm0hHEQLSDy1O7d1mlFf9rN3KifXPRUNqD3hk2vgyE";

  let headers = new Headers();
  headers.set(
    "Authorization",
    "Basic " + Buffer.from(username + ":" + password).toString("base64")
  );
  var users;
  fetch(
    `http://connect.qa01.maklare.vitec.net/User/GetUser?UserId=CANVANDARE4AE1UTFRNK2CPKMS&CustomerId=S31412`,
    {
      method: "GET",
      mode: "no-cors",
      headers: {
        headers,
        "Access-Control-Allow-Origin": "*"
      }
    }
  )
    // We get the API response and receive data in JSON format...
    .then(response => response.json())
    // ...then we update the users state
    .then(responseJson => {
      console.log(responseJson);
    })
    // Catch any errors we hit and update the app
    .catch(error => error.users);
}
