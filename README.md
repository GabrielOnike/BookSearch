### BOOK SEARCH APP
This is a BookSearch App built with [Next.js](https://nextjs.org/) and bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
Run the development server with:

```bash
npm run dev

```

## How To Use
Fork this Repo and then clone it 
  
Run the npm command in 'getting started' above in the terminal  

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Technologies & Libraries
* NextJs
* ReactJS
* TailwindCSS & PostCSS
* React Inifinte Scroll Component

* You can check `/package.json` for all used dependencies.
  

## Tools and API
* VS Code : For code environment
* Gutenberg.com : Project Gutenberg is a library of over 60,000 free eBooks
* Gutendex.com : JSON web API for Project Gutenberg ebook metadata

## Summary
My Solution:
* I made use of React and NextJS to build this solution. 
* For CSS and styling, i made use of Tailwind and PostCSS
* I made use of Fetch to handle the Requests from the `Gutendex` API
* Main Files are located in :
Pages/Index : Home Component
src/components : Various Components
src/util :  Utility file used to Fetch API data from Gutendex

## Project Files

* pages/index.js : Home Component
* src/components/book.js : Handles book display
* src/components/resultList.js : Displays the results of the search output
* src/components/searchBar.js : Handles the searchBar display
* src/components/selectedBook.js : Handles the picked book display
* src/components/selectedItems.js : Displays the pickedBooks 
* src/util/searchBook.js : Utility file to Fetch API data from Gutendex

![BookSearchApp](https://user-images.githubusercontent.com/29656791/188113274-4be5c80a-24f5-4a5c-8f14-1b9df7c75a9f.png)


<!--
[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

![Alt text](relative/path/to/img.jpg?raw=true "Title")

 ## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details. -->


<!-- 
PROCESS CMDS
- npm i -D tailwindcss postcss autoprefixer //
- npx tailwindcss init -p //create configuration files (tailwind.config.js and postcss.config.js)  
- npm i react-infinite-scroll-component


Links
- npm i axios // adding axios 
- 
- -->
