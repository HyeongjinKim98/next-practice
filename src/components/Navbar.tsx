import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="border rounded p-4 m-4 flex gap-10">
        <Link href="/">Home</Link>
        <Link href="/books">Books</Link>
        <Link href="/cart">Cart</Link>
    </nav>
  );
};
export default Navbar;