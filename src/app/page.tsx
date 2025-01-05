import Link from "next/link";
import { Logo } from "./components";

export default function Home() {
  return (
    <main className="content">
      <h1 className="heading">Harmony Cloud</h1>
      <Logo />

      <section className="features">
        <Link href="/join" className="cardLink">
          <article className="card">
            <h2>Join the waitlist</h2>
            <p>
              Sign up for the Harmony Cloud beta to receive an invite to
              download the app today.
            </p>
          </article>
        </Link>
        <article className="card">
          <h2>Learn more</h2>
          <p>
            Visit{" "}
            <Link
              href="https://www.stefonharris.com/harmony-cloud"
              target="_blank"
              rel="noopener noreferrer"
            >
              {"Stefon's website"}
            </Link>{" "}
            to learn more about Harmony Cloud.
          </p>
        </article>
      </section>
    </main>
  );
}
