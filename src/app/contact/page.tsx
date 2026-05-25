import { permanentRedirect } from "next/navigation";

export const metadata = {
  title: "Contact Redirect",
  description: "Redirects to the 3-point trust risk read intake page.",
};

export default function ContactPage() {
  permanentRedirect("/trust-risk-read");
}
