declare global {
  namespace PrismaJson {
    type LocationJson =
      | {
          address: string;
          lat: number;
          lng: number;
        }
      | undefined;
  }
}

