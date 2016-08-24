# smaesh.org
The Official Smaesh.org Website

## Installation
1. Clone this repo
1. Install [nvm](https://github.com/creationix/nvm#installation)
1. Install node (from within the cloned directory): `nvm i`
1. Install dependencies: `npm i`

## Running
### In development environments
1. Install nodemon: `npm i -g nodemon`
1. `npm run dev`
1. Go to [http://localhost:3000]()

### In production environments
```
npm start
```

## Creating new pages
1. Create a `pug` file in the `app/views` directory with a hyphen separated name. IE: `my-page.pug`. This will add the menu item "My Page".
1. Copy the following template code:
    ```pug
    extends ../layouts/base

    block title
      | My Page

    block content
      h1 My Page
    ```
1. Read up on how the [pug template language](http://jade-lang.com/reference/) works.
1. We're also using [Bootstrap](http://getbootstrap.com/). If you're unfamiliar with it, it's recommended to check it out.
