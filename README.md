# Train Reservation System
<h3>Live Demo</h3>
https://train-seats-reservation.netlify.app/
<h3>Summary of Algorithm</h3>
<ol>
  <li>
    <strong>Input Validation:</strong>
    <ul>
      <li>Check if the requested number of seats (<code>seatCount</code>) is greater than the available seats (<code>availableSeats</code>).</li>
      <li>If true, return early and display an error message.</li>
    </ul>
  </li>

  <li>
    <strong>Single Row Booking:</strong>
    <ul>
      <li>Traverse each row to find consecutive available seats (<code>0</code>s) in a single row.</li>
      <li>If enough seats are found in a row, the seats are marked as booked (<code>2</code>), and the list of booked seats is returned.</li>
      <li>If no single row can accommodate the requested seats, the algorithm proceeds to the multi-row booking step.</li>
    </ul>
  </li>

  <li>
    <strong>Multi-row Booking:</strong>
    <ul>
      <li>The algorithm iterates over possible starting rows, attempting to book seats across multiple rows while minimizing the row distance.</li>
      <li>For each potential starting row, it tries to book seats and tracks the distance between the first and last row with booked seats.</li>
      <li>After evaluating all starting rows, the combination with the smallest row distance is selected.</li>
      <li>The chosen seats are marked as booked, and the list of booked seats is returned.</li>
    </ul>
  </li>

  <li>
    <strong>Return and Update:</strong>
    <ul>
      <li>After the booking is complete (whether in a single row or across rows), the list of booked seats is returned and the seat array (<code>trainSeats</code>) is updated.</li>
      <li>The total number of available seats is decremented by the number of booked seats.</li>
    </ul>
  </li>
</ol>

<h3>Key Features of the Algorithm:</h3>
<ul>
  <li><strong>Greedy Approach:</strong> The algorithm first attempts to book seats in a single row, and if unsuccessful, shifts to booking across rows.</li>
  <li><strong>Efficient Search:</strong> The search through rows and seats is done efficiently to minimize the number of iterations.</li>
  <li><strong>Distance Minimization:</strong> If booking across rows is necessary, the algorithm minimizes the row distance for user comfort.</li>
</ul>

<h3>Data Structures Used:</h3>
<ol>
  <li>
    <strong>2D Array (<code>trainSeats</code>):</strong>
    <p>The train seat layout is represented by a 2D array where each element represents a seat in a specific row:</p>
    <ul>
      <li><strong>0:</strong> Available seat.</li>
      <li><strong>1:</strong> Already booked seat.</li>
      <li><strong>2:</strong> Seat booked by the current user.</li>
    </ul>
  </li>

  <li>
    <strong>Array (<code>bookedSeats</code>):</strong>
    <p>An array that stores the seats booked by the current user. Each entry is a string representing the seat’s row and column (e.g., "A1", "B3").</p>
    <p>This array is dynamically updated during the booking process.</p>
  </li>
</ol>
