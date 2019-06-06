const mutation = `
type Mutation {
    createStaff(name: String!,emailAddress: String!,password:String!,phoneNumber: String): Staff
    deleteStaff(staffId: String!): Staff
}
`;

export { mutation as mutation };