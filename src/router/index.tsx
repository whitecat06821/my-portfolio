import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "../Pages/Layout";
import Home from "../Pages";
import About from "../Pages/About";
import ContactMe from "../Pages/ContactMe";
import Skills from "../Pages/Skills";
import Projects from "../Pages/Projects";
import NotFound from "../Pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* root layout */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contactme" element={<ContactMe />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </>
  )
);

export default router;
