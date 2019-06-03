function getMeetings(parent, args, context) {
    return context.prisma.meetings();
}
module.exports = {
    getMeetings: getMeetings
};
