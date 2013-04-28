Submodules
-----------

This directory is innaccurately named, for now - at some point these should be git submodules of "production build" forks of github repos. That way, we'll be able to see and incorporate updates seamlessly, but maintaining our production build forks should allow us to scrape out documentation and example pages (not licenses or attribution, of course).

At the moment, these are git repos cloned inside of the main bvbootstrap git repo with the .git/ directory and .git files ignored.

So - don't make changes directly to any of these directories UNLESS you have them checked out from github and you're committing directly to their git repos.

Here's what we're pulling in currently:
* "production build" fork ofjquery-resize: [https://github.com/bazaarvoice/jquery-resize]
* "prouction build" fork of font-awesome: [https://github.com/bazaarvoice/Font-Awesome]
* [https://github.com/bazaarvoice/glyphs]
* [https://github.com/cloudhead/less.js]