import Header from "./components/Header";
import PrincipalSection from "./components/PrincipalSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PhotosCarrousel from "./components/PhotosCarrousel";

function App() {
  return (
    <div>
      <div class="divide-y text-sky-900 md:divide-y-1">
        <Header />
        <PrincipalSection />
      </div>
      <Contact />
      <PhotosCarrousel />
      <Footer />
    </div>
  );
}

export default App;
