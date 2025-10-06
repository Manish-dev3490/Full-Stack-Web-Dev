import Header from "./Header";
import Body from "./Body";
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import Cart from "./Cart";
import NotFound from "./NotFound";
import Detail from "./Detail";
import Footer from "./Footer";
import Contact from "./Contact";
import { Suspense, lazy } from "react";

const About = lazy(() => import("./About")); // ✅ fixed

// App Component
const App = () => {
  return (
    <div className="App-Comp">
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/Detail/:id" element={<Detail />} />
      <Route
        path="/About"
        element={
          <Suspense fallback={<h2>Loading...</h2>}>
            <About />
          </Suspense>
        }
      />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Cart" element={<Cart />} />
    </Routes>
  </BrowserRouter>
);

export default App;
