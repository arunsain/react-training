import Policy from "./Components/CustomPage/Policy";
import Footer from "./Components/Footer/Footer";
import Form from "./Components/Form/Form";
import Navbar from "./Components/Navbar/Navbar";
import Contact from "./Components/CustomPage/Contact";
import Faq from "./Components/CustomPage/Faq";
import About from "./Components/CustomPage/About";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataCard from "./Components/DataCard/DataCard";
import PostData from "./Components/PostData/PostData";
import ImagePost from "./Components/ImagePost/ImagePost";
import UseStatePractice from "./Components/UseStatePractice";
import PropsPractice from "./Components/PropsPractice/PropsPractice";
import UseEffectHook from "./Components/HookPractise/UseEffectHook";

function App() {
  return (
    <div>
      <BrowserRouter basename="/">
        <Routes>
          <Route index path="/" element={<About />}></Route>
          <Route exact path="/policy" element={<Policy />}></Route>
          <Route exact path="/form" element={<Form />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/photos" element={<DataCard />}></Route>
          <Route exact path="/posts" element={<PostData />}></Route>
          <Route exact path="/faq" element={<Faq />}></Route>
          <Route exact path="/post-images" element={<ImagePost />}></Route>
          <Route exact path="/use-state" element={<UseStatePractice />}></Route>
          <Route
            exact
            path="/props-practice"
            element={<PropsPractice />}
          ></Route>
          <Route exact path="/use-effect" element={<UseEffectHook />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
