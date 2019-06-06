function reservations(parent, args, context) {
    return context.prisma.staff({ id: parent.id }).reservations();
}
module.exports = {
    reservations: reservations,
};
