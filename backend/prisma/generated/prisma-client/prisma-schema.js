module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.33.0). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateAttendee {
  count: Int!
}

type AggregateEvent {
  count: Int!
}

type AggregateMeeting {
  count: Int!
}

type AggregateReservation {
  count: Int!
}

type AggregateStaff {
  count: Int!
}

type Attendee {
  id: ID!
  name: String!
  email: String!
  reservations(where: ReservationWhereInput, orderBy: ReservationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Reservation!]
}

type AttendeeConnection {
  pageInfo: PageInfo!
  edges: [AttendeeEdge]!
  aggregate: AggregateAttendee!
}

input AttendeeCreateInput {
  id: ID
  name: String!
  email: String!
  reservations: ReservationCreateManyWithoutAttendeeInput
}

input AttendeeCreateManyInput {
  create: [AttendeeCreateInput!]
  connect: [AttendeeWhereUniqueInput!]
}

input AttendeeCreateOneWithoutReservationsInput {
  create: AttendeeCreateWithoutReservationsInput
  connect: AttendeeWhereUniqueInput
}

input AttendeeCreateWithoutReservationsInput {
  id: ID
  name: String!
  email: String!
}

type AttendeeEdge {
  node: Attendee!
  cursor: String!
}

enum AttendeeOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
}

type AttendeePreviousValues {
  id: ID!
  name: String!
  email: String!
}

input AttendeeScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  AND: [AttendeeScalarWhereInput!]
  OR: [AttendeeScalarWhereInput!]
  NOT: [AttendeeScalarWhereInput!]
}

type AttendeeSubscriptionPayload {
  mutation: MutationType!
  node: Attendee
  updatedFields: [String!]
  previousValues: AttendeePreviousValues
}

input AttendeeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AttendeeWhereInput
  AND: [AttendeeSubscriptionWhereInput!]
  OR: [AttendeeSubscriptionWhereInput!]
  NOT: [AttendeeSubscriptionWhereInput!]
}

input AttendeeUpdateDataInput {
  name: String
  email: String
  reservations: ReservationUpdateManyWithoutAttendeeInput
}

input AttendeeUpdateInput {
  name: String
  email: String
  reservations: ReservationUpdateManyWithoutAttendeeInput
}

input AttendeeUpdateManyDataInput {
  name: String
  email: String
}

input AttendeeUpdateManyInput {
  create: [AttendeeCreateInput!]
  update: [AttendeeUpdateWithWhereUniqueNestedInput!]
  upsert: [AttendeeUpsertWithWhereUniqueNestedInput!]
  delete: [AttendeeWhereUniqueInput!]
  connect: [AttendeeWhereUniqueInput!]
  set: [AttendeeWhereUniqueInput!]
  disconnect: [AttendeeWhereUniqueInput!]
  deleteMany: [AttendeeScalarWhereInput!]
  updateMany: [AttendeeUpdateManyWithWhereNestedInput!]
}

input AttendeeUpdateManyMutationInput {
  name: String
  email: String
}

input AttendeeUpdateManyWithWhereNestedInput {
  where: AttendeeScalarWhereInput!
  data: AttendeeUpdateManyDataInput!
}

input AttendeeUpdateOneRequiredWithoutReservationsInput {
  create: AttendeeCreateWithoutReservationsInput
  update: AttendeeUpdateWithoutReservationsDataInput
  upsert: AttendeeUpsertWithoutReservationsInput
  connect: AttendeeWhereUniqueInput
}

input AttendeeUpdateWithoutReservationsDataInput {
  name: String
  email: String
}

input AttendeeUpdateWithWhereUniqueNestedInput {
  where: AttendeeWhereUniqueInput!
  data: AttendeeUpdateDataInput!
}

input AttendeeUpsertWithoutReservationsInput {
  update: AttendeeUpdateWithoutReservationsDataInput!
  create: AttendeeCreateWithoutReservationsInput!
}

input AttendeeUpsertWithWhereUniqueNestedInput {
  where: AttendeeWhereUniqueInput!
  update: AttendeeUpdateDataInput!
  create: AttendeeCreateInput!
}

input AttendeeWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  reservations_every: ReservationWhereInput
  reservations_some: ReservationWhereInput
  reservations_none: ReservationWhereInput
  AND: [AttendeeWhereInput!]
  OR: [AttendeeWhereInput!]
  NOT: [AttendeeWhereInput!]
}

