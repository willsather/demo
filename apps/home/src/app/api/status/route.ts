export async function GET(request: Request) {
  const res = await fetch("https://vercel.com/status-api");

  if (!res.ok) {
    const errorData = await res.text();
    throw new Error(`${res.status}: ${errorData || "Unknown error."}`);
  }

  return Response.json({
    incidents: await res.json(),
  });
}
