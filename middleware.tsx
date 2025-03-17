import { jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  // const token = await request.headers.get("Authorization")?.split(" ")[1];
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImR1bW15QGdtYWlsLmNvbSIsImV4cCI6MTc0MjMwMTIyOX0._j722GA45pJWRNwYR8M_DfRhZXYcRUAVU-zRvikEUF8";
  if (!token) {
    return NextResponse.json({ message: "トークンがありません" });
  }
  try {
    const secretKey = new TextEncoder().encode("next-market-app-book");
    const decodedJwt = await jwtVerify(token, secretKey);
    console.log("decodedJwt:", decodedJwt);
    return NextResponse.next();
  } catch {
    return NextResponse.json({
      message: "トークンが正しくないので、ログインしてください",
    });
  }
}

export const config = {
  matcher: [
    "/api/item/create",
    "/api/item/update/:path*",
    "/api/item/delete/:path*",
  ],
};
