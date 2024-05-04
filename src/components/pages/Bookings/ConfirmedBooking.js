import { useLocation } from "react-router-dom";

const ConfirmedBooking = () => {
  const location = useLocation();
  console.log(location);

  const formData = location.state.formData;
  return (
    <>
      <div className="bookings">
        <p>
          <h2>Your reservation has been confirmed.</h2>
        </p>

        <div
          className="container row pd my-3"
          style={{
            width: "60%",
            margin: "0 auto",
            background: "#F4CE14",
            borderRadius: "15px",
            textAlign: "left",
          }}
        >
          <h6>
            Dear {formData.name.firstName} {formData.name.lastName},
          </h6>
          <h6>
            Your table for party of {formData.numberOfGuests} is reserved for{" "}
            {formData.date} at {formData.time}.
          </h6>
          <h6>We will see you soon for the {formData.occasion} event!</h6>
        </div>
      </div>
    </>
  );
};

export default ConfirmedBooking;
