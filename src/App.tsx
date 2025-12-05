import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import AboutUS from "./pages/AboutUS";
import Pricepage from './pages/Pricepage';
import Blogpage from "./pages/Blogpage";
import Signup from "./pages/Signup";
import    BLogsingle from  "./pages/BLogsingle";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about-me" element={<About />} />
        <Route path="about-us" element={<AboutUS />} />
        <Route path="price" element={<Pricepage />} />
        <Route path="blog-grid" element={<Blogpage />} />
        <Route path="blog-single" element={<BLogsingle />} />
        <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<Signup />} />
      </Route>
    </Routes>
  );
}

export default App;
