async function getStaff(parent, args, context) {
    const result = await context.prisma.staffs();
    console.log(result);
    return result;
}


module.exports = {
    getStaff
}