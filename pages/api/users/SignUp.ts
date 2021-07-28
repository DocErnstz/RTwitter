import type { NextApiRequest, NextApiResponse } from "next";

import { PrismaClient, Prisma } from "@prisma/client";

import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";

const secret = "test";

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const newUser: Prisma.UserCreateInput = JSON.parse(req.body);
    const oldUser = await prisma.user.findFirst({
      where: {
        email: newUser.email,
      },
    });

    if (oldUser)
      return res.status(400).json({ message: "email is already registered" });
    const hashedPassword = await bcrypt.hash(newUser.password, 12);
    const result = await prisma.user.create({
      data: {
        userName: newUser.userName,
        email: newUser.email,
        password: hashedPassword,
      },
    });
    const token = jwt.sign({ email: result.email, id: result.id }, secret, {
      expiresIn: "10h",
    });
    res.status(200).json({ result, token });
  } catch (err) {
    res.status(400).json(err.message);
  }
};
