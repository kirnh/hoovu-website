# HOOVU

A responsive, static editorial landing page for HOOVU. It uses plain HTML, CSS and JavaScript, with no build step or backend, so it can be hosted on GitHub Pages.

## Preview locally

From this folder, run:

```sh
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

## Curating imagery

Image URLs are collected in `script.js` in the `photos` object. Replace those values to curate the visual narrative. Each chapter now has a distinct plant: lotus, sunflower, orchid, fern, monstera, and anthurium. The images are real photographs served at responsive sizes through Unsplash's image CDN. For fully self-contained hosting, save curated images in `public/images/` and use relative paths in the photo map.

The “Notify me” control opens a compact signup panel. Its MailerLite embed slot is intentionally waiting for the account-specific form code; paste an email-only embedded form into `#mailerlite-form-slot` to activate subscriber collection. No API secret should be added to this static site.
