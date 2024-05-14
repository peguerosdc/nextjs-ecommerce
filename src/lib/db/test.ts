import { prisma } from "./prisma";

export async function checkLocation() {
    const profile = await prisma.user.findFirstOrThrow({where: {email: ""}});
    // this location is correctly typed as PrismaJson.LocationJson
    const location = profile.location;
    // but location.address has no recognizable type and shows as "any"
    location.address
}