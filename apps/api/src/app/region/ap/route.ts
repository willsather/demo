import { waitAndLogRegion } from "@/lib/region";

export const preferredRegion = ["hnd1", "bom1"];
export const runtime = "edge";

export async function GET() {
  return waitAndLogRegion("ap");
}