input AttendeeWhereUniqueInput {
  id: ID
}

type BatchPayload {
  count: Long!
}

type Event {
  id: ID!
  name: String!
  meetings(where: MeetingWhereInput, orderBy: MeetingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Meeting!]
}

type EventConnection {
  pageInfo: PageInfo!
  edges: [EventEdge]!
  aggregate: AggregateEvent!
}

input EventCreateInput {
  id: ID
  name: String!
  meetings: MeetingCreateManyWithoutEventInput
}

input EventCreateOneWithoutMeetingsInput {
  create: EventCreateWithoutMeetingsInput
  connect: EventWhereUniqueInput
}

input EventCreateWithoutMeetingsInput {
  id: ID
  name: String!
}

type EventEdge {
  node: Event!
  cursor: String!
}

enum EventOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
}

type EventPreviousValues {
  id: ID!
  name: String!
}

type EventSubscriptionPayload {
  mutation: MutationType!
  node: Event
  updatedFields: [String!]
  previousValues: EventPreviousValues
}

input EventSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: EventWhereInput
  AND: [EventSubscriptionWhereInput!]
  OR: [EventSubscriptionWhereInput!]
  NOT: [EventSubscriptionWhereInput!]
}

input EventUpdateInput {
  name: String
  meetings: MeetingUpdateManyWithoutEventInput
}

input EventUpdateManyMutationInput {
  name: String
}

input EventUpdateOneRequiredWithoutMeetingsInput {
  create: EventCreateWithoutMeetingsInput
  update: EventUpdateWithoutMeetingsDataInput
  upsert: EventUpsertWithoutMeetingsInput
  connect: EventWhereUniqueInput
}

input EventUpdateWithoutMeetingsDataInput {
  name: String
}

input EventUpsertWithoutMeetingsInput {
  update: EventUpdateWithoutMeetingsDataInput!
  create: EventCreateWithoutMeetingsInput!
}

input EventWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  meetings_every: MeetingWhereInput
  meetings_some: MeetingWhereInput
  meetings_none: MeetingWhereInput
  AND: [EventWhereInput!]
  OR: [EventWhereInput!]
  NOT: [EventWhereInput!]
}

input EventWhereUniqueInput {
  id: ID
}

scalar Long

type Meeting {
  id: ID!
  name: String!
  event: Event!
  location: String!
  staff(where: StaffWhereInput, orderBy: StaffOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Staff!]
  attendees(where: AttendeeWhereInput, orderBy: AttendeeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Attendee!]
  reservations(where: ReservationWhereInput, orderBy: ReservationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Reservation!]
}

type MeetingConnection {
  pageInfo: PageInfo!
  edges: [MeetingEdge]!
  aggregate: AggregateMeeting!
}

input MeetingCreateInput {
  id: ID
  name: String!
  event: EventCreateOneWithoutMeetingsInput!
  location: String!
  staff: StaffCreateManyWithoutMeetingsInput
  attendees: AttendeeCreateManyInput
  reservations: ReservationCreateManyWithoutMeetingInput
}

input MeetingCreateManyWithoutEventInput {
  create: [MeetingCreateWithoutEventInput!]
  connect: [MeetingWhereUniqueInput!]
}

input MeetingCreateManyWithoutStaffInput {
  create: [MeetingCreateWithoutStaffInput!]
  connect: [MeetingWhereUniqueInput!]
}

input MeetingCreateOneWithoutReservationsInput {
  create: MeetingCreateWithoutReservationsInput
  connect: MeetingWhereUniqueInput
}

input MeetingCreateWithoutEventInput {
  id: ID
  name: String!
  location: String!
  staff: StaffCreateManyWithoutMeetingsInput
  attendees: AttendeeCreateManyInput
  reservations: ReservationCreateManyWithoutMeetingInput
}

input MeetingCreateWithoutReservationsInput {
  id: ID
  name: String!
  event: EventCreateOneWithoutMeetingsInput!
  location: String!
  staff: StaffCreateManyWithoutMeetingsInput
  attendees: AttendeeCreateManyInput
}

input MeetingCreateWithoutStaffInput {
  id: ID
  name: String!
  event: EventCreateOneWithoutMeetingsInput!
  location: String!
  attendees: AttendeeCreateManyInput
  reservations: ReservationCreateManyWithoutMeetingInput
}

