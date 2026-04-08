import CallToAction from "./CallToAction";
import Chicago from "./Chicago";
import CustomersSay from "./CustomersSay";
import Footer from "./Footer";
import Nav from "./Nav";
import Specials from "./Specials";

const HomePage = () => {
  return (
    <>
      <Nav />
      <main className="col-span-12">
        <CallToAction />
        <Specials />
        <CustomersSay />
        <Chicago />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
