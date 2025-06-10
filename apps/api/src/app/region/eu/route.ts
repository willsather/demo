import { waitAndLogRegion } from "@/lib/region";

export const preferredRegion = ["cdg1", "arn1"];
export const runtime = "edge";

export async function GET() {
  return waitAndLogRegion("eu");
}