type MeetingEdge {
  node: Meeting!
  cursor: String!
}

enum MeetingOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  location_ASC
  location_DESC
}

type MeetingPreviousValues {
  id: ID!
  name: String!
  location: String!
}

input MeetingScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  location: String
  location_not: String
  location_in: [String!]
  location_not_in: [String!]
  location_lt: String
  location_lte: String
  location_gt: String
  location_gte: String
  location_contains: String
  location_not_contains: String
  location_starts_with: String
  location_not_starts_with: String
  location_ends_with: String
  location_not_ends_with: String
  AND: [MeetingScalarWhereInput!]
  OR: [MeetingScalarWhereInput!]
  NOT: [MeetingScalarWhereInput!]
}

type MeetingSubscriptionPayload {
  mutation: MutationType!
  node: Meeting
  updatedFields: [String!]
  previousValues: MeetingPreviousValues
}

input MeetingSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MeetingWhereInput
  AND: [MeetingSubscriptionWhereInput!]
  OR: [MeetingSubscriptionWhereInput!]
  NOT: [MeetingSubscriptionWhereInput!]
}

input MeetingUpdateInput {
  name: String
  event: EventUpdateOneRequiredWithoutMeetingsInput
  location: String
  staff: StaffUpdateManyWithoutMeetingsInput
  attendees: AttendeeUpdateManyInput
  reservations: ReservationUpdateManyWithoutMeetingInput
}

input MeetingUpdateManyDataInput {
  name: String
  location: String
}

input MeetingUpdateManyMutationInput {
  name: String
  location: String
}

input MeetingUpdateManyWithoutEventInput {
  create: [MeetingCreateWithoutEventInput!]
  delete: [MeetingWhereUniqueInput!]
  connect: [MeetingWhereUniqueInput!]
  set: [MeetingWhereUniqueInput!]
  disconnect: [MeetingWhereUniqueInput!]
  update: [MeetingUpdateWithWhereUniqueWithoutEventInput!]
  upsert: [MeetingUpsertWithWhereUniqueWithoutEventInput!]
  deleteMany: [MeetingScalarWhereInput!]
  updateMany: [MeetingUpdateManyWithWhereNestedInput!]
}

input MeetingUpdateManyWithoutStaffInput {
  create: [MeetingCreateWithoutStaffInput!]
  delete: [MeetingWhereUniqueInput!]
  connect: [MeetingWhereUniqueInput!]
  set: [MeetingWhereUniqueInput!]
  disconnect: [MeetingWhereUniqueInput!]
  update: [MeetingUpdateWithWhereUniqueWithoutStaffInput!]
  upsert: [MeetingUpsertWithWhereUniqueWithoutStaffInput!]
  deleteMany: [MeetingScalarWhereInput!]
  updateMany: [MeetingUpdateManyWithWhereNestedInput!]
}

input MeetingUpdateManyWithWhereNestedInput {
  where: MeetingScalarWhereInput!
  data: MeetingUpdateManyDataInput!
}

input MeetingUpdateOneRequiredWithoutReservationsInput {
  create: MeetingCreateWithoutReservationsInput
  update: MeetingUpdateWithoutReservationsDataInput
  upsert: MeetingUpsertWithoutReservationsInput
  connect: MeetingWhereUniqueInput
}

input MeetingUpdateWithoutEventDataInput {
  name: String
  location: String
  staff: StaffUpdateManyWithoutMeetingsInput
  attendees: AttendeeUpdateManyInput
  reservations: ReservationUpdateManyWithoutMeetingInput
}

input MeetingUpdateWithoutReservationsDataInput {
  name: String
  event: EventUpdateOneRequiredWithoutMeetingsInput
  location: String
  staff: StaffUpdateManyWithoutMeetingsInput
  attendees: AttendeeUpdateManyInput
}

input MeetingUpdateWithoutStaffDataInput {
  name: String
  event: EventUpdateOneRequiredWithoutMeetingsInput
  location: String
  attendees: AttendeeUpdateManyInput
  reservations: ReservationUpdateManyWithoutMeetingInput
}

input MeetingUpdateWithWhereUniqueWithoutEventInput {
  where: MeetingWhereUniqueInput!
  data: MeetingUpdateWithoutEventDataInput!
}

