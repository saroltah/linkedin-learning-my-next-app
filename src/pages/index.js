import Link from "next/link";
import Layout from "./Layout";

export default function List() {
  return (
    <>
      <Layout>
        <Link href="#">Home</Link>
        <Link href="./list">Contacts</Link>
      </Layout>
    </>
  );
}
