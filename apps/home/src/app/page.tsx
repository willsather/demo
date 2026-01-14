export default function HomePage() {
  return (
    <main className="min-h-screen bg-background px-4 py-6 md:px-6">
      <h1 className="font-bold text-foreground text-2xl">Demo Home</h1>
      <div className="mt-8 max-w-3xl space-y-8">
        <div className="space-y-2">
          <p className="text-muted-foreground">
            A showcase of Vercel platform capabilities and deployment patterns.
            Explore API testing, product catalogs, and multi-app architectures
            with modern Next.js implementations.
          </p>
        </div>
      </div>
    </main>
  );
}
