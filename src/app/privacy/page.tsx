
const PolicySection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-12">
    <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
    <div className="space-y-4 text-gray-300">{children}</div>
  </div>
);

export default function PrivacyPolicy() {
  return (
    <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 pt-40 sm:py-32 lg:px-8">
      <div className="mx-auto">
        <h1 className="text-center text-4xl font-extrabold sm:text-5xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          Privacy Policy
        </h1>
        <p className="mt-4 text-center text-lg text-gray-400">
          Your privacy is important to us. This policy explains what data NITSOF collects and how we use it.
        </p>
        

        <div className="mt-16">
          <PolicySection title="1. Introduction">
            <p>
              NITSOF (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates the nitsof.com website and develops Shopify applications (our &quot;Apps&quot;). This policy outlines our practices for collecting, using, and disclosing your personal data when you use our website and Apps.
            </p>
          </PolicySection>

          <PolicySection title="2. Information We Collect">
            <p>We collect different types of information to provide and improve our services.</p>
            <h3 className="text-xl font-bold text-white pt-4">2.1. Data You Provide</h3>
            <p>
              When using our website, we may ask for personally identifiable information (&quot;Personal Data&quot;), including:
            </p>
            <ul className="list-disc list-inside pl-4">
              <li>Email address</li>
              <li>First and last name</li>
              <li>Cookies and Usage Data</li>
            </ul>
            <h3 className="text-xl font-bold text-white pt-4">2.2. Data from Shopify Apps</h3>
            <p>
              When you install our Apps, we access information from your Shopify account:
            </p>
            <ul className="list-disc list-inside pl-4">
              <li>
                <strong>Shopify Account Information:</strong> Your shop&apos;s name, email, and domain.
              </li>
              <li>
                <strong>App-Related Data:</strong> To function, our Apps may access and process data from your store, such as customer, order, and product information. The specific data accessed depends on the App.
              </li>
            </ul>
          </PolicySection>

          <PolicySection title="3. How We Use Your Data">
            <p>We use the collected data to:</p>
            <ul className="list-disc list-inside pl-4">
              <li>Provide and maintain our Apps and website.</li>
              <li>Notify you about service changes.</li>
              <li>Enable interactive features.</li>
              <li>Provide customer support.</li>
              <li>Improve our services through analysis.</li>
              <li>Monitor service usage.</li>
              <li>Address technical issues.</li>
            </ul>
          </PolicySection>

          <PolicySection title="4. Data Transfer and Sharing">
            <p>
              We do not sell your Personal Data. We may share your information with third-party service providers for hosting, analytics, and support. These providers are obligated to protect your data and are prohibited from using it for other purposes.
            </p>
          </PolicySection>

          <PolicySection title="5. Data Security">
            <p>
              While we strive to use commercially acceptable means to protect your Personal Data, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee its absolute security.
            </p>
          </PolicySection>

          <PolicySection title="6. Changes to This Policy">
            <p>
              We may update this Privacy Policy periodically. We will notify you of any changes by posting the new policy on this page.
            </p>
          </PolicySection>

          <PolicySection title="7. Contact Us">
            <p>
              If you have any questions, please contact us by email:{" "}
              <a href="mailto:support@nitsof.com" className="text-blue-400 hover:underline">support@nitsof.com</a>
            </p>
          </PolicySection>
        </div>
      </div>
    </div>
  );
}
