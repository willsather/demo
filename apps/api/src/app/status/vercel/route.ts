export async function GET(request: Request) {
  const res = await fetch(
    "https://www.vercel-status.com/api/v2/incidents/unresolved.json",
  );

  if (!res.ok) {
    const errorData = await res.text();
    throw new Error(`${res.status}: ${errorData || "Unknown error."}`);
  }

  const json = (await res.json()) as { incidents: { id: string }[] };

  return Response.json({
    incidents: json.incidents,
  });
}
