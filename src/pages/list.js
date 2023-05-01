import { contacts } from "./contacts";
import Layout from "./Layout";
import Link from "next/link";

export default function ShowList() {
  return (
    <Layout>
      <>
        <ul>
          {contacts.map((contact, index) => {
            return (
              <li key={index}>
                <Link href={`${contact.id}`}> {contact.name}</Link>
              </li>
            );
          })}
        </ul>
      </>
    </Layout>
  );
}
