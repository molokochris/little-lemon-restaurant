import CallToAction from "./CallToAction";
import Chicago from "./Chicago";
import CustomersSay from "./CustomersSay";
import Footer from "./Footer";
import Nav from "./Nav";
import Specials from "./Specials";

const HomePage = () => {
  return (
    <div className="layout-container">
      <Nav />
      <main className="col-span-12">
        <CallToAction />
        <Specials />
        <CustomersSay />
        <Chicago />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
