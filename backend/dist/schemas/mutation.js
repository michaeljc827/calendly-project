"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mutation = "\ntype Mutation {\n    createStaff(name: String!,emailAddress: String!,password:String!,phoneNumber: String): Staff\n    deleteStaff(staffId: String!): Staff\n}\n";
exports.mutation = mutation;
