export default function ServiceCard({ service }) {
  return <article>{service?.title || "Service"}</article>;
}
