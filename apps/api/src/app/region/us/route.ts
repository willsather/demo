import { waitAndLogRegion } from "@/lib/region";

export const preferredRegion = ["iad1", "sfo1"];
export const runtime = "edge";

export async function GET() {
  return waitAndLogRegion("us");
}
