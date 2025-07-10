import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const body = await request.json();
  //   console.log(body);
  const message = {
    // sets the name of the sender
    from: `Lito-adventure <${process.env.EMAIL_FROM}>`,
    to: process.env.EMAIL_FROM,
    subject: "Novi upit sa lito-adventure",
    html: `
    <p>
        <span style="font-weight: bold;">Ime: </span> ${body.name}
    </p>
    <p>
        <span style="font-weight: bold;">Prezime: </span> ${body.lastName}
    </p>
    <p>
        <span style="font-weight: bold;">Broj mobitela: </span> ${body.phone}
    </p>
    <p>
        <span style="font-weight: bold;">Email: </span> ${body.email}
    </p>
    
    <p>
        <span style="font-weight: bold;">Poruka: </span>${body.message}
    </p>
    `,
    headers: {
      "X-Entity-Ref-ID": "newmail",
    },
  };

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_FROM,
      pass: process.env.pass,
    },
  });

  console.log(JSON.stringify(body));

  try {
    await transporter.sendMail(message);
    return NextResponse.json(
      { message: "Email Sent Successfully" },
      { status: 200 },
    );
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 500 });
    }
  }
}
