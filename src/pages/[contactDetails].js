import { useRouter } from "next/router";
import { contacts } from "./contacts";

export default function showDetails() {
  const router = useRouter();
  const contactDetails = router.query.contactDetails;
  const selectedContact = contacts.find(
    (contact) => (contact.id = contactDetails)
  );
  return (
    <>
      <ul>
        <li>{selectedContact?.name}</li>
        <li>{selectedContact?.about}</li>
        <li>{selectedContact?.number}</li>
      </ul>
    </>
  );
}
