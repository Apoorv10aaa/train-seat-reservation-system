export default function findSeats(
  trainSeats,
  setTrainSeats,
  seatCount,
  availableSeats,
  setAvailableSeats
) {
  let seatArray = [...trainSeats];
  let bookedSeats = [];
  let cnt = 0;

  // Step0 - check if seat required are available or not
  if (seatCount > availableSeats) {
    alert("Not enough seats available");
    return null;
  }

  // Step1 - traverse the whole array to see if we can book given seats in a single row.
  for (let i = 0; i < seatArray.length; i++) {
    for (let j = 0; j < seatArray[i].length; j++) {
      let seat = seatArray[i][j];
      if (seat === 0) {
        bookedSeats[cnt] = String.fromCharCode("A".charCodeAt(0) + i) + j;
        cnt++;
      }
      if (cnt >= seatCount) break;
    }
    if (cnt >= seatCount) {
      break;
    } else {
      cnt = 0;
      bookedSeats = [];
    }
  }
  // if cnt is greater than seatCount means all seats have been booked, we can return and mark the seats
  // mark the booked seats
  if (cnt >= seatCount) {
    bookedSeats.forEach((seat) => {
      let rowNo = seat[0].charCodeAt(0) - "A".charCodeAt(0);
      let seatNo = parseInt(seat[1]);
      seatArray[rowNo][seatNo] = 2;
    });
    setTrainSeats(seatArray);
    setAvailableSeats((prev) => prev - seatCount);
    return bookedSeats;
  }
  // if not returned meaning we cannot book seats in a single row so next step-
  // Step2 - book seats as near as possible;
  cnt = 0;
  let tempBooked = [];
  let minDistance = 11;
  let dist = 0;
  for (let i = 0; i < seatArray.length; i++) {
    // starting row i
    dist = 0;
    cnt = 0;
    tempBooked = [];
    // starting from row i book all seats
    for (let strtRow = i; strtRow < seatArray.length; strtRow++) {
      dist++;
      for (let j = 0; j < seatArray[strtRow].length; j++) {
        let seat = seatArray[strtRow][j];
        if (seat === 0) {
          tempBooked[cnt] =
            String.fromCharCode("A".charCodeAt(0) + strtRow) + j;
          cnt++;
        }
        if (cnt >= seatCount) break;
      }
      if (cnt >= seatCount) break;
    }
    // choose the answer which books the seats as near as possible
    if (dist < minDistance && cnt >= seatCount) {
      bookedSeats = [...tempBooked];
      minDistance = dist;
    }
  }
  // mark the booked seats
  bookedSeats.forEach((seat) => {
    let rowNo = seat[0].charCodeAt(0) - "A".charCodeAt(0);
    let seatNo = parseInt(seat[1]);
    seatArray[rowNo][seatNo] = 2;
  });
  setTrainSeats(seatArray);
  setAvailableSeats((prev) => prev - seatCount);
  return bookedSeats;
}
