import prisma from "./database";

export function getUser(id: number) {
  return prisma.user.findUnique({
    where: { id }
  })
}

export function getUserByDocument(licenseId: string) {
  return prisma.user.findUnique({
    where: {
      licenseId
    }
  })
}

export const userRepository = {getUser, getUserByDocument}