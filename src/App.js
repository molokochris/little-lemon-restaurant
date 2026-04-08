import { Route, Routes } from "react-router-dom";
import "./App.css";
import BookingPage from "./components/BookingPage";
import HomePage from "./components/HomePage";
import Nav from "./components/Nav";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/booking" element={<BookingPage />}></Route>
      <Route
        path="/login"
        element={
          <>
            <Nav />
            <h1>Login Page</h1>
          </>
        }
      ></Route>
      <Route
        path="/menu"
        element={
          <>
            <Nav />
            <h1>Menu Page</h1>
          </>
        }
      ></Route>
      <Route
        path="/about"
        element={
          <>
            <Nav />
            <h1>About Page</h1>
          </>
        }
      ></Route>
      <Route
        path="/order-online"
        element={
          <>
            <Nav />
            <h1>Order Online Page</h1>
          </>
        }
      ></Route>
      <Route
        path="*"
        element={
          <>
            <Nav />
            <h1>404 Not Found</h1>
          </>
        }
      ></Route>
    </Routes>
  );
}

export default App;
