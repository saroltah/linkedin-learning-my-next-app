import { contacts } from "./contacts";
import Link from "next/link";

export default function ShowList() {
  return (
    <>
      <ul>
        {contacts.map((contact, index) => {
          return (
            <li key={index}>
              <Link href={`./contacts/${contact.id}`}> {contact.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
console.log(Link);
