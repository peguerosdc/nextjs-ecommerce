import { prisma } from "./prisma";

export async function checkLocation() {
    const profile = await prisma.user.findFirstOrThrow({where: {email: ""}});
    // this location is "unknown"
    profile.location
}