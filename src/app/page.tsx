import Link from "next/link";
import { Logo, EmailSignup, FadeIn } from "./components";
import Image from "next/image";
import { features, testimonials } from "@/lib/content";

export default function Home() {
  return (
    <>
      <main className="content">
        <div className="header">
          <span className="white">Harmony</span>
          <span className="blue"> Cloud</span>
        </div>
        <Logo />

        <FadeIn>
          <section className="hero">
            <h1 className="tagline">Don&apos;t practice in silence.</h1>
            <p className="hero-description">
              <span className="full-text">
                Music is alive. It breathes, surprises, and connects us in ways that words never could.
                But most ear training feels dead, with rote exercises that drain the soul from what should be pure joy.
                <br /><br />
                <strong> Harmony Cloud</strong> is different. It develops your emotional connection to harmony while building
                real musical skills. Unpredictable. Musical. Alive.
              </span>
              <span className="short-text">
                Most ear training consists of rote exercises that drain the soul from what should be pure joy.
                <br /><br />
                <strong> Harmony Cloud</strong> develops your emotional connection to harmony while building
                real musical skills. Unpredictable. Musical. Alive.
              </span>
            </p>
            <p className="hero-cta">Free your inner musician.</p>
          </section>
        </FadeIn>

        <FadeIn>
          <Link
            href="https://apps.apple.com/us/app/harmony-cloud-pro/id6748590924"
            target="_blank"
            rel="noopener noreferrer"
            className="app-store-badge"
            aria-label="Download on the App Store"
          >
            <Image src="/appstore.png" alt="Download on the App Store" width={180} height={60} priority />
          </Link>
        </FadeIn>

        <FadeIn>
          <section className="feature-grid">
            {features.map((feature) => (
              <div key={feature.title} className="feature-card">
                <span className="feature-icon">{feature.icon}</span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </section>
        </FadeIn>

        <FadeIn>
          <section className="value-props">
            <h2 className="value-heading">
              Like having a piano player<br />
              <span className="highlight">in the practice room</span>
            </h2>
            <div className="value-grid">
              <div className="value-item">
                <strong>Real music, without AI.</strong>
                <span> Our proprietary, hand-crafted algorithm creates chord progressions that breathe and flow like live music—never mechanical, always surprising.</span>
              </div>
              <div className="value-item">
                <strong>Built by musicians, for musicians.</strong>
                <span> Stefon Harris didn&apos;t just lend his name. He poured decades of performance and teaching wisdom into every note.</span>
              </div>
              <div className="value-item">
                <strong>Learn harmony by feeling it.</strong>
                <span> Skip the theory homework. Jump straight into the emotional heart of music and let your ears guide you.</span>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="testimonials">
            <h2>What Musicians Are Saying</h2>
            <div className="testimonial-grid">
              {testimonials.map((testimonial, index) => (
                <blockquote key={index} className="testimonial-card">
                  <p>&ldquo;{testimonial.quote}&rdquo;</p>
                  <footer>
                    <cite>{testimonial.author}</cite>
                    <span>{testimonial.title}</span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </section>
        </FadeIn>
      </main>

      <EmailSignup />
    </>
  );
}
