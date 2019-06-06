const attendee = `
type Attendee {
    id: ID! 
    name: String!
    email: String!
    reservations: [Reservation!]!
  }
`

export { attendee as attendee };