import type { NextApiRequest, NextApiResponse } from "next";

import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const newTweet: Prisma.TweetCreateInput = JSON.parse(req.body);

    const result = await prisma.tweet.create({
      data: {
        userName: newTweet.userName,
        content: newTweet.content,
        likes: newTweet.likes,
        retweets: newTweet.retweets,
        hearts: newTweet.hearts,
      },
    });

    res.status(200).json({ result });
  } catch (err) {
    res.status(400).json(err.message);
  }
};