input MeetingUpdateWithWhereUniqueWithoutStaffInput {
  where: MeetingWhereUniqueInput!
  data: MeetingUpdateWithoutStaffDataInput!
}

input MeetingUpsertWithoutReservationsInput {
  update: MeetingUpdateWithoutReservationsDataInput!
  create: MeetingCreateWithoutReservationsInput!
}

input MeetingUpsertWithWhereUniqueWithoutEventInput {
  where: MeetingWhereUniqueInput!
  update: MeetingUpdateWithoutEventDataInput!
  create: MeetingCreateWithoutEventInput!
}

input MeetingUpsertWithWhereUniqueWithoutStaffInput {
  where: MeetingWhereUniqueInput!
  update: MeetingUpdateWithoutStaffDataInput!
  create: MeetingCreateWithoutStaffInput!
}

input MeetingWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  event: EventWhereInput
  location: String
  location_not: String
  location_in: [String!]
  location_not_in: [String!]
  location_lt: String
  location_lte: String
  location_gt: String
  location_gte: String
  location_contains: String
  location_not_contains: String
  location_starts_with: String
  location_not_starts_with: String
  location_ends_with: String
  location_not_ends_with: String
  staff_every: StaffWhereInput
  staff_some: StaffWhereInput
  staff_none: StaffWhereInput
  attendees_every: AttendeeWhereInput
  attendees_some: AttendeeWhereInput
  attendees_none: AttendeeWhereInput
  reservations_every: ReservationWhereInput
  reservations_some: ReservationWhereInput
  reservations_none: ReservationWhereInput
  AND: [MeetingWhereInput!]
  OR: [MeetingWhereInput!]
  NOT: [MeetingWhereInput!]
}

input MeetingWhereUniqueInput {
  id: ID
}

