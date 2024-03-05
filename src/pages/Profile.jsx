import { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";

function Profile() {
  const [user, setUser] = useState(null);
  const auth = getAuth();
  
  useEffect(() => {
    setUser(auth.currentUser);
  }, []);

  return <h1>Welcome, {user ? user.displayName : "Not Logged in"}</h1>;
}

export default Profile;
