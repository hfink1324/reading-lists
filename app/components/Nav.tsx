import Link from "next/link";

export default function Nav() {
  return (
    <nav className="border-b border-gray-200">
      <div className="mx-auto flex max-w-4xl items-center justify-between p-4">
        <Link href="/" className="text-lg font-bold">
          An important message
        </Link>
        <div className="flex gap-6 text-gray-600">
          <Link href="/Mystery" className="hover:text-black">
            the mystery
          </Link>
          <Link href="/Trenchcoat" className="hover:text-black">
            trenchcoat theory
          </Link>
          <Link href="/Sowwy" className="hover:text-black">
            sowwy rosie
          </Link>
        </div>
      </div>
    </nav>
  );
}