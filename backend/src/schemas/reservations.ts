const reservation = `
type Reservation {
    id: ID! 
    attendee: Attendee!
    meeting: Meeting!
    timeSlot: String!
  }
`;

export { reservation as reservation };