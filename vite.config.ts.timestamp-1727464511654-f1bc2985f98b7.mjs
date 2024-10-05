// vite.config.ts
import { defineConfig } from "file:///C:/Users/INNOVACION/Desktop/gestionapp/node_modules/vite/dist/node/index.js";
import { qwikVite } from "file:///C:/Users/INNOVACION/Desktop/gestionapp/node_modules/@builder.io/qwik/dist/optimizer.mjs";
import { qwikCity } from "file:///C:/Users/INNOVACION/Desktop/gestionapp/node_modules/@builder.io/qwik-city/lib/vite/index.mjs";
import tsconfigPaths from "file:///C:/Users/INNOVACION/Desktop/gestionapp/node_modules/vite-tsconfig-paths/dist/index.mjs";

// package.json
var package_default = {
  name: "my-qwik-empty-starter",
  description: "Blank project with routing included",
  engines: {
    node: "^18.17.0 || ^20.3.0 || >=21.0.0"
  },
  "engines-annotation": "Mostly required by sharp which needs a Node-API v9 compatible runtime",
  private: true,
  trustedDependencies: [
    "sharp"
  ],
  "trustedDependencies-annotation": "Needed for bun to allow running install scripts",
  type: "module",
  scripts: {
    build: "qwik build",
    "build.client": "vite build",
    "build.preview": "vite build --ssr src/entry.preview.tsx",
    "build.types": "tsc --incremental --noEmit",
    deploy: `echo 'Run "npm run qwik add" to install a server adapter'`,
    dev: "vite --mode ssr",
    "dev.debug": "node --inspect-brk ./node_modules/vite/bin/vite.js --mode ssr --force",
    fmt: "prettier --write .",
    "fmt.check": "prettier --check .",
    lint: 'eslint "src/**/*.ts*"',
    preview: "qwik build preview && vite preview --open",
    start: "vite --open --mode ssr",
    qwik: "qwik"
  },
  devDependencies: {
    "@builder.io/qwik": "^1.9.0",
    "@builder.io/qwik-city": "^1.9.0",
    "@qwikest/icons": "^0.0.13",
    "@types/eslint": "8.56.10",
    "@types/node": "20.14.11",
    "@typescript-eslint/eslint-plugin": "7.16.1",
    "@typescript-eslint/parser": "7.16.1",
    autoprefixer: "^10.4.20",
    eslint: "8.57.0",
    "eslint-plugin-qwik": "^1.9.0",
    flowbite: "^2.5.1",
    "flowbite-qwik": "^0.37.3",
    postcss: "^8.4.47",
    prettier: "3.3.3",
    "prettier-plugin-tailwindcss": "^0.5.4",
    tailwindcss: "^3.4.13",
    typescript: "5.4.5",
    undici: "*",
    vite: "5.3.5",
    "vite-tsconfig-paths": "^4.2.1"
  }
};

