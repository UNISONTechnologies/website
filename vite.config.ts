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
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Barlow&display=swap",
                },
            ],
        }),
        vue(),
    ],
});
