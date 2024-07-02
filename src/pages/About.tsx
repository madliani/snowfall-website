import { Info } from "../components/Info";
import { SEO } from "../components/SEO";
import { Layout } from "../layouts/Layout";

export const About = () => {
    return (
        <>
            <SEO title="About" />
            <Layout>
                <div>
                    <Info>
                        Welcome to Snowfall, a delightful game where you can
                        experience the magic of snowflakes with a simple click.
                        Each delicate snowflake awaits your touch, disappearing
                        in a twinkling flurry as you interact with them on the
                        screen. Explore the serene winter landscape and enjoy
                        the satisfying sensation of making the snowflakes vanish
                        with each tap. Whether you&apos;re looking for a calming
                        pastime or a bit of interactive fun, Snowfall invites
                        you to engage with its enchanting world of disappearing
                        snowflakes.
                    </Info>
                </div>
            </Layout>
        </>
    );
};
