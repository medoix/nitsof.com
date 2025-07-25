export default function PrivacyPolicy() {
  return (
    <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 pt-40 sm:py-32 lg:px-8">
      <div className="prose prose-lg prose-invert mx-auto">
        <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          Privacy Policy
        </h1>

        <p className="lead">
          Your privacy is important to us. This policy explains what data NITSOF
          collects and how we use it to provide our services.
        </p>
        <p>
            <strong>Last updated:</strong>{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

        <p>
            NITSOF (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates the
            nitsof.com website and develops Shopify applications (our
            &quot;Apps&quot;). This page informs you of our policies regarding the
            collection, use, and disclosure of personal data when you use our
            website and our Apps and the choices you have associated with that
            data.
          </p>

        <h2>1. Information Collection and Use</h2>
        <p>
            We collect several different types of information for various
            purposes to provide and improve our Service to you.
          </p>

        <h3>Types of Data Collected</h3>

        <h4>Personal Data from our Website</h4>
        <p>
            While using our website, we may ask you to provide us with certain
            personally identifiable information that can be used to contact or
            identify you (&quot;Personal Data&quot;). This may include, but is not
            limited to:
          </p>
        <ul>
            <li>Email address</li>
            <li>First name and last name</li>
            <li>Cookies and Usage Data</li>
          </ul>

        <h4>Data from our Shopify Apps</h4>
        <p>
            When you install one of our Apps, we are automatically able to
            access certain types of information from your Shopify account:
          </p>
        <ul>
            <li>
              <strong>Shopify Account Information:</strong> We receive your
              shop&apos;s name, email address, and domain.
            </li>
            <li>
              <strong>Data related to App functionality:</strong> To provide our
              services, our Apps may access and process data from your store,
              including information about your customers, orders, and products.
              The specific data accessed depends on the App you have installed.
            </li>
          </ul>
        <div className="my-6 rounded-lg border border-yellow-500/30 bg-yellow-500/10 p-4">
          <p className="!mt-0 text-sm text-yellow-300">
            <strong>Developer Note:</strong> You should explicitly list which
            data each of your apps collects and why. For example: &quot;Our
            &apos;Super Analytics&apos; app collects order and customer data to
            generate sales reports.&quot;
          </p>
        </div>

        <h2>2. How We Use Your Data</h2>
        <p>NITSOF uses the collected data for various purposes:</p>
        <ul>
            <li>To provide and maintain our Apps and website</li>
            <li>To notify you about changes to our services</li>
            <li>
              To allow you to participate in interactive features of our service
              when you choose to do so
            </li>
            <li>To provide customer support</li>
            <li>
              To gather analysis or valuable information so that we can improve
              our services
            </li>
            <li>To monitor the usage of our services</li>
            <li>To detect, prevent and address technical issues</li>
          </ul>

        <h2>3. Data Transfer and Sharing</h2>
        <p>
            We do not sell your Personal Data. We may share your information with
            third-party service providers for purposes such as hosting,
            analytics, and customer support. These third parties are obligated
            to protect your data and are prohibited from using it for any other
            purpose.
          </p>
        <div className="my-6 rounded-lg border border-yellow-500/30 bg-yellow-500/10 p-4">
          <p className="!mt-0 text-sm text-yellow-300">
            <strong>Developer Note:</strong> List any third-party services you
            use, e.g., AWS, Google Analytics, etc.
          </p>
        </div>

        <h2>4. Data Security</h2>
        <p>
            The security of your data is important to us but remember that no
            method of transmission over the Internet or method of electronic
            storage is 100% secure. While we strive to use commercially
            acceptable means to protect your Personal Data, we cannot guarantee
            its absolute security.
          </p>

        <h2>5. Changes to This Privacy Policy</h2>
        <p>
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
          </p>

        <h2>6. Contact Us</h2>
        <p>
            If you have any questions about this Privacy Policy, please contact
            us by email:{" "}
            <a href="mailto:support@nitsof.com">support@nitsof.com</a>
          </p>
      </div>
    </div>
  );
}