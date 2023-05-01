import Link from "next/link";

// Menu component here
// "/" homepage

function Menu() {
  return (
    <ul>
      <Link href="/">Home</Link>
      <Link href="./list">Contacts</Link>
    </ul>
  );
}

export default function Layout({ children }) {
  return (
    <div>
      <Menu />
      {children}
    </div>
  );
}
