import Footer from "./Footer";
import Nav from "./Nav";

const BookingPage = () => {
  return (
    <div className="layout-container">
      <Nav />
      <main className="col-span-12">
        <section id="reservation-section">
          <div className="reservation-card">
            <h1>Reserve a Table</h1>
            <p className="reservation-subtitle">
              Book your spot at Little Lemon — we'll see you soon.
            </p>

            <form id="reservation-form" className="form-grid">
              <div className="form-group">
                <label for="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label for="date">Date</label>
                <input type="date" id="date" name="date" required />
              </div>

              <div className="form-group">
                <label for="time">Time</label>
                <input type="time" id="time" name="time" required />
              </div>

              <div className="form-group form-group--full">
                <label for="guests">Number of Guests</label>
                <input
                  type="number"
                  id="guests"
                  name="guests"
                  min="1"
                  max="20"
                  placeholder="1–20"
                  required
                />
              </div>

              <div className="form-group form-group--full">
                <button type="submit" className="button button--submit">
                  Submit Reservation
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BookingPage;
