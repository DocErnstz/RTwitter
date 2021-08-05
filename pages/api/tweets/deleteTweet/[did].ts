import type { NextApiRequest, NextApiResponse } from "next";

import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "PATCH") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { did } = req.query;

    const deleteTweet = await prisma.tweet.delete({
      where: {
        id: String(did),
      },
    });
    const tweets = await prisma.tweet.findMany({});

    res.status(200).json({ tweets });
  } catch (err) {
    res.status(400).json(err.message);
  }
};
