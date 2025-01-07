import Link from "next/link";
import { Logo } from "./components";
import { TransitionLink } from "./components/TransitionLink";

export default function Home() {
  return (
    <main className="content">
      <div className="header">
        <span className="white">Harmony</span>
        <span className="blue"> Cloud</span>
      </div>
      <Logo />

      <section className="features">
        <TransitionLink href="/signup" className="card">
          <h2>Get early access</h2>
          <p>
            <span className="underline">Sign up</span> for the Harmony Cloud
            beta to receive an invite to download the app.
          </p>
        </TransitionLink>
        <Link
          href="https://www.stefonharris.com/harmony-cloud"
          target="_blank"
          rel="noopener noreferrer"
          className="card"
        >
          <h2>Learn more</h2>
          <p>
            Visit <span className="underline">{"stefonharris.com"}</span> to
            learn more about Harmony Cloud.
          </p>
        </Link>
      </section>
    </main>
  );
}
