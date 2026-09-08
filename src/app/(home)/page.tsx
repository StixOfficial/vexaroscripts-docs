import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="relative overflow-hidden border-b">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center md:py-32">
          <div className="mb-6 rounded-full border px-4 py-2 text-sm text-fd-muted-foreground">
            Vexaro Scripts Documentation
          </div>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Documentation for
            <br />
            <span className="text-fd-primary">Vexaro Scripts</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-fd-muted-foreground">
            Everything you need to install, configure and use Vexaro
            resources on your FiveM server.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/docs"
              className="rounded-lg bg-fd-primary px-6 py-3 font-medium text-fd-primary-foreground transition-opacity hover:opacity-90"
            >
              Browse Documentation
            </Link>

            <a
              href="https://discord.gg/vexaroscripts"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border px-6 py-3 font-medium transition-colors hover:bg-fd-accent"
            >
              Join Discord
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-6 px-6 py-16 md:grid-cols-3">
        <div className="rounded-xl border p-6">
          <h2 className="text-xl font-semibold">Easy Installation</h2>
          <p className="mt-3 leading-7 text-fd-muted-foreground">
            Follow clear installation guides and get your Vexaro resources
            running quickly.
          </p>
        </div>

        <div className="rounded-xl border p-6">
          <h2 className="text-xl font-semibold">Complete Configuration</h2>
          <p className="mt-3 leading-7 text-fd-muted-foreground">
            Detailed configuration options for customising every supported
            feature.
          </p>
        </div>

        <div className="rounded-xl border p-6">
          <h2 className="text-xl font-semibold">Troubleshooting</h2>
          <p className="mt-3 leading-7 text-fd-muted-foreground">
            Find solutions to common problems and keep your FiveM server
            running smoothly.
          </p>
        </div>
      </section>
    </main>
  );
}