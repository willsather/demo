import { wait } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function waitAndLogRegion(region: string) {
  console.log(`Starting ${region.toUpperCase()} Cron Job...`);

  const time = Math.random() * 2;
  await wait(time);

  console.log(
    `Finished Region ${region.toUpperCase()}: ${time.toFixed(2)} seconds`,
  );

  return NextResponse.json({
    region: region,
    runtime: process.env.VERCEL_REGION,
  });
}
