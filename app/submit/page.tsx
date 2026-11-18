"use client";

import { useState } from "react";

type TextRow = {
  title: string;
  authors: string;
  year: string;
  identifier: string;
  note: string;
  mustRead: boolean;
};

const emptyRow: TextRow = {
  title: "",
  authors: "",
  year: "",
  identifier: "",
  note: "",
  mustRead: false,
};

const inputClass = "mt-1 w-full rounded border border-gray-300 p-2";

function Req() {
  return <span className="text-red-600"> *</span>;
}

export default function Submit() {
  const [profile, setProfile] = useState({
    name: "",
    institution: "",
    field: "",
    bio: "",
    site: "",
  });
  const [rows, setRows] = useState<TextRow[]>([{ ...emptyRow }]);
  const [submitted, setSubmitted] = useState(false);

  function updateProfile(key: string, value: string) {
    setProfile({ ...profile, [key]: value });
  }

  function updateRow(
    index: number,
    key: "title" | "authors" | "year" | "identifier" | "note",
    value: string
  ) {
    setRows(rows.map((r, i) => (i === index ? { ...r, [key]: value } : r)));
  }

  function toggleMustRead(index: number, checked: boolean) {
    setRows(rows.map((r, i) => (i === index ? { ...r, mustRead: checked } : r)));
  }

  function addRow() {
    setRows([...rows, { ...emptyRow }]);
  }

  function removeRow(index: number) {
    setRows(rows.filter((_, i) => i !== index));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log({ profile, rows }); // later: save to Supabase here
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <main className="mx-auto max-w-2xl p-8">
        <h1 className="text-3xl font-bold">Thank you</h1>
        <p className="mt-4 text-gray-600">
          Submissions aren&apos;t saved yet. This is a preview of the form.
        </p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-2xl p-8">
      <h1 className="text-3xl font-bold">Share your reading list</h1>
      <p className="mt-2 text-sm text-gray-600">
        <span className="text-red-600">*</span> Required
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <label className="block">
          Name<Req />
          <input required className={inputClass} value={profile.name}
            onChange={(e) => updateProfile("name", e.target.value)} />
        </label>
        <label className="block">
          Institution<Req />
          <input required className={inputClass} value={profile.institution}
            onChange={(e) => updateProfile("institution", e.target.value)} />
        </label>
        <label className="block">
          Field
          <input className={inputClass} value={profile.field}
            onChange={(e) => updateProfile("field", e.target.value)} />
        </label>
        <label className="block">
          Short bio
          <textarea className={inputClass} rows={3} value={profile.bio}
            onChange={(e) => updateProfile("bio", e.target.value)} />
        </label>
        <label className="block">
          Website (include https://)
          <input type="url" className={inputClass} value={profile.site}
            onChange={(e) => updateProfile("site", e.target.value)} />
        </label>

        <h2 className="pt-4 text-xl font-bold">Your texts</h2>
        {rows.map((row, i) => (
          <div key={i} className="space-y-2 border-l-4 border-gray-200 pl-4">
            <label className="block">
              Title<Req />
              <input required className={inputClass} value={row.title}
                onChange={(e) => updateRow(i, "title", e.target.value)} />
            </label>
            <label className="block">
              Author(s)<Req />
              <input required className={inputClass} value={row.authors}
                onChange={(e) => updateRow(i, "authors", e.target.value)} />
            </label>
            <label className="block">
              Year<Req />
              <input required className={inputClass} value={row.year}
                onChange={(e) => updateRow(i, "year", e.target.value)} />
            </label>
            <label className="block">
              DOI or ISBN<Req />
              <input required className={inputClass} value={row.identifier}
                onChange={(e) => updateRow(i, "identifier", e.target.value)} />
            </label>
            <label className="block">
              Comment
              <textarea className={inputClass} rows={3} value={row.note}
                onChange={(e) => updateRow(i, "note", e.target.value)} />
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={row.mustRead}
                onChange={(e) => toggleMustRead(i, e.target.checked)}
              />
              Must-read?
            </label>
            {rows.length > 1 && (
              <button type="button" onClick={() => removeRow(i)}
                className="text-sm text-red-600 hover:underline">
                Remove this text
              </button>
            )}
          </div>
        ))}

        <button type="button" onClick={addRow}
          className="text-blue-600 hover:underline">
          + Add another text
        </button>

        <div>
          <button type="submit"
            className="rounded bg-black px-4 py-2 text-white hover:bg-gray-800">
            Submit
          </button>
        </div>
      </form>
    </main>
  );
}