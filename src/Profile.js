import { useState } from "react";

function Profile() {
  // const [loggedIn,setLoggedIn]=useState(false)
  const [loggedIn, setLoggedIn] = useState(1);

  // if(loggedIn)
  // {
  //     return(
  //         <div>
  //             <h1>Welcome Naqash</h1>
  //         </div>
  //     )
  // }
  // else
  // {
  //     return(
  //         <div>
  //             <h1>Welcome Guest</h1>
  //         </div>
  //     )
  // }

  // return(
  //     <div>
  //         {loggedIn?<h1>Welcome Naqash</h1>:<h1>Welcome Guest</h1>}
  //     </div>
  // )

  return (
    <div>
      {loggedIn == 1 ? (
        <h1>Welcome User 1</h1>
      ) : loggedIn == 2 ? (
        <h2>Welcome User 2</h2>
      ) : (
        <h2>Welcome User 3</h2>
      )}
    </div>
  );
}

export default Profile;
