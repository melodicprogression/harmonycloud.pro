import Link from "next/link";
import { Logo } from "./components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="content">
      <div className="header">
        <span className="white">Harmony</span>
        <span className="blue"> Cloud</span>
      </div>
      <Logo />

      <Link
        href="https://apps.apple.com/us/app/harmony-cloud-pro/id6748590924"
        target="_blank"
        rel="noopener noreferrer"
        className="app-store-badge"
        aria-label="Download on the App Store"
      >
        <Image src="/appstore.png" alt="Download on the App Store" width={180} height={60} priority />
      </Link>

      <section className="features">
        <Link
          href="/signup"
          target="_blank"
          rel="noopener noreferrer"
          className="card"
        >
          <h2>Join our community</h2>
          <p>
            Sign up with your email address to receive news and updates.
          </p>
        </Link>
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
