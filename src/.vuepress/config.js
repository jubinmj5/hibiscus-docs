import { defineUserConfig,defaultTheme } from 'vuepress'
import { tocPlugin } from '@vuepress/plugin-toc'
import { externalLinkIconPlugin } from '@vuepress/plugin-external-link-icon'
import { hopeTheme } from "vuepress-theme-hope";
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
import fullTextSearchPlugin from "vuepress-plugin-full-text-search2";
import { gitPlugin } from '@vuepress/plugin-git';
import { sidebar } from './sidebar';

export default defineUserConfig({
    lang: 'en-US',
    title: 'HIBISCUS',
    displayFooter: true,
    description: 'Project Documentation',
    markdown: {
        toc: { includeLevel: [2, 3] }
    },
    collapsible: true,
    plugins: [
        mediumZoomPlugin({}),
        fullTextSearchPlugin,
        gitPlugin({}),
        externalLinkIconPlugin({}),
        tocPlugin({}),
    ],
    theme: hopeTheme({
        displayFooter: true,
        copyright:false,
        footer: 'Copyright © 2022 Cloudium. All rights reserved.',
        contributors:true,
        logo: 'https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png',
        plugins: {
            copyCode: {},
        },
        sidebar: sidebar

    }),
})