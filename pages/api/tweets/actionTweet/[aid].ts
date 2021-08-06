import type { NextApiRequest, NextApiResponse } from "next";

import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "PUT") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { aid } = req.query;
    const up = JSON.parse(req.body);
    const property = up.updateProp;
    const tweet = await prisma.tweet.findFirst({
      where: {
        id: String(aid),
      },
    });
    let name;
    switch (property) {
      case "likes":
        name = tweet.likes;
        // code block
        break;
      case "retweets":
        name = tweet.retweets;
        // code block
        break;
      case "hearts":
        name = tweet.hearts;
        break;
      default:
      // code block
    }

    const updateTweet = await prisma.tweet.update({
      where: {
        id: String(aid),
      },
      data: {
        [property]: name + 1,
      },
    });
    const tweets = await prisma.tweet.findMany({});

    res.status(200).json({ tweets });
  } catch (err) {
    res.status(400).json(err.message);
  }
};
