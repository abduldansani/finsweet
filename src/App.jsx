import { Route, Router, Routes } from "react-router";
import Layout from "./components/Layout";
import Home from "./components/Home/Home";
import About from "./components/about/About";
import Pricing from "./components/pricing/Pricing";
import Features from "./components/features/Features";
import Portfolio from "./components/projects/Portfolio";
import ReadStudy from "./components/caseStudy/ReadStudy";
import Blog from "./components/blog/Blog";
import BlogRead from "./components/blogRead/BlogRead";
import ContactUs from "./components/contact/ContactUs";
import PrivacyPolicy from "./components/policy/PrivacyPolicy";
import Faq from "./components/Home/Faq";
import ScrollToTop from "./components/ScrollToTop";
import ViewProject from "./components/projects/ViewProject";
import BlogNotFound from "./components/blogRead/BlogNotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="features" element={<Features />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="blog" element={<Blog />} />
        <Route path="faq" element={<Faq />} />

        <Route path="projects" element={<Portfolio />} />
        <Route path="project" element={<ReadStudy />} />
        <Route path="readblog" element={<BlogRead />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="privacypolicy" element={<PrivacyPolicy />} />
        <Route path="projects/:id" element={<ViewProject />} />
        <Route path="blog/:id" element={<BlogNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
