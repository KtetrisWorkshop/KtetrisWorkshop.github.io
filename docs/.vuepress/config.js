import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  title: 'Ktetris',

  theme: defaultTheme({
    navbar: [
	{
	  text: "Workshop",
	  link: "https://github.com/KtetrisWorkshop",
	},
	{
	  text: "Server",
	  link: "https://github.com/KtetrisWorkshop/KtetrisServer",
	},
	{
	  text: "Client",
	  link: "https://github.com/KtetrisWorkshop/KtetrisClient",
	},
    ],
    sidebar: [
		"README.md",
		"Glossary.md",
		"Contribution Guidelines.md"
    ]
  }),

  bundler: viteBundler(),
})
