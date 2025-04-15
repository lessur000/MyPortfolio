import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import { useState } from "react";
import SplashScreen from "../Components/ui/SplashScreen";

function App() {
  const [showSplash, setShowSplash] = useState(true);
  return (
    <>
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
