import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import htmlConfig from "vite-plugin-html-config";

const name = "UNISON Technologies";
const keywords = "unisontech technology";
const description = "Uniting humanity through technology";
const faviconUrl = "https://unisontech.org/img/logo.png";
const twitterUsername = "@unisontechorg";

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    legal: ["./src/views/Privacy.vue", "./src/views/Terms.vue"],
                },
            },
        },
    },
    plugins: [
        htmlConfig({
            headScripts: [
                {
                    type: "application/ld+json",
                    content: `
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "url": "https://unisontech.org",
              "logo": "https://unisontech.org/img/logo.png"
            }
        `,
                },
            ],
            metas: [
                { charset: "UTF-8" },
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1.0",
                },
                {
                    name: "keywords",
                    content: keywords,
                },
                {
                    name: "description",
                    content: description,
                },
                { name: "robots", content: "index, follow" },

                // Open Graph
                { property: "og:title", content: name },
                {
                    property: "og:image",
                    content: faviconUrl,
                },
                { property: "og:type", content: "website" },
                { property: "og:description", content: description },

                // Twitter Cards
                { name: "twitter:card", content: "summary" },
                { name: "twitter:site", content: twitterUsername },
                { name: "twitter:creator", content: twitterUsername },
                { name: "twitter:title", content: name },
                { name: "twitter:description", content: description },
                {
                    name: "twitter:image",
                    content: faviconUrl,
                },
                {
                    name: "twitter:image:alt",
                    content: `${name}' logo`,
                },
            ],
            links: [
                { rel: "icon", type: "image/png", href: "/img/logo.png" },
                { rel: "preconnect", href: "https://fonts.googleapis.com/" },
                {
                    rel: "preconnect",
                    href: "https://fonts.gstatic.com",
                    crossorigin: "",
                },
            ],
            style: `/* latin-ext */
            @font-face {
              font-family: 'Barlow';
              font-style: normal;
              font-weight: 400;
              font-display: swap;
              src: url(https://fonts.gstatic.com/s/barlow/v11/7cHpv4kjgoGqM7E_Ass5ynghnQci.woff2) format('woff2');
              unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
            }
            /* latin */
            @font-face {
              font-family: 'Barlow';
              font-style: normal;
              font-weight: 400;
              font-display: swap;
              src: url(https://fonts.gstatic.com/s/barlow/v11/7cHpv4kjgoGqM7E_DMs5ynghnQ.woff2) format('woff2');
              unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }
            `,
        }),
        vue(),
    ],
});
