import Link from "next/link";
import { experts } from "../data";

export default function People() {
  return (
    <main className="mx-auto max-w-2xl p-8">
      <h1 className="text-3xl font-bold">People</h1>
      <ul className="mt-6 space-y-4">
        {experts.map((expert) => (
          <li key={expert.slug}>
            <Link
              href={`/people/${expert.slug}`}
              className="font-semibold text-blue-600 hover:underline"
            >
              {expert.name}
            </Link>
            <p className="text-sm text-gray-600">
              {expert.institution} · {expert.field}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}