// vite.config.ts
var { dependencies = {}, devDependencies = {} } = package_default;
errorOnDuplicatesPkgDeps(devDependencies, dependencies);
var vite_config_default = defineConfig(({ command, mode }) => {
  return {
    plugins: [qwikCity(), qwikVite(), tsconfigPaths()],
    // This tells Vite which dependencies to pre-build in dev mode.
    optimizeDeps: {
      // Put problematic deps that break bundling here, mostly those with binaries.
      // For example ['better-sqlite3'] if you use that in server functions.
      exclude: []
    },
    /**
     * This is an advanced setting. It improves the bundling of your server code. To use it, make sure you understand when your consumed packages are dependencies or dev dependencies. (otherwise things will break in production)
     */
    // ssr:
    //   command === "build" && mode === "production"
    //     ? {
    //         // All dev dependencies should be bundled in the server build
    //         noExternal: Object.keys(devDependencies),
    //         // Anything marked as a dependency will not be bundled
    //         // These should only be production binary deps (including deps of deps), CLI deps, and their module graph
    //         // If a dep-of-dep needs to be external, add it here
    //         // For example, if something uses `bcrypt` but you don't have it as a dep, you can write
    //         // external: [...Object.keys(dependencies), 'bcrypt']
    //         external: Object.keys(dependencies),
    //       }
    //     : undefined,
    server: {
      headers: {
        // Don't cache the server response in dev mode
        "Cache-Control": "public, max-age=0"
      }
    },
    preview: {
      headers: {
        // Do cache the server response in preview (non-adapter production build)
        "Cache-Control": "public, max-age=600"
      }
    }
  };
});
function errorOnDuplicatesPkgDeps(devDependencies2, dependencies2) {
  let msg = "";
  const duplicateDeps = Object.keys(devDependencies2).filter(
    (dep) => dependencies2[dep]
  );
  const qwikPkg = Object.keys(dependencies2).filter(
    (value) => /qwik/i.test(value)
  );
  msg = `Move qwik packages ${qwikPkg.join(", ")} to devDependencies`;
  if (qwikPkg.length > 0) {
    throw new Error(msg);
  }
  msg = `
    Warning: The dependency "${duplicateDeps.join(", ")}" is listed in both "devDependencies" and "dependencies".
    Please move the duplicated dependencies to "devDependencies" only and remove it from "dependencies"
  `;
  if (duplicateDeps.length > 0) {
    throw new Error(msg);
  }
}
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGFja2FnZS5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcSU5OT1ZBQ0lPTlxcXFxEZXNrdG9wXFxcXGdlc3Rpb25hcHBcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXElOTk9WQUNJT05cXFxcRGVza3RvcFxcXFxnZXN0aW9uYXBwXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9JTk5PVkFDSU9OL0Rlc2t0b3AvZ2VzdGlvbmFwcC92aXRlLmNvbmZpZy50c1wiOy8qKlxuICogVGhpcyBpcyB0aGUgYmFzZSBjb25maWcgZm9yIHZpdGUuXG4gKiBXaGVuIGJ1aWxkaW5nLCB0aGUgYWRhcHRlciBjb25maWcgaXMgdXNlZCB3aGljaCBsb2FkcyB0aGlzIGZpbGUgYW5kIGV4dGVuZHMgaXQuXG4gKi9cbmltcG9ydCB7IGRlZmluZUNvbmZpZywgdHlwZSBVc2VyQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCB7IHF3aWtWaXRlIH0gZnJvbSBcIkBidWlsZGVyLmlvL3F3aWsvb3B0aW1pemVyXCI7XG5pbXBvcnQgeyBxd2lrQ2l0eSB9IGZyb20gXCJAYnVpbGRlci5pby9xd2lrLWNpdHkvdml0ZVwiO1xuaW1wb3J0IHRzY29uZmlnUGF0aHMgZnJvbSBcInZpdGUtdHNjb25maWctcGF0aHNcIjtcbmltcG9ydCBwa2cgZnJvbSBcIi4vcGFja2FnZS5qc29uXCI7XG5cbnR5cGUgUGtnRGVwID0gUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcbmNvbnN0IHsgZGVwZW5kZW5jaWVzID0ge30sIGRldkRlcGVuZGVuY2llcyA9IHt9IH0gPSBwa2cgYXMgYW55IGFzIHtcbiAgZGVwZW5kZW5jaWVzOiBQa2dEZXA7XG4gIGRldkRlcGVuZGVuY2llczogUGtnRGVwO1xuICBba2V5OiBzdHJpbmddOiB1bmtub3duO1xufTtcbmVycm9yT25EdXBsaWNhdGVzUGtnRGVwcyhkZXZEZXBlbmRlbmNpZXMsIGRlcGVuZGVuY2llcyk7XG5cbi8qKlxuICogTm90ZSB0aGF0IFZpdGUgbm9ybWFsbHkgc3RhcnRzIGZyb20gYGluZGV4Lmh0bWxgIGJ1dCB0aGUgcXdpa0NpdHkgcGx1Z2luIG1ha2VzIHN0YXJ0IGF0IGBzcmMvZW50cnkuc3NyLnRzeGAgaW5zdGVhZC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IGNvbW1hbmQsIG1vZGUgfSk6IFVzZXJDb25maWcgPT4ge1xuICByZXR1cm4ge1xuICAgIHBsdWdpbnM6IFtxd2lrQ2l0eSgpLCBxd2lrVml0ZSgpLCB0c2NvbmZpZ1BhdGhzKCldLFxuICAgIC8vIFRoaXMgdGVsbHMgVml0ZSB3aGljaCBkZXBlbmRlbmNpZXMgdG8gcHJlLWJ1aWxkIGluIGRldiBtb2RlLlxuICAgIG9wdGltaXplRGVwczoge1xuICAgICAgLy8gUHV0IHByb2JsZW1hdGljIGRlcHMgdGhhdCBicmVhayBidW5kbGluZyBoZXJlLCBtb3N0bHkgdGhvc2Ugd2l0aCBiaW5hcmllcy5cbiAgICAgIC8vIEZvciBleGFtcGxlIFsnYmV0dGVyLXNxbGl0ZTMnXSBpZiB5b3UgdXNlIHRoYXQgaW4gc2VydmVyIGZ1bmN0aW9ucy5cbiAgICAgIGV4Y2x1ZGU6IFtdLFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGlzIGFuIGFkdmFuY2VkIHNldHRpbmcuIEl0IGltcHJvdmVzIHRoZSBidW5kbGluZyBvZiB5b3VyIHNlcnZlciBjb2RlLiBUbyB1c2UgaXQsIG1ha2Ugc3VyZSB5b3UgdW5kZXJzdGFuZCB3aGVuIHlvdXIgY29uc3VtZWQgcGFja2FnZXMgYXJlIGRlcGVuZGVuY2llcyBvciBkZXYgZGVwZW5kZW5jaWVzLiAob3RoZXJ3aXNlIHRoaW5ncyB3aWxsIGJyZWFrIGluIHByb2R1Y3Rpb24pXG4gICAgICovXG4gICAgLy8gc3NyOlxuICAgIC8vICAgY29tbWFuZCA9PT0gXCJidWlsZFwiICYmIG1vZGUgPT09IFwicHJvZHVjdGlvblwiXG4gICAgLy8gICAgID8ge1xuICAgIC8vICAgICAgICAgLy8gQWxsIGRldiBkZXBlbmRlbmNpZXMgc2hvdWxkIGJlIGJ1bmRsZWQgaW4gdGhlIHNlcnZlciBidWlsZFxuICAgIC8vICAgICAgICAgbm9FeHRlcm5hbDogT2JqZWN0LmtleXMoZGV2RGVwZW5kZW5jaWVzKSxcbiAgICAvLyAgICAgICAgIC8vIEFueXRoaW5nIG1hcmtlZCBhcyBhIGRlcGVuZGVuY3kgd2lsbCBub3QgYmUgYnVuZGxlZFxuICAgIC8vICAgICAgICAgLy8gVGhlc2Ugc2hvdWxkIG9ubHkgYmUgcHJvZHVjdGlvbiBiaW5hcnkgZGVwcyAoaW5jbHVkaW5nIGRlcHMgb2YgZGVwcyksIENMSSBkZXBzLCBhbmQgdGhlaXIgbW9kdWxlIGdyYXBoXG4gICAgLy8gICAgICAgICAvLyBJZiBhIGRlcC1vZi1kZXAgbmVlZHMgdG8gYmUgZXh0ZXJuYWwsIGFkZCBpdCBoZXJlXG4gICAgLy8gICAgICAgICAvLyBGb3IgZXhhbXBsZSwgaWYgc29tZXRoaW5nIHVzZXMgYGJjcnlwdGAgYnV0IHlvdSBkb24ndCBoYXZlIGl0IGFzIGEgZGVwLCB5b3UgY2FuIHdyaXRlXG4gICAgLy8gICAgICAgICAvLyBleHRlcm5hbDogWy4uLk9iamVjdC5rZXlzKGRlcGVuZGVuY2llcyksICdiY3J5cHQnXVxuICAgIC8vICAgICAgICAgZXh0ZXJuYWw6IE9iamVjdC5rZXlzKGRlcGVuZGVuY2llcyksXG4gICAgLy8gICAgICAgfVxuICAgIC8vICAgICA6IHVuZGVmaW5lZCxcblxuICAgIHNlcnZlcjoge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICAvLyBEb24ndCBjYWNoZSB0aGUgc2VydmVyIHJlc3BvbnNlIGluIGRldiBtb2RlXG4gICAgICAgIFwiQ2FjaGUtQ29udHJvbFwiOiBcInB1YmxpYywgbWF4LWFnZT0wXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgcHJldmlldzoge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICAvLyBEbyBjYWNoZSB0aGUgc2VydmVyIHJlc3BvbnNlIGluIHByZXZpZXcgKG5vbi1hZGFwdGVyIHByb2R1Y3Rpb24gYnVpbGQpXG4gICAgICAgIFwiQ2FjaGUtQ29udHJvbFwiOiBcInB1YmxpYywgbWF4LWFnZT02MDBcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcbn0pO1xuXG4vLyAqKiogdXRpbHMgKioqXG5cbi8qKlxuICogRnVuY3Rpb24gdG8gaWRlbnRpZnkgZHVwbGljYXRlIGRlcGVuZGVuY2llcyBhbmQgdGhyb3cgYW4gZXJyb3JcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZXZEZXBlbmRlbmNpZXMgLSBMaXN0IG9mIGRldmVsb3BtZW50IGRlcGVuZGVuY2llc1xuICogQHBhcmFtIHtPYmplY3R9IGRlcGVuZGVuY2llcyAtIExpc3Qgb2YgcHJvZHVjdGlvbiBkZXBlbmRlbmNpZXNcbiAqL1xuZnVuY3Rpb24gZXJyb3JPbkR1cGxpY2F0ZXNQa2dEZXBzKFxuICBkZXZEZXBlbmRlbmNpZXM6IFBrZ0RlcCxcbiAgZGVwZW5kZW5jaWVzOiBQa2dEZXAsXG4pIHtcbiAgbGV0IG1zZyA9IFwiXCI7XG4gIC8vIENyZWF0ZSBhbiBhcnJheSAnZHVwbGljYXRlRGVwcycgYnkgZmlsdGVyaW5nIGRldkRlcGVuZGVuY2llcy5cbiAgLy8gSWYgYSBkZXBlbmRlbmN5IGFsc28gZXhpc3RzIGluIGRlcGVuZGVuY2llcywgaXQgaXMgY29uc2lkZXJlZCBhIGR1cGxpY2F0ZS5cbiAgY29uc3QgZHVwbGljYXRlRGVwcyA9IE9iamVjdC5rZXlzKGRldkRlcGVuZGVuY2llcykuZmlsdGVyKFxuICAgIChkZXApID0+IGRlcGVuZGVuY2llc1tkZXBdLFxuICApO1xuXG4gIC8vIGluY2x1ZGUgYW55IGtub3duIHF3aWsgcGFja2FnZXNcbiAgY29uc3QgcXdpa1BrZyA9IE9iamVjdC5rZXlzKGRlcGVuZGVuY2llcykuZmlsdGVyKCh2YWx1ZSkgPT5cbiAgICAvcXdpay9pLnRlc3QodmFsdWUpLFxuICApO1xuXG4gIC8vIGFueSBlcnJvcnMgZm9yIG1pc3NpbmcgXCJxd2lrLWNpdHktcGxhblwiXG4gIC8vIFtQTFVHSU5fRVJST1JdOiBJbnZhbGlkIG1vZHVsZSBcIkBxd2lrLWNpdHktcGxhblwiIGlzIG5vdCBhIHZhbGlkIHBhY2thZ2VcbiAgbXNnID0gYE1vdmUgcXdpayBwYWNrYWdlcyAke3F3aWtQa2cuam9pbihcIiwgXCIpfSB0byBkZXZEZXBlbmRlbmNpZXNgO1xuXG4gIGlmIChxd2lrUGtnLmxlbmd0aCA+IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IobXNnKTtcbiAgfVxuXG4gIC8vIEZvcm1hdCB0aGUgZXJyb3IgbWVzc2FnZSB3aXRoIHRoZSBkdXBsaWNhdGVzIGxpc3QuXG4gIC8vIFRoZSBgam9pbmAgZnVuY3Rpb24gaXMgdXNlZCB0byByZXByZXNlbnQgdGhlIGVsZW1lbnRzIG9mIHRoZSAnZHVwbGljYXRlRGVwcycgYXJyYXkgYXMgYSBjb21tYS1zZXBhcmF0ZWQgc3RyaW5nLlxuICBtc2cgPSBgXG4gICAgV2FybmluZzogVGhlIGRlcGVuZGVuY3kgXCIke2R1cGxpY2F0ZURlcHMuam9pbihcIiwgXCIpfVwiIGlzIGxpc3RlZCBpbiBib3RoIFwiZGV2RGVwZW5kZW5jaWVzXCIgYW5kIFwiZGVwZW5kZW5jaWVzXCIuXG4gICAgUGxlYXNlIG1vdmUgdGhlIGR1cGxpY2F0ZWQgZGVwZW5kZW5jaWVzIHRvIFwiZGV2RGVwZW5kZW5jaWVzXCIgb25seSBhbmQgcmVtb3ZlIGl0IGZyb20gXCJkZXBlbmRlbmNpZXNcIlxuICBgO1xuXG4gIC8vIFRocm93IGFuIGVycm9yIHdpdGggdGhlIGNvbnN0cnVjdGVkIG1lc3NhZ2UuXG4gIGlmIChkdXBsaWNhdGVEZXBzLmxlbmd0aCA+IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IobXNnKTtcbiAgfVxufVxuIiwgIntcbiAgXCJuYW1lXCI6IFwibXktcXdpay1lbXB0eS1zdGFydGVyXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJCbGFuayBwcm9qZWN0IHdpdGggcm91dGluZyBpbmNsdWRlZFwiLFxuICBcImVuZ2luZXNcIjoge1xuICAgIFwibm9kZVwiOiBcIl4xOC4xNy4wIHx8IF4yMC4zLjAgfHwgPj0yMS4wLjBcIlxuICB9LFxuICBcImVuZ2luZXMtYW5ub3RhdGlvblwiOiBcIk1vc3RseSByZXF1aXJlZCBieSBzaGFycCB3aGljaCBuZWVkcyBhIE5vZGUtQVBJIHY5IGNvbXBhdGlibGUgcnVudGltZVwiLFxuICBcInByaXZhdGVcIjogdHJ1ZSxcbiAgXCJ0cnVzdGVkRGVwZW5kZW5jaWVzXCI6IFtcbiAgICBcInNoYXJwXCJcbiAgXSxcbiAgXCJ0cnVzdGVkRGVwZW5kZW5jaWVzLWFubm90YXRpb25cIjogXCJOZWVkZWQgZm9yIGJ1biB0byBhbGxvdyBydW5uaW5nIGluc3RhbGwgc2NyaXB0c1wiLFxuICBcInR5cGVcIjogXCJtb2R1bGVcIixcbiAgXCJzY3JpcHRzXCI6IHtcbiAgICBcImJ1aWxkXCI6IFwicXdpayBidWlsZFwiLFxuICAgIFwiYnVpbGQuY2xpZW50XCI6IFwidml0ZSBidWlsZFwiLFxuICAgIFwiYnVpbGQucHJldmlld1wiOiBcInZpdGUgYnVpbGQgLS1zc3Igc3JjL2VudHJ5LnByZXZpZXcudHN4XCIsXG4gICAgXCJidWlsZC50eXBlc1wiOiBcInRzYyAtLWluY3JlbWVudGFsIC0tbm9FbWl0XCIsXG4gICAgXCJkZXBsb3lcIjogXCJlY2hvICdSdW4gXFxcIm5wbSBydW4gcXdpayBhZGRcXFwiIHRvIGluc3RhbGwgYSBzZXJ2ZXIgYWRhcHRlcidcIixcbiAgICBcImRldlwiOiBcInZpdGUgLS1tb2RlIHNzclwiLFxuICAgIFwiZGV2LmRlYnVnXCI6IFwibm9kZSAtLWluc3BlY3QtYnJrIC4vbm9kZV9tb2R1bGVzL3ZpdGUvYmluL3ZpdGUuanMgLS1tb2RlIHNzciAtLWZvcmNlXCIsXG4gICAgXCJmbXRcIjogXCJwcmV0dGllciAtLXdyaXRlIC5cIixcbiAgICBcImZtdC5jaGVja1wiOiBcInByZXR0aWVyIC0tY2hlY2sgLlwiLFxuICAgIFwibGludFwiOiBcImVzbGludCBcXFwic3JjLyoqLyoudHMqXFxcIlwiLFxuICAgIFwicHJldmlld1wiOiBcInF3aWsgYnVpbGQgcHJldmlldyAmJiB2aXRlIHByZXZpZXcgLS1vcGVuXCIsXG4gICAgXCJzdGFydFwiOiBcInZpdGUgLS1vcGVuIC0tbW9kZSBzc3JcIixcbiAgICBcInF3aWtcIjogXCJxd2lrXCJcbiAgfSxcbiAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQGJ1aWxkZXIuaW8vcXdpa1wiOiBcIl4xLjkuMFwiLFxuICAgIFwiQGJ1aWxkZXIuaW8vcXdpay1jaXR5XCI6IFwiXjEuOS4wXCIsXG4gICAgXCJAcXdpa2VzdC9pY29uc1wiOiBcIl4wLjAuMTNcIixcbiAgICBcIkB0eXBlcy9lc2xpbnRcIjogXCI4LjU2LjEwXCIsXG4gICAgXCJAdHlwZXMvbm9kZVwiOiBcIjIwLjE0LjExXCIsXG4gICAgXCJAdHlwZXNjcmlwdC1lc2xpbnQvZXNsaW50LXBsdWdpblwiOiBcIjcuMTYuMVwiLFxuICAgIFwiQHR5cGVzY3JpcHQtZXNsaW50L3BhcnNlclwiOiBcIjcuMTYuMVwiLFxuICAgIFwiYXV0b3ByZWZpeGVyXCI6IFwiXjEwLjQuMjBcIixcbiAgICBcImVzbGludFwiOiBcIjguNTcuMFwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1xd2lrXCI6IFwiXjEuOS4wXCIsXG4gICAgXCJmbG93Yml0ZVwiOiBcIl4yLjUuMVwiLFxuICAgIFwiZmxvd2JpdGUtcXdpa1wiOiBcIl4wLjM3LjNcIixcbiAgICBcInBvc3Rjc3NcIjogXCJeOC40LjQ3XCIsXG4gICAgXCJwcmV0dGllclwiOiBcIjMuMy4zXCIsXG4gICAgXCJwcmV0dGllci1wbHVnaW4tdGFpbHdpbmRjc3NcIjogXCJeMC41LjRcIixcbiAgICBcInRhaWx3aW5kY3NzXCI6IFwiXjMuNC4xM1wiLFxuICAgIFwidHlwZXNjcmlwdFwiOiBcIjUuNC41XCIsXG4gICAgXCJ1bmRpY2lcIjogXCIqXCIsXG4gICAgXCJ2aXRlXCI6IFwiNS4zLjVcIixcbiAgICBcInZpdGUtdHNjb25maWctcGF0aHNcIjogXCJeNC4yLjFcIlxuICB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBSUEsU0FBUyxvQkFBcUM7QUFDOUMsU0FBUyxnQkFBZ0I7QUFDekIsU0FBUyxnQkFBZ0I7QUFDekIsT0FBTyxtQkFBbUI7OztBQ1AxQjtBQUFBLEVBQ0UsTUFBUTtBQUFBLEVBQ1IsYUFBZTtBQUFBLEVBQ2YsU0FBVztBQUFBLElBQ1QsTUFBUTtBQUFBLEVBQ1Y7QUFBQSxFQUNBLHNCQUFzQjtBQUFBLEVBQ3RCLFNBQVc7QUFBQSxFQUNYLHFCQUF1QjtBQUFBLElBQ3JCO0FBQUEsRUFDRjtBQUFBLEVBQ0Esa0NBQWtDO0FBQUEsRUFDbEMsTUFBUTtBQUFBLEVBQ1IsU0FBVztBQUFBLElBQ1QsT0FBUztBQUFBLElBQ1QsZ0JBQWdCO0FBQUEsSUFDaEIsaUJBQWlCO0FBQUEsSUFDakIsZUFBZTtBQUFBLElBQ2YsUUFBVTtBQUFBLElBQ1YsS0FBTztBQUFBLElBQ1AsYUFBYTtBQUFBLElBQ2IsS0FBTztBQUFBLElBQ1AsYUFBYTtBQUFBLElBQ2IsTUFBUTtBQUFBLElBQ1IsU0FBVztBQUFBLElBQ1gsT0FBUztBQUFBLElBQ1QsTUFBUTtBQUFBLEVBQ1Y7QUFBQSxFQUNBLGlCQUFtQjtBQUFBLElBQ2pCLG9CQUFvQjtBQUFBLElBQ3BCLHlCQUF5QjtBQUFBLElBQ3pCLGtCQUFrQjtBQUFBLElBQ2xCLGlCQUFpQjtBQUFBLElBQ2pCLGVBQWU7QUFBQSxJQUNmLG9DQUFvQztBQUFBLElBQ3BDLDZCQUE2QjtBQUFBLElBQzdCLGNBQWdCO0FBQUEsSUFDaEIsUUFBVTtBQUFBLElBQ1Ysc0JBQXNCO0FBQUEsSUFDdEIsVUFBWTtBQUFBLElBQ1osaUJBQWlCO0FBQUEsSUFDakIsU0FBVztBQUFBLElBQ1gsVUFBWTtBQUFBLElBQ1osK0JBQStCO0FBQUEsSUFDL0IsYUFBZTtBQUFBLElBQ2YsWUFBYztBQUFBLElBQ2QsUUFBVTtBQUFBLElBQ1YsTUFBUTtBQUFBLElBQ1IsdUJBQXVCO0FBQUEsRUFDekI7QUFDRjs7O0FEdkNBLElBQU0sRUFBRSxlQUFlLENBQUMsR0FBRyxrQkFBa0IsQ0FBQyxFQUFFLElBQUk7QUFLcEQseUJBQXlCLGlCQUFpQixZQUFZO0FBS3RELElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsU0FBUyxLQUFLLE1BQWtCO0FBQzdELFNBQU87QUFBQSxJQUNMLFNBQVMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxHQUFHLGNBQWMsQ0FBQztBQUFBO0FBQUEsSUFFakQsY0FBYztBQUFBO0FBQUE7QUFBQSxNQUdaLFNBQVMsQ0FBQztBQUFBLElBQ1o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbUJBLFFBQVE7QUFBQSxNQUNOLFNBQVM7QUFBQTtBQUFBLFFBRVAsaUJBQWlCO0FBQUEsTUFDbkI7QUFBQSxJQUNGO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxTQUFTO0FBQUE7QUFBQSxRQUVQLGlCQUFpQjtBQUFBLE1BQ25CO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDO0FBU0QsU0FBUyx5QkFDUEEsa0JBQ0FDLGVBQ0E7QUFDQSxNQUFJLE1BQU07QUFHVixRQUFNLGdCQUFnQixPQUFPLEtBQUtELGdCQUFlLEVBQUU7QUFBQSxJQUNqRCxDQUFDLFFBQVFDLGNBQWEsR0FBRztBQUFBLEVBQzNCO0FBR0EsUUFBTSxVQUFVLE9BQU8sS0FBS0EsYUFBWSxFQUFFO0FBQUEsSUFBTyxDQUFDLFVBQ2hELFFBQVEsS0FBSyxLQUFLO0FBQUEsRUFDcEI7QUFJQSxRQUFNLHNCQUFzQixRQUFRLEtBQUssSUFBSSxDQUFDO0FBRTlDLE1BQUksUUFBUSxTQUFTLEdBQUc7QUFDdEIsVUFBTSxJQUFJLE1BQU0sR0FBRztBQUFBLEVBQ3JCO0FBSUEsUUFBTTtBQUFBLCtCQUN1QixjQUFjLEtBQUssSUFBSSxDQUFDO0FBQUE7QUFBQTtBQUtyRCxNQUFJLGNBQWMsU0FBUyxHQUFHO0FBQzVCLFVBQU0sSUFBSSxNQUFNLEdBQUc7QUFBQSxFQUNyQjtBQUNGOyIsCiAgIm5hbWVzIjogWyJkZXZEZXBlbmRlbmNpZXMiLCAiZGVwZW5kZW5jaWVzIl0KfQo=
