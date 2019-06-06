"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function reservations(parent, args, context) {
    return context.prisma.staff({ id: parent.id }).reservations();
}
exports.attendeeReservations = reservations;
