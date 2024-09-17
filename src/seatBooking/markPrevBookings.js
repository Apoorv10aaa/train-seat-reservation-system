export default function markPrevBookings(
  bookedSeats,
  trainSeats,
  setTrainSeats
) {
  let seatArray = [...trainSeats];
  if (bookedSeats !== null) {
    bookedSeats.forEach((seat) => {
      let rowNo = seat[0].charCodeAt(0) - "A".charCodeAt(0);
      let seatNo = parseInt(seat[1]);
      seatArray[rowNo][seatNo] = 1;
    });
    setTrainSeats(seatArray);
  }
  return;
}
