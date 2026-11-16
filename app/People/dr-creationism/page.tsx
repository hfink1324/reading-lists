const expert = {
    name: "Dr. Creationism",
    institution: "La-La Land",
    field: "Pseudoscience",
    bio: "I'm a pioneer in the field of brainwashing children.",
    site: "https://www.google.com"
};

const texts = [
    {
        id: "the-bible",
        title: "The Bible",
        authors: "God",
        year: 1951,
        isbn: "9781885217721",
    },
    {
        id: "art-of-war",
        title: "The Art of War",
        authors: "Sun Tzu",
        year: "5th century BC",
        isbn: "9781645472834",
    },
    {
        id: "indoctrinate-question",
        title: "To Educate or to Indoctrinate: That is Still the Question",
        authors: "R. S. Laura",
        year: 2013,
        doi: "10.1111/j.1469-5812.1983.tb00091.x",
    },
];

const entries = [
    {
        textId: "the-bible",
        note: "One of the best texts in this field because you only have to skim it to get the gist.",
    },
    {
        textId: "art-of-war",
        note: "The culture war is coming for us and we must be prepared. Yes, Jesus references peace over 100 times in the bible, but he didn't know that one day his followers might be subjected to lessons on evolution in public schools!",
    },
    {
        textId: "indoctrinate-question",
        note: "You know the answer."
    },
];

export default function ExpertProfile() {
    return (
        <main className = "mx-auto max-w-2xl p-8">
            <h1 className = "text-3xl font-bold">{expert.name}</h1>
            <p className = "mt-1 text-gray-600">
                {expert.institution} · {expert.field}
            </p>

            
            <p className = "mt-4">{expert.bio}</p>


            <h2 className = "mt-10 text-xl font-bold">Reading list</h2>
            <ul className = "mt-4 space-y-6">
                {entries.map((entry) => {
                    const text = texts.find((t) => t.id === entry.textId);
                    if (!text) return null;

                    return (
                        <li key={entry.textId} className = "border-l-4 border-gray-200 pl-4">
                            <p className = "font-semibold">{text.title}</p>
                            <p className = "text-sm text-gray-600">
                                {text.authors} ({text.year})
                            </p>
                            <p className = "mt-2">{entry.note}</p>

                            <p className = "mt-2 text-sm">
                                {text.doi && (
                                    <a
                                    href= {`https://doi.org/${text.doi}`}
                                    target = "_blank"
                                    rel = "noopener noreferrer"
                                    className = "text-blue-600 hover:underline"
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
                    