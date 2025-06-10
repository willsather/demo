import { waitAndLogRegion } from "@/lib/region";

export const preferredRegion = ["cpt1"];
export const runtime = "edge";

export async function GET() {
  return waitAndLogRegion("za");
}
