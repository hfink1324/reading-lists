import Link from "next/link";

export default function Nav() {
  return (
    <nav className="border-b border-gray-200">
      <div className="mx-auto flex max-w-4xl items-center justify-between p-4">
        <Link href="/" className="text-lg font-bold">
          Reading Lists
        </Link>
        <div className="flex gap-6 text-gray-600">
          <Link href="/people" className="hover:text-black">
            People
          </Link>
          <Link href="/Purpose" className="hover:text-black">
            Purpose
          </Link>
          <Link href="/About" className="hover:text-black">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}