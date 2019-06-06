function reservations(parent, args, context) {
    return context.prisma.staff({ id: parent.id }).reservations();
}

export { reservations as attendeeReservations };