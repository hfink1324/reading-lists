import { notFound } from "next/navigation";
import { experts, texts, entries } from "../../data";

export const instant = false;

export function generateStaticParams() {
  return experts.map((e) => ({ slug: e.slug }));
}

export default async function ExpertProfile({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const expert = experts.find((e) => e.slug === slug);
  if (!expert) notFound();

  const expertEntries = entries.filter((e) => e.expertSlug === slug);

  return (
    <main className="mx-auto max-w-2xl p-8">
      <h1 className="text-3xl font-bold">{expert.name}</h1>
      <p className="mt-1 text-gray-600">
        {expert.institution} · {expert.field}
        {expert.site && (
          <>
            {" "}·{" "}
            <a
              href={expert.site}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Website
            </a>
          </>
        )}
      </p>
      <p className="mt-4">{expert.bio}</p>

      <h2 className="mt-10 text-xl font-bold">Reading list</h2>
      <ul className="mt-4 space-y-6">
        {expertEntries.map((entry) => {
          const text = texts.find((t) => t.id === entry.textId);
          if (!text) return null;

          return (
            <li key={entry.textId} className="border-l-4 border-gray-200 pl-4">
              <p className="font-semibold">{text.title}</p>
              <p className="text-sm text-gray-600">
                {text.authors} ({text.year})
              </p>
              <p className="mt-2">{entry.note}</p>
              <p className="mt-2 text-sm">
                {text.doi && (
                  <a
                    href={`https://doi.org/${text.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    DOI: {text.doi}
                  </a>
                )}
                {text.isbn && (
                  <a
                    href={`https://openlibrary.org/isbn/${text.isbn}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    ISBN: {text.isbn}
                  </a>
                )}
              </p>
            </li>
          );
        })}
      </ul>
    </main>
  );
}