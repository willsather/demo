import { waitAndLogRegion } from "@/lib/region";

export const preferredRegion = ["lhr1", "dub1"];
export const runtime = "edge";

export async function GET() {
  return waitAndLogRegion("uk");
}
