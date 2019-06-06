const staff = `
type Staff {
    id: ID!
    name: String!
    emailAddress: String
    meetings: [Meeting!]!
    password: String!
    phoneNumber: String!
    reservations: [Reservation!]!
}
`;

export { staff as staff };