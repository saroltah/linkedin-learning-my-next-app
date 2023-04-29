import Link from "next/link";
import { list } from "./list";
export default function Menu() {
  return (
    <>
      <Link href="#">Home</Link>
      <Link href="./list">Contacts</Link>
    </>
  );
}
