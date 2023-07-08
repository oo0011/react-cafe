import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "./fbase";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Detail from "./pages/Deatil";
import {
  neighborhoodCafes,
  popularCafes,
  quietCafes,
} from "./components/Cafes";

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

  console.log(user);

  return (
    <div>
      <Router>
        {user && <Navigation user={user} />}
        <Routes>
          {isLoggedIn ? (
            <Route path="/" element={<Home user={user} />} />
          ) : (
            <Route path="/" element={<Auth />} />
          )}
          <Route
            path="/detail/:id"
            element={
              <Detail
                neighborhoodCafes={neighborhoodCafes}
                popularCafes={popularCafes}
                quietCafes={quietCafes}
              />
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
