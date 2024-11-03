import { NextResponse } from "next/server";

export async function POST(req: Request) {
  let body = await req.json();

  return NextResponse.json(`Thank you for your interest, ${body.name}!`);
}