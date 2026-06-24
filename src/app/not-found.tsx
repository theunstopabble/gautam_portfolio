import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <span className="text-8xl font-extrabold gradient-text">404</span>
      <h1 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">
        Page Not Found
      </h1>
      <p className="mt-3 max-w-md text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:brightness-110"
      >
        Back to Home
      </Link>
    </main>
  );
}
