let lat, long;

if (true) {
//   console.log("geolocation present");
//   navigator.geolocation.getCurrentPosition((position) => {
//     lat = position.coords.latitude;
//     long = position.coords.longitude;
//     console.log(lat);
//     console.log(long);
//     const mydata = { lat, long };
    // const options = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(mydata),
    // };
    const resource_url = `https://fierce-crag-87115.herokuapp.com/location/29.1393,76.6945`;
    // const myRequest = new Request(resource_url);
    const myList = document.querySelector("ul");

    fetch(resource_url)
      .then((response) => response.json())
      .then((mydata) => {
        console.log(mydata);
        // document.getElementById("name").innerHTML =
        //   "Name: " + mydata["Health Facility Name"];
        // document.getElementById("address").innerHTML =
        //   "Address: " + mydata.Address;
        // document.getElementById("street").innerHTML =
        //   "Street: " + mydata.street;
        // document.getElementById("locality").innerHTML =
        //   "Locality: " + mydata.locality;
        // document.getElementById("pincode").innerHTML =
        //   "Pincode: " + mydata.pincode.split(".")[0];
        // document.getElementById("landline").innerHTML =
        //   "Landline: " + mydata.landline_number;
        // document.getElementById("type").innerHTML =
        //   "Type: " + mydata["Facility Type"];
        // document.getElementById("state").innerHTML =
        //   "State: " + mydata.State_Name;
      })
      .catch((error) =>
        console.log(
          error
        )
      );
}
