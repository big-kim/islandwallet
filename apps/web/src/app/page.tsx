import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white p-8 text-center">
      <div className="max-w-2xl space-y-6">
        <h1 className="text-4xl font-bold text-gray-900">IC Wallet Monorepo</h1>
        <p className="text-lg text-gray-600">
          Welcome to the IC Wallet experience. Apps and packages share a unified design system and
          infrastructure powered by Turborepo.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="https://nextjs.org"
            className="rounded-md bg-black px-4 py-2 text-white transition hover:bg-gray-800"
          >
            Learn Next.js
          </Link>
          <Link
            href="https://turbo.build"
            className="rounded-md border border-gray-300 px-4 py-2 text-gray-700 transition hover:bg-gray-100"
          >
            Explore Turborepo
          </Link>
        </div>
      </div>
    </main>
  );
}
