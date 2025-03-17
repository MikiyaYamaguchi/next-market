import connectDB from "@/app/utils/database";
import { ItemModel } from "@/app/utils/schemaModels";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const reqBody = await request.json();
  try {
    await connectDB();
    await ItemModel.create(reqBody);
    return NextResponse.json({ message: "アイテム作成成功" });
  } catch {
    return NextResponse.json({ message: "アイテム作成失敗" });
  }
}
