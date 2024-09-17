import { useState } from "react";
import findSeats from "../seatBooking/bookingAlgo";
import seats from "../seatBooking/seats";

function SeatDisplay() {
  // assuming some seats are already filled.
  const [availableSeats, setAvailableSeats] = useState(52);

  // making states for train seats array, seatCount and bookedSeats
  const [trainSeats, setTrainSeats] = useState(seats);
  const [booking, setBooking] = useState(false);
  const [seatCount, setSeatCount] = useState(0);
  const [bookedSeats, setBookedSeats] = useState(null);

  // main booking function
  const bookSeats = (e) => {
    e.preventDefault();
    const seatsBooked = findSeats(
      trainSeats,
      setTrainSeats,
      seatCount,
      availableSeats,
      setAvailableSeats
    );
    setBookedSeats(seatsBooked);
    setBooking(false);
  };

  return (
    <div className="m-4">
      <div className="seats flex flex-col justify-center items-center my-2">
        {trainSeats.map((row, index) => (
          <div key={index} className="flex items-center space-x-2">
            <span className="text-xl h-5 w-5">
              {String.fromCharCode("A".charCodeAt(0) + index)}
            </span>
            {row.map((seat, seatIndex) => (
              <div
                key={seatIndex}
                className="seat"
                style={{
                  backgroundColor:
                    seat === 1 ? "gray" : seat === 2 ? "green" : "white",
                  width: "20px",
                  height: "20px",
                  border: "1px solid black",
                  display: "inline-block",
                  margin: "2px",
                }}
              ></div>
            ))}
          </div>
        ))}
      </div>
      <div className="bookbutton my-2 flex flex-col items-center space-y-4">
        <p>Total Available Seats - {availableSeats}</p>

        {bookedSeats && (
          <div>
            {bookedSeats.map((seat, index) => (
              <span key={index} className="text-green-700 font-bold">
                {seat + " "}
              </span>
            ))}
          </div>
        )}

        {!booking && (
          <button
            onClick={() => setBooking(true)}
            className="border-2 rounded-md px-2"
          >
            Book Tickets
          </button>
        )}

        {booking && (
          <form onSubmit={bookSeats}>
            <input
              type="number"
              placeholder="Input No. Of Seats"
              max={7}
              className="p-2 border-2 rounded-md"
              onChange={(e) => setSeatCount(e.target.value)}
            />
          </form>
        )}
      </div>
    </div>
  );
}
export default SeatDisplay;
