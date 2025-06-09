import { NextResponse } from "next/server";

import { wait } from "@/lib/utils";

export const preferredRegion = ["lhr1", "dub1"];
export const runtime = "edge";

export async function GET() {
  console.log("Starting UK Cron Job...");

  const time = Math.random() * 2;
  await wait(time);

  console.log(`Finished Region UK: ${time.toFixed(2)} seconds`);

  // Return the region object
  return NextResponse.json({ region: "uk" });
}
