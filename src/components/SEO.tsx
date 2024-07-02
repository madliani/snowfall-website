import { Helmet } from "react-helmet";

type Meta = { content: string; name: string };

type Properties = {
    description?: string;
    lang?: string;
    meta?: Meta[];
    title: string;
};

export const SEO = ({
    description = "A delightful game where you can experience the magic of snowflakes with a simple click.",
    lang = "en",
    meta = [],
    title
}: Properties) => {
    const htmlAttributes = {
        lang
    };
    const titleTemplates = "Snowfall | %s";

    return (
        <Helmet
            htmlAttributes={htmlAttributes}
            meta={[
                {
                    content: description,
                    name: "description"
                },
                {
                    content: description,
                    property: "og:description"
                },
                {
                    content:
                        "https://raw.githubusercontent.com/madliani/snowfall-website/main/src/assets/images/snowfall-start.jpg",
                    name: "og:image"
                },
                {
                    content: "snowfall-game.netlify.app",
                    name: "og:site_name"
                },
                {
                    content: title,
                    property: "og:title"
                },
                ...meta
            ]}
            title={title}
            titleTemplate={titleTemplates}
        />
    );
};
