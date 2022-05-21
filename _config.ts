import lume from "lume/mod.ts";
import date from "lume/plugins/date.ts";
import esbuild from "lume/plugins/esbuild.ts";
import code_highlight from "lume/plugins/code_highlight.ts";
import inline from "lume/plugins/inline.ts";
import jsx from "lume/plugins/jsx.ts";

const site = lume({
  src: './pages',
  dest: './docs',
  prettyUrls: 'no-html-extension'
});
site.data('layout', 'layout.njk');

site.use(esbuild());
site.use(code_highlight());
site.use(date());
site.use(inline());
site.use(jsx());
site.copy("assets", ".");
export default site;
