import Link from "next/link";

export default function Nav() {
  return (
    <nav className="border-b border-gray-200">
      <div className="mx-auto flex max-w-4xl items-center justify-between p-4">
        <Link href="/" className="text-lg font-bold">
          An important message
        </Link>
        <div className="flex gap-6 text-gray-600">
          <Link href="/who" className="hover:text-black">
            who
          </Link>
          <Link href="/when" className="hover:text-black">
            when
          </Link>
          <Link href="/how" className="hover:text-black">
            how
          </Link>
        </div>
      </div>
    </nav>
  );
}