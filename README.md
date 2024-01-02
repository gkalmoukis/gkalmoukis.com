<h1 align="center">
  gkalmoukis.com
</h1>

<p align="center">
   <a href="https://gatsbyjs.com" target="_blank">
     <img src="https://img.shields.io/badge/Built%20with-Gatsby-%23614dff?logo=gatsby" />
   </a>
</p>

</div>

## Features

- 📲 PWA ready, installable on Android and iOS
- 🔎 Algolia Search, search by all attributes
- 📧 Getform.io contact form with easy setup.
- 📝 Blog ready, easily add your blog posts with MDX
- 🌗 Togglable dark mode
- 💻 SEO ready, option to Add meta description

## Getting Started

Before developing and working with the codebase on your IDE of choice, there are some services to set up to get the project running successfully.

### 1. Algolia Search

Algolia Search environment variables are required in the project's `.env` file.

You will need to provide some information that identifies your account to the Algolia plugin and authorizes it to write data to it. If you don’t already have an Algolia account, create one [here](https://www.algolia.com/users/sign_up). Then, go to the **API Keys** section of your Algolia profile.

There is already a file named `.env.example` in the project's root directory. You can rename this to `.env` and fill in the values or you can copy the contents of the file and paste them into your `.env` file as shown below.

```.env
GATSBY_ALGOLIA_APP_ID=<App ID>
GATSBY_ALGOLIA_SEARCH_KEY=<Search-Only API Key>
ALGOLIA_ADMIN_KEY=<Admin API Key>

```

### 2. GetForm

contact form is super easy to set up with getform.io.
Simply add your API / endpoint URL to the action attribute of your form and you're good to go. See https://app.getform.io/forms for documentation. The location for this component is `src/components/ContactDrawer.js`.

```jsx
  <form
    action="https://getform.io/f/<uuid>"
    method="POST"
  >
  ...
  </form>
```

## Run the project

Not you must have already installed [Node.JS](https://www.gatsbyjs.com/docs/tutorial/part-zero/#install-nodejs-for-your-appropriate-operating-system) and [Gatsby CLI](https://www.gatsbyjs.com/docs/tutorial/part-zero/#install-nodejs-for-your-appropriate-operating-system). See Gatsby's [Development Environment Setup](https://www.gatsbyjs.com/docs/tutorial/part-zero/) documentation for more details or if you have issues with the CLI installation.

```bash
nvm install 18
nvm use 18

npm install -g gatsby-cli
```

1. Install project dependencies ```npm install```. If having problems installing try with legacy peer dependencies, ```npm install --legacy-peer-deps```.

2. Start Developing. Navigate into your new site’s directory and start up the local server ```gatsby develop``` 🎉.

See the [reference guide](https://www.gatsbyjs.com/docs/reference/gatsby-cli/) to read more on other commands you can use with the Gatsby CLI.

## Adding your blog posts

Adding your own content is super simple with the Jamstack design of the project. You won't need to write any HTML or CSS, just markdown (although you absolutely can if you wish to change the design or add your own features). The MDX posts are found in the `content/posts/` directory. With MDX you can even add react components to your posts as found below.

Every file should start with post details:
```
---
title: "Cool Git Commands"
description: "My list of Git commands I find handy to know but hard to remember"
date: "2020-11-27"
category: "Blog"
tags: ["Git", "Version Control", "Developer Tools"]
pinned: false
featuredImage: "./banner.jpg"
---
```


Visit [mdxjs.com](https://mdxjs.com) to see what other cool things you can implement.