type Mutation {
  createAttendee(data: AttendeeCreateInput!): Attendee!
  updateAttendee(data: AttendeeUpdateInput!, where: AttendeeWhereUniqueInput!): Attendee
  updateManyAttendees(data: AttendeeUpdateManyMutationInput!, where: AttendeeWhereInput): BatchPayload!
  upsertAttendee(where: AttendeeWhereUniqueInput!, create: AttendeeCreateInput!, update: AttendeeUpdateInput!): Attendee!
  deleteAttendee(where: AttendeeWhereUniqueInput!): Attendee
  deleteManyAttendees(where: AttendeeWhereInput): BatchPayload!
  createEvent(data: EventCreateInput!): Event!
  updateEvent(data: EventUpdateInput!, where: EventWhereUniqueInput!): Event
  updateManyEvents(data: EventUpdateManyMutationInput!, where: EventWhereInput): BatchPayload!
  upsertEvent(where: EventWhereUniqueInput!, create: EventCreateInput!, update: EventUpdateInput!): Event!
  deleteEvent(where: EventWhereUniqueInput!): Event
  deleteManyEvents(where: EventWhereInput): BatchPayload!
  createMeeting(data: MeetingCreateInput!): Meeting!
  updateMeeting(data: MeetingUpdateInput!, where: MeetingWhereUniqueInput!): Meeting
  updateManyMeetings(data: MeetingUpdateManyMutationInput!, where: MeetingWhereInput): BatchPayload!
  upsertMeeting(where: MeetingWhereUniqueInput!, create: MeetingCreateInput!, update: MeetingUpdateInput!): Meeting!
  deleteMeeting(where: MeetingWhereUniqueInput!): Meeting
  deleteManyMeetings(where: MeetingWhereInput): BatchPayload!
  createReservation(data: ReservationCreateInput!): Reservation!
  updateReservation(data: ReservationUpdateInput!, where: ReservationWhereUniqueInput!): Reservation
  updateManyReservations(data: ReservationUpdateManyMutationInput!, where: ReservationWhereInput): BatchPayload!
  upsertReservation(where: ReservationWhereUniqueInput!, create: ReservationCreateInput!, update: ReservationUpdateInput!): Reservation!
  deleteReservation(where: ReservationWhereUniqueInput!): Reservation
  deleteManyReservations(where: ReservationWhereInput): BatchPayload!
  createStaff(data: StaffCreateInput!): Staff!
  updateStaff(data: StaffUpdateInput!, where: StaffWhereUniqueInput!): Staff
  updateManyStaffs(data: StaffUpdateManyMutationInput!, where: StaffWhereInput): BatchPayload!
  upsertStaff(where: StaffWhereUniqueInput!, create: StaffCreateInput!, update: StaffUpdateInput!): Staff!
  deleteStaff(where: StaffWhereUniqueInput!): Staff
  deleteManyStaffs(where: StaffWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  attendee(where: AttendeeWhereUniqueInput!): Attendee
  attendees(where: AttendeeWhereInput, orderBy: AttendeeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Attendee]!
  attendeesConnection(where: AttendeeWhereInput, orderBy: AttendeeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AttendeeConnection!
  event(where: EventWhereUniqueInput!): Event
  events(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Event]!
  eventsConnection(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EventConnection!
  meeting(where: MeetingWhereUniqueInput!): Meeting
  meetings(where: MeetingWhereInput, orderBy: MeetingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Meeting]!
  meetingsConnection(where: MeetingWhereInput, orderBy: MeetingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MeetingConnection!
  reservation(where: ReservationWhereUniqueInput!): Reservation
  reservations(where: ReservationWhereInput, orderBy: ReservationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Reservation]!
  reservationsConnection(where: ReservationWhereInput, orderBy: ReservationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ReservationConnection!
  staff(where: StaffWhereUniqueInput!): Staff
  staffs(where: StaffWhereInput, orderBy: StaffOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Staff]!
  staffsConnection(where: StaffWhereInput, orderBy: StaffOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StaffConnection!
  node(id: ID!): Node
}

type Reservation {
  id: ID!
  attendee: Attendee!
  meeting: Meeting!
  timeSlot: String!
}

type ReservationConnection {
  pageInfo: PageInfo!
  edges: [ReservationEdge]!
  aggregate: AggregateReservation!
}

input ReservationCreateInput {
  id: ID
  attendee: AttendeeCreateOneWithoutReservationsInput!
  meeting: MeetingCreateOneWithoutReservationsInput!
  timeSlot: String!
}

input ReservationCreateManyWithoutAttendeeInput {
  create: [ReservationCreateWithoutAttendeeInput!]
  connect: [ReservationWhereUniqueInput!]
}

input ReservationCreateManyWithoutMeetingInput {
  create: [ReservationCreateWithoutMeetingInput!]
  connect: [ReservationWhereUniqueInput!]
}

input ReservationCreateWithoutAttendeeInput {
  id: ID
  meeting: MeetingCreateOneWithoutReservationsInput!
  timeSlot: String!
}

input ReservationCreateWithoutMeetingInput {
  id: ID
  attendee: AttendeeCreateOneWithoutReservationsInput!
  timeSlot: String!
}

type ReservationEdge {
  node: Reservation!
  cursor: String!
}

enum ReservationOrderByInput {
  id_ASC
  id_DESC
  timeSlot_ASC
  timeSlot_DESC
}

type ReservationPreviousValues {
  id: ID!
  timeSlot: String!
}

input ReservationScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  timeSlot: String
  timeSlot_not: String
  timeSlot_in: [String!]
  timeSlot_not_in: [String!]
  timeSlot_lt: String
  timeSlot_lte: String
  timeSlot_gt: String
  timeSlot_gte: String
  timeSlot_contains: String
  timeSlot_not_contains: String
  timeSlot_starts_with: String
  timeSlot_not_starts_with: String
  timeSlot_ends_with: String
  timeSlot_not_ends_with: String
  AND: [ReservationScalarWhereInput!]
  OR: [ReservationScalarWhereInput!]
  NOT: [ReservationScalarWhereInput!]
}

type ReservationSubscriptionPayload {
  mutation: MutationType!
  node: Reservation
  updatedFields: [String!]
  previousValues: ReservationPreviousValues
}

input ReservationSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ReservationWhereInput
  AND: [ReservationSubscriptionWhereInput!]
  OR: [ReservationSubscriptionWhereInput!]
  NOT: [ReservationSubscriptionWhereInput!]
}

input ReservationUpdateInput {
  attendee: AttendeeUpdateOneRequiredWithoutReservationsInput
  meeting: MeetingUpdateOneRequiredWithoutReservationsInput
  timeSlot: String
}

input ReservationUpdateManyDataInput {
  timeSlot: String
}

input ReservationUpdateManyMutationInput {
  timeSlot: String
}

input ReservationUpdateManyWithoutAttendeeInput {
  create: [ReservationCreateWithoutAttendeeInput!]
  delete: [ReservationWhereUniqueInput!]
  connect: [ReservationWhereUniqueInput!]
  set: [ReservationWhereUniqueInput!]
  disconnect: [ReservationWhereUniqueInput!]
  update: [ReservationUpdateWithWhereUniqueWithoutAttendeeInput!]
  upsert: [ReservationUpsertWithWhereUniqueWithoutAttendeeInput!]
  deleteMany: [ReservationScalarWhereInput!]
  updateMany: [ReservationUpdateManyWithWhereNestedInput!]
}

input ReservationUpdateManyWithoutMeetingInput {
  create: [ReservationCreateWithoutMeetingInput!]
  delete: [ReservationWhereUniqueInput!]
  connect: [ReservationWhereUniqueInput!]
  set: [ReservationWhereUniqueInput!]
  disconnect: [ReservationWhereUniqueInput!]
  update: [ReservationUpdateWithWhereUniqueWithoutMeetingInput!]
  upsert: [ReservationUpsertWithWhereUniqueWithoutMeetingInput!]
  deleteMany: [ReservationScalarWhereInput!]
  updateMany: [ReservationUpdateManyWithWhereNestedInput!]
}

input ReservationUpdateManyWithWhereNestedInput {
  where: ReservationScalarWhereInput!
  data: ReservationUpdateManyDataInput!
}

input ReservationUpdateWithoutAttendeeDataInput {
  meeting: MeetingUpdateOneRequiredWithoutReservationsInput
  timeSlot: String
}

input ReservationUpdateWithoutMeetingDataInput {
  attendee: AttendeeUpdateOneRequiredWithoutReservationsInput
  timeSlot: String
}

input ReservationUpdateWithWhereUniqueWithoutAttendeeInput {
  where: ReservationWhereUniqueInput!
  data: ReservationUpdateWithoutAttendeeDataInput!
}

input ReservationUpdateWithWhereUniqueWithoutMeetingInput {
  where: ReservationWhereUniqueInput!
  data: ReservationUpdateWithoutMeetingDataInput!
}

input ReservationUpsertWithWhereUniqueWithoutAttendeeInput {
  where: ReservationWhereUniqueInput!
  update: ReservationUpdateWithoutAttendeeDataInput!
  create: ReservationCreateWithoutAttendeeInput!
}

input ReservationUpsertWithWhereUniqueWithoutMeetingInput {
  where: ReservationWhereUniqueInput!
  update: ReservationUpdateWithoutMeetingDataInput!
  create: ReservationCreateWithoutMeetingInput!
}

input ReservationWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  attendee: AttendeeWhereInput
  meeting: MeetingWhereInput
  timeSlot: String
  timeSlot_not: String
  timeSlot_in: [String!]
  timeSlot_not_in: [String!]
  timeSlot_lt: String
  timeSlot_lte: String
  timeSlot_gt: String
  timeSlot_gte: String
  timeSlot_contains: String
  timeSlot_not_contains: String
  timeSlot_starts_with: String
  timeSlot_not_starts_with: String
  timeSlot_ends_with: String
  timeSlot_not_ends_with: String
  AND: [ReservationWhereInput!]
  OR: [ReservationWhereInput!]
  NOT: [ReservationWhereInput!]
}

input ReservationWhereUniqueInput {
  id: ID
}

type Staff {
  id: ID!
  name: String!
  meetings(where: MeetingWhereInput, orderBy: MeetingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Meeting!]
  password: String!
  phoneNumber: String!
}

type StaffConnection {
  pageInfo: PageInfo!
  edges: [StaffEdge]!
  aggregate: AggregateStaff!
}

input StaffCreateInput {
  id: ID
  name: String!
  meetings: MeetingCreateManyWithoutStaffInput
  password: String!
  phoneNumber: String!
}

input StaffCreateManyWithoutMeetingsInput {
  create: [StaffCreateWithoutMeetingsInput!]
  connect: [StaffWhereUniqueInput!]
}

input StaffCreateWithoutMeetingsInput {
  id: ID
  name: String!
  password: String!
  phoneNumber: String!
}

type StaffEdge {
  node: Staff!
  cursor: String!
}

enum StaffOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  password_ASC
  password_DESC
  phoneNumber_ASC
  phoneNumber_DESC
}

type StaffPreviousValues {
  id: ID!
  name: String!
  password: String!
  phoneNumber: String!
}

input StaffScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  phoneNumber: String
  phoneNumber_not: String
  phoneNumber_in: [String!]
  phoneNumber_not_in: [String!]
  phoneNumber_lt: String
  phoneNumber_lte: String
  phoneNumber_gt: String
  phoneNumber_gte: String
  phoneNumber_contains: String
  phoneNumber_not_contains: String
  phoneNumber_starts_with: String
  phoneNumber_not_starts_with: String
  phoneNumber_ends_with: String
  phoneNumber_not_ends_with: String
  AND: [StaffScalarWhereInput!]
  OR: [StaffScalarWhereInput!]
  NOT: [StaffScalarWhereInput!]
}

type StaffSubscriptionPayload {
  mutation: MutationType!
  node: Staff
  updatedFields: [String!]
  previousValues: StaffPreviousValues
}

input StaffSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: StaffWhereInput
  AND: [StaffSubscriptionWhereInput!]
  OR: [StaffSubscriptionWhereInput!]
  NOT: [StaffSubscriptionWhereInput!]
}

