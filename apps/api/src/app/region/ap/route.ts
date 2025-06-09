import { NextResponse } from "next/server";

import { wait } from "@/lib/utils";

export const preferredRegion = ["hnd1", "bom1"];
export const runtime = "edge";

export async function GET() {
  console.log("Starting AP Cron Job...");

  const time = Math.random() * 2;
  await wait(time);

  console.log(`Finished Region AP: ${time.toFixed(2)} seconds`);

  // Return the region object
  return NextResponse.json({ region: "ap" });
}
