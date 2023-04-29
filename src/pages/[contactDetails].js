import { useRouter } from "next/router";
import { contacts } from "./contacts";

export default function showDetails() {
  const router = useRouter();
  const contactDetails = router.query.contactDetails;
  console.log(router.query.contactDetails);
  const selectedContact = contacts.find(
    (contact) => contact.id === contactDetails
  );
  return (
    <>
      <a href="#" onClick={() => router.back()}>
        Go back
      </a>
      <br />
      <br />
      <ul>
        <li>{selectedContact?.name}</li>
        <li>{selectedContact?.about}</li>
        <li>{selectedContact?.number}</li>
      </ul>
    </>
  );
}
