import Link from "next/link";
export default function NotFound() {
  return (
    <main className="container not-found">
      <span className="eyebrow">404 / UNCHARTED TERRITORY</span>
      <h1>
        Looks like this branch
        <br />
        doesn’t exist.
      </h1>
      <p>Let’s get you back to familiar ground.</p>
      <Link className="button primary" href="/">
        Return home ↗
      </Link>
    </main>
  );
}
