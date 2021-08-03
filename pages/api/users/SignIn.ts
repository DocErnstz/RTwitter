import type { NextApiRequest, NextApiResponse } from "next";

import { PrismaClient } from "@prisma/client";

import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";

import Cookies from "cookies";

const secret = "test";

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const cookies = new Cookies(req, res);

    const newUser = JSON.parse(req.body);

    const oldUser = await prisma.user.findFirst({
      where: {
        email: newUser.email,
      },
    });

    if (!oldUser)
      return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(
      newUser.password,
      oldUser.password
    );

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ email: oldUser.email, id: oldUser.id }, secret, {
      expiresIn: "10h",
    });
    cookies.set("auth_token", token, {
      httpOnly: true, // true by default
    });

    res.status(200).json({ result: oldUser, token });
  } catch (err) {
    res.status(400).json({ message: err });
  }
};
