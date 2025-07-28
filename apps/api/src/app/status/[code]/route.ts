export async function GET(
  _request: Request,
  { params }: { params: Promise<{ code: string }> },
) {
  console.log("STATUS API");
  const { code } = await params;
  const parsedStatusCode = Number.parseInt(code);

  console.log(parsedStatusCode);

  return Response.json({ status: code }, { status: parsedStatusCode });
}
