import { useLocation, Link } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

const ConfirmedBooking = () => {
  const { state } = useLocation();
  const details = state?.reservationDetails;

  return (
    <>
      <title>Little Lemon - Booking Confirmed</title>
      <div className="layout-container">
        <Nav />
        <main className="col-span-12">
          <section id="reservation-section">
            <div className="reservation-card" style={{ textAlign: "center", padding: "4rem 2rem", backgroundColor: "#EDEFEE", borderRadius: "16px", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)" }}>
              <h1 style={{ color: "#495e57", marginBottom: "1rem" }}>Booking Confirmed!</h1>
              <p className="reservation-subtitle" style={{ marginBottom: "2rem" }}>
                Thank you for choosing Little Lemon. Your reservation has been successfully placed. We look forward to seeing you.
              </p>
              
              {details && (
                <div style={{ backgroundColor: "#fff", padding: "2rem", borderRadius: "16px", textAlign: "left", margin: "0 auto 2.5rem auto", display: "inline-block", minWidth: "300px", border: "1px solid #ccc" }}>
                  <h3 style={{ marginBottom: "1.5rem", color: "#333", borderBottom: "2px solid #F4CE14", paddingBottom: "0.5rem" }}>Reservation Details</h3>
                  <p style={{ margin: "0.75rem 0", fontSize: "1.1rem" }}><strong>Date:</strong> {details.date}</p>
                  <p style={{ margin: "0.75rem 0", fontSize: "1.1rem" }}><strong>Time:</strong> {details.time}</p>
                  <p style={{ margin: "0.75rem 0", fontSize: "1.1rem" }}><strong>Guests:</strong> {details.guests}</p>
                  <p style={{ margin: "0.75rem 0", fontSize: "1.1rem" }}><strong>Occasion:</strong> {details.occasion}</p>
                </div>
              )}
              
              <div>
                <Link to="/" className="button" style={{ display: "inline-block" }}>
                  Return to Home
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ConfirmedBooking;
