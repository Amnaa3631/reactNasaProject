import React, { useEffect, useState } from "react";
import APOD from "./Nasa/APOD";
import Sorry from "./Nasa/Sorry";

/*
 name: str it is name of user
 */
// function App() {
//   const [data, setData] = useState();

//   useEffect(() => {
//     // call your API
//     (async () => {
//       let response = await fetch(
//         "https://api.nasa.gov/planetary/apod?api_key=qSXNaJsdruq6nHTmBfLGLSXa1Ecxpo4fC9UyR3Gw"
//       );
//       let data = await response.json();
//       console.log(data);
//       setData(data);
//     })();
//   }, []);

//   if (data && Object.keys(data).length > 0) {
//     return <APOD {...data} />;
//   }

//   return (
//     <div className="App">
//       <Sorry />
//     </div>
//   );
// }
function App() {
  const [data, setData] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    // call your API
    (async () => {
      try {
        let response = await fetch(
          "https://api.nasa.gov/planetary/apod?api_key=qSXNaJsdruq6nHTmBfLGLSXa1Ecxpo4fC9UyR3Gw"
        );
        let data = await response.json();
        console.log(data);
        setData(data);
      } catch (error) {
        console.error(error);
        setError(true);
      }
    })();
  }, []);

  if (error) {
    return (
      <div className="App">
        <Sorry />
      </div>
    );
  }

  if (data && Object.keys(data).length > 0) {
    return <APOD {...data} />;
  }

  return null;
}


export default App;
