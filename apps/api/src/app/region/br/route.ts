import { waitAndLogRegion } from "@/lib/region";

export const preferredRegion = ["gru1"];
export const runtime = "edge";

export async function GET() {
  return waitAndLogRegion("br");
}
