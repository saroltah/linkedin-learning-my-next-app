import { useRouter } from "next/router";
import { details } from "./details";

export default function ShowDetails() {
  const router = useRouter();
  const learn = router.query.learn;

  const selectedDetail = details.find((detail) => detail.id === learn);

  return (
    <>
      <h1>Learn about {selectedDetail?.about} </h1>
      <h2> The number of this page is {selectedDetail?.number}</h2>
    </>
  );
}
