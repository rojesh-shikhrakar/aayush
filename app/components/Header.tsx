import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          आयुष मान सिख्राकार
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/gallery">Gallery</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
