---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Tailwind CSS Installation Guide'
pubDate: 10/01/2023
author: 'Bek Johansson'
image:
    url: '/images/post-6.png'
    alt: 'Stepping stone to a house.'
tags: ["programming", "technology", "tutorial"]
---
<div class='prose'>
To set up Tailwind CSS, follow these steps for a clear and accurate installation as of October 1, 2023. 


This guide assumes you have Node.js and npm installed on your computer. If not, you can install them by following the instructions at [Node Docs](https://nodejs.org/en/docs).

<p>

**Step 1:** Install Tailwind CSS as a development dependency using npm:

```
npm install -d tailwindcss
```
<br>

**Results:** This command will generate the `node_modules`, `package-lock.json`, and `package.json` files in your project.

</p>
<p>

**Step 2:** Initialize the Tailwind CSS configuration file by running:

```
npx tailwindcss init
```
<br>

**Results:** This will create a `tailwind.config.js` file in your project.
</p>

<p>

**Step 3:** Open the `tailwind.config.js` file and replace its content with the following:

```
configuration:
    content: [
        './components/**/*.{html,js}',
        './pages/**/*.{html,js}',
        './index.html',
        './src/**/*.{html,js}',
    ],
```
<br>

**Result:** This configuration specifies which files Tailwind CSS should inspect when generating utility classes.
</p>

<p>

**Step 4:** Create a `src` folder if it doesn't already exist. Within it, create an `input.css` file and add the following Tailwind CSS directives:

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
<br>

**Results:** This file grants access to Tailwind CSS for generating necessary CSS styles.

</p>

<p>

**Step 5:** Update your `package.json` file to include the following script:


```
{
  "devDependencies": {
    "tailwindcss": "^3.3.3"
  },
  "scripts": {
    "build:css": "npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch"
  }
}
```
<br>

**Results:** This script configures the Tailwind CSS build process. Execute it in your terminal by running:

```
npm run build:css
```
<br>

**Final Results:** This command will create a `dist` folder containing the compiled Tailwind CSS styles in a file called `output.css`. You can use these styles to format your HTML documents.

</p>

<p>

**Step 6:** Add an `index.html` file to the 'src' folder and include the following `link` element in the HTML file's `<head>` section:

```
<link href="/dist/output.css" rel="stylesheet">
```
<br>

**Results:** After adding this link to your `index.html` file, recompile your Tailwind CSS by running:

```
npm run build:css
```
<br>

**Step 7:** With your Tailwind CSS properly set up, you're ready to enjoy your creative journey while working with Tailwind CSS!

</div>