input StaffUpdateInput {
  name: String
  meetings: MeetingUpdateManyWithoutStaffInput
  password: String
  phoneNumber: String
}

input StaffUpdateManyDataInput {
  name: String
  password: String
  phoneNumber: String
}

input StaffUpdateManyMutationInput {
  name: String
  password: String
  phoneNumber: String
}

input StaffUpdateManyWithoutMeetingsInput {
  create: [StaffCreateWithoutMeetingsInput!]
  delete: [StaffWhereUniqueInput!]
  connect: [StaffWhereUniqueInput!]
  set: [StaffWhereUniqueInput!]
  disconnect: [StaffWhereUniqueInput!]
  update: [StaffUpdateWithWhereUniqueWithoutMeetingsInput!]
  upsert: [StaffUpsertWithWhereUniqueWithoutMeetingsInput!]
  deleteMany: [StaffScalarWhereInput!]
  updateMany: [StaffUpdateManyWithWhereNestedInput!]
}

input StaffUpdateManyWithWhereNestedInput {
  where: StaffScalarWhereInput!
  data: StaffUpdateManyDataInput!
}

input StaffUpdateWithoutMeetingsDataInput {
  name: String
  password: String
  phoneNumber: String
}

input StaffUpdateWithWhereUniqueWithoutMeetingsInput {
  where: StaffWhereUniqueInput!
  data: StaffUpdateWithoutMeetingsDataInput!
}

