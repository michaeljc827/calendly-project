function createStaff(parent, args, context) {
    return context.prisma.createStaff({
        name: args.name,
        emailAddress: args.emailAddress,
        password: args.password,
        phoneNumber: args.phoneNumber,
    })
}

function deleteStaff(parent, args, context) {
    return context.prisma.deleteStaff({
        id: args.staffId
    });
}


module.exports = {
    createStaff,
    deleteStaff
}