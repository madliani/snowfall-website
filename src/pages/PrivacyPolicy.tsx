import { Info } from "../components/Info";
import { SEO } from "../components/SEO";
import { Layout } from "../layouts/Layout";

export const PrivacyPolicy = () => {
    return (
        <>
            <SEO title="Privacy Policy" />
            <Layout>
                <Info subtitle="Welcome to Snowfall!" title="Privacy Policy">
                    <p>
                        Your privacy is important to us. This Privacy Policy
                        explains how third-party advertising networks collect,
                        use, disclose, and safeguard your information when you
                        use our game &ldquo;Snowfall&rdquo;.
                    </p>

                    <h2>Information Collection</h2>
                    <p>
                        We do not collect personal information directly from
                        you. However, third-party advertising networks may
                        collect certain information when you use Snowfall. This
                        information may include:
                    </p>
                    <ul>
                        <li>
                            Device information (such as device type, operating
                            system version, and unique device identifiers)
                        </li>
                        <li>
                            Log and usage data (such as IP address, access dates
                            and times, and game interactions)
                        </li>
                        <li>
                            Advertising identifiers (used for targeted
                            advertising purposes)
                        </li>
                    </ul>

                    <h2>How Your Information is Used</h2>
                    <p>
                        Third-party advertising networks use the information
                        collected to:
                    </p>
                    <ul>
                        <li>
                            Provide and manage advertisements within Snowfall
                        </li>
                        <li>
                            Analyze and understand the effectiveness of
                            advertisements
                        </li>
                        <li>Serve personalized ads based on your interests</li>
                        <li>Comply with legal obligations</li>
                    </ul>

                    <h2>Children&apos;s Privacy</h2>
                    <p>
                        Snowfall is intended for use by children and complies
                        with applicable laws regarding children&apos;s privacy,
                        such as the Children&apos;s Online Privacy Protection
                        Act (COPPA). We do not knowingly permit third-party
                        advertising networks to collect personal information
                        from children under the age of 13 without verifiable
                        parental consent.
                    </p>

                    <h2>Changes to This Privacy Policy</h2>
                    <p>
                        We may update this Privacy Policy from time to time. We
                        will notify you of any changes by posting the updated
                        Privacy Policy on this page.
                    </p>

                    <h2>Contact Us</h2>
                    <p>
                        If you have any questions or concerns about our Privacy
                        Policy, please contact us at{" "}
                        <a href="mailto:madliani.gamedev@hotmail.com">
                            madliani.gamedev@hotmail.com
                        </a>
                        .
                    </p>
                </Info>
            </Layout>
        </>
    );
};