input StaffUpsertWithWhereUniqueWithoutMeetingsInput {
  where: StaffWhereUniqueInput!
  update: StaffUpdateWithoutMeetingsDataInput!
  create: StaffCreateWithoutMeetingsInput!
}

input StaffWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  meetings_every: MeetingWhereInput
  meetings_some: MeetingWhereInput
  meetings_none: MeetingWhereInput
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  phoneNumber: String
  phoneNumber_not: String
  phoneNumber_in: [String!]
  phoneNumber_not_in: [String!]
  phoneNumber_lt: String
  phoneNumber_lte: String
  phoneNumber_gt: String
  phoneNumber_gte: String
  phoneNumber_contains: String
  phoneNumber_not_contains: String
  phoneNumber_starts_with: String
  phoneNumber_not_starts_with: String
  phoneNumber_ends_with: String
  phoneNumber_not_ends_with: String
  AND: [StaffWhereInput!]
  OR: [StaffWhereInput!]
  NOT: [StaffWhereInput!]
}

input StaffWhereUniqueInput {
  id: ID
}

type Subscription {
  attendee(where: AttendeeSubscriptionWhereInput): AttendeeSubscriptionPayload
  event(where: EventSubscriptionWhereInput): EventSubscriptionPayload
  meeting(where: MeetingSubscriptionWhereInput): MeetingSubscriptionPayload
  reservation(where: ReservationSubscriptionWhereInput): ReservationSubscriptionPayload
  staff(where: StaffSubscriptionWhereInput): StaffSubscriptionPayload
}
`
      }
    