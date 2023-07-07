import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "./fbase";
import Auth from "./pages/Auth";
import Home from "./pages/Home";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        setUser(user);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);

  return (
    <div>
      <Router>
        <Routes>
          {isLoggedIn ? (
            <Route path="/home" element={<Home user={user} />} />
          ) : (
            <Route path="/" element={<Auth />} />
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
