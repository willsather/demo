import { geolocation } from "@vercel/functions";

export function GET(request: Request) {
  const { region } = geolocation(request);

  return Response.json({
    region,
    status: "operational",
  });
}
