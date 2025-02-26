import "./scss/preset.scss";
import "./scss/main-grid.scss";

import News from "./components/news"
import Posts from "./components/posts"
import Navbar from "./components/navbar";
import Hero from "./components/hero";

export default function App() {
  return (
    <main className="Main-grid">
      <Navbar />

      <Hero />

      <News />

      <div className="Main-grid__posts">
        <Posts />
      </div>

      {/* <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">Your Name Here</a>.
      </div> */}
    </main>
  )
}