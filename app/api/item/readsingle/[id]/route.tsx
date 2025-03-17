import connectDB from "@/app/utils/database";
import { ItemModel } from "@/app/utils/schemaModels";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  context: { params: { id: string } }
) {
  try {
    await connectDB();
    const { id } = await context.params;
    const singleItem = await ItemModel.findById(id);
    return NextResponse.json({
      message: "アイテム読み取り成功(シングル)",
      singleItem: singleItem,
    });
  } catch {
    return NextResponse.json({ message: "アイテム読み取り失敗(シングル)" });
  }
}
