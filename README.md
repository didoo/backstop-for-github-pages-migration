# www.didoo.net — temporary static backstop

This repository is a **temporary, frozen copy** of my blog [www.didoo.net](https://www.didoo.net), served with GitHub Pages.

## Why it exists

The blog ran on WordPress at a shared hosting provider, and that hosting has been cancelled. I'm migrating the blog to a proper static site, built with [Eleventy](https://www.11ty.dev/) and deployed on GitHub Pages. That takes time, so this snapshot keeps the site online in the meantime, with all its URLs unchanged.

When the new site is ready, the `www.didoo.net` custom domain will move to the new repository, and this one will be archived.

## What's in it

The rendered HTML of every public page, downloaded from the live WordPress site on 9 November 2026, along with the theme's CSS, JS, images and uploaded media:

- all published posts (`/YYYY/MM/slug/`), the homepage and `/about/`
- the category pages (`/topics/…/`) and tag pages (`/tags/…/`)
- the "To BEM or not to BEM" interview series (`/to-bem-or-not-to-bem/`)

## Changes from the original pages

The pages are the WordPress output, with these changes so they work as plain static files:

- internal links and assets use root-relative URLs (`/…`) instead of `http://www.didoo.net/…`; only the canonical and social meta tags keep absolute URLs, now `https://`
- removed: RSS/Atom feeds, the search box, social sharing buttons, Google Analytics, and WordPress-only head tags (pingback, xmlrpc, REST API, shortlink, oEmbed, generator)
- removed the old `/permalinks/` files, and the links to them in a handful of 2006–2010 posts

## Known limitations

- no search, no RSS feed, no comments (comments were already closed)
- a few links that were already broken on the original site are still broken

## Publishing

GitHub Pages publishes the root of the `main` branch. The `CNAME` file sets the custom domain, and `.nojekyll` tells Pages to serve the files as they are, without running Jekyll.
