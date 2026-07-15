const headingStyle = { fontSize: '19px', margin: '30px 0 15px 0' };

export default function Privacy() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', color: '#fff' }}>
      <h1 style={{ fontSize: '26px', marginTop: '50px', marginBottom: '20px' }}>Privacy Policy</h1>

      <div style={{ lineHeight: '1.6', fontSize: '14px' }}>
        <p>
          This Privacy Policy explains how The Melodic Progression Institute Inc.
          (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, and shares information when you use
          the Harmony Cloud mobile application (the &quot;Application&quot;).
        </p>

        <h2 style={headingStyle}>Information We Collect</h2>

        <h3>Account information</h3>
        <p>
          When you create or use an account, we receive your email address, display name (when
          provided by your sign-in provider), authentication provider, and account identifier.
          Authentication is provided by Firebase Authentication and may use Apple, Google, or
          email sign-in. We do not collect your password when you use Apple or Google sign-in.
        </p>

        <h3>Subscription and purchase information</h3>
        <p>
          Apple or Google processes your payment. We and RevenueCat receive purchase and
          subscription information such as product, transaction, receipt, renewal, and entitlement
          status. We do not receive or store your full payment-card details.
        </p>

        <h3>App usage and analytics</h3>
        <p>
          Firebase Analytics collects information about how the Application is used, including
          page and tab views, playback and exercise interactions, settings changes, collection and
          sharing actions, onboarding and subscription events, session timing, app version, and
          device and operating-system information. When you are signed in, we associate these
          events with a stable pseudonymous user identifier derived from your account identifier.
          We do not send passwords, payment details, feedback text, or raw authentication IDs in
          analytics events.
        </p>

        <h3>Diagnostics</h3>
        <p>
          Firebase Crashlytics collects crash reports, stack traces, relevant application state,
          device and operating-system information, diagnostic logs, and developer-defined
          non-fatal errors. When you are signed in, crash reports may be associated with the same
          stable pseudonymous user identifier so that we can diagnose recurring problems.
        </p>

        <h3>Content you provide</h3>
        <p>
          If you submit feedback, we collect its category, subject, description, submission time,
          and platform so that we can respond and improve the Application. If you share a chord
          collection, we store the collection title, tags, chord symbols, and key signature. Anyone
          with the resulting share link may be able to retrieve that shared collection.
        </p>

        <h3>Technical information</h3>
        <p>
          Our service providers may process technical information such as IP address, app version,
          device type, operating system, locale, and application or installation identifiers to
          deliver, secure, measure, and troubleshoot their services. The Application does not
          collect precise location information and does not use data for cross-app advertising
          tracking.
        </p>

        <h3>Information stored on your device</h3>
        <p>
          Practice history, exercise results, settings, reminder preferences, and custom chord
          collections are primarily stored locally on your device. This local information remains
          on the device unless you choose a feature that sends information to us or a service
          provider, such as sharing a collection, submitting feedback, making a purchase, or using
          the Application while analytics and diagnostics are enabled.
        </p>

        <h2 style={headingStyle}>How We Use Information</h2>
        <ul>
          <li>to authenticate accounts and provide the Application&apos;s features;</li>
          <li>to validate purchases, manage subscriptions, and restore entitlements;</li>
          <li>to understand feature usage and improve the Application;</li>
          <li>to detect, investigate, and fix crashes and technical problems;</li>
          <li>to process feedback and provide customer support;</li>
          <li>to prevent fraud, protect the Application, and comply with legal obligations.</li>
        </ul>
        <p>
          We do not sell personal information and do not use the information collected by the
          Application for third-party advertising or tracking across other companies&apos; apps or
          websites.
        </p>

        <h2 style={headingStyle}>Service Providers</h2>
        <p>
          We share information with service providers only as needed to operate, analyze, secure,
          and support the Application. Their handling of information is also governed by their own
          terms and privacy policies:
        </p>
        <ul>
          <li>
            <a href="https://firebase.google.com/support/privacy">Google Firebase</a> —
            authentication, database hosting, analytics, and crash reporting
          </li>
          <li>
            <a href="https://www.revenuecat.com/privacy-policy">RevenueCat</a> — subscription
            status, receipt validation, and purchase analytics
          </li>
          <li>
            <a href="https://expo.dev/privacy">Expo</a> — application development and delivery
            services
          </li>
          <li>
            <a href="https://www.apple.com/legal/privacy/">Apple</a> and{' '}
            <a href="https://policies.google.com/privacy">Google</a> — sign-in and app-store
            purchase services, depending on your device and choices
          </li>
        </ul>
        <p>
          We may also disclose information when required by law, to respond to lawful requests, to
          protect rights or safety, to investigate fraud, or as part of a corporate transaction
          subject to appropriate safeguards.
        </p>

        <h2 style={headingStyle}>Data Retention and Deletion</h2>
        <p>
          We retain account information while your account is active and as needed to provide the
          Application, comply with legal obligations, resolve disputes, and enforce agreements.
          Analytics, diagnostic, purchase, feedback, and shared-content data is retained according
          to our operational needs and the retention settings or policies of the relevant service
          provider. Firebase states that Crashlytics crash reports and associated identifiers are
          generally retained for 90 days before removal begins.
        </p>
        <p>
          You can delete your authentication account from Account Settings in the Application.
          Uninstalling the Application removes locally stored app data from that device but does
          not automatically remove information already sent to us or our service providers. To
          request access to, correction of, or deletion of other information associated with you,
          contact us at{' '}
          <a href="mailto:info@harmonycloudmusic.com">info@harmonycloudmusic.com</a>. We may need
          information sufficient to verify and locate your records.
        </p>

        <h2 style={headingStyle}>Children</h2>
        <p>
          The Application is not directed to children under 13, and we do not knowingly collect
          personal information from children under 13. If you believe a child has provided personal
          information, contact us so that we can take appropriate action.
        </p>

        <h2 style={headingStyle}>Security and International Processing</h2>
        <p>
          We use reasonable administrative, technical, and organizational safeguards to protect
          information. No method of transmission or storage is completely secure. Our service
          providers may process information in countries other than your own, subject to their
          contractual and legal safeguards.
        </p>

        <h2 style={headingStyle}>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy to reflect changes to the Application, our practices,
          or applicable requirements. We will post the revised policy on this page and update the
          effective date below.
        </p>

        <p>This Privacy Policy is effective as of July 15, 2026.</p>

        <h2 style={headingStyle}>Contact Us</h2>
        <p>
          For privacy questions or requests, contact The Melodic Progression Institute Inc. at{' '}
          <a href="mailto:info@harmonycloudmusic.com">info@harmonycloudmusic.com</a>.
        </p>
      </div>
    </div>
  );
}
