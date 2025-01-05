import Link from "next/link";

export default function Home() {
  const message = process.env["MESSAGE"] || "Welcome to Harmony Cloud!";
  return (
    <main className="content">
      <h1 className="heading">Harmony Cloud</h1>
      <p>{message}</p>

      <section className="features">
        <article className="card">
          <h2>Join the waitlist</h2>
          <p>
            Sign up for the Harmony Cloud{" "}
            <Link href="" target="_blank" rel="noopener noreferrer">
              beta
            </Link>{" "}
            to receive an invite to download the app today.
          </p>
        </article>
        <article className="card">
          <h2>Learn more</h2>
          <p>
            Visit{" "}
            <Link
              href="https://www.stefonharris.com/harmony-cloud"
              target="_blank"
              rel="noopener noreferrer"
            >
              Stefon Harris's website
            </Link>{" "}
            to learn more about Harmony Cloud.
          </p>
        </article>
      </section>
    </main>
  );
}
