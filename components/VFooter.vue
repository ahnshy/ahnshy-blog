<script setup lang="ts">
const date = new Date();
</script>

<template>
  <footer class="footer relative pt-10 pb-10 lg:pb-24 lg:pt-28">
    <div
      class="mx-auto px-6 flex flex-col items-center lg:items-start lg:grid lg:grid-cols-6 lg:grid-rows-1 lg:max-w-[75rem] gap-20"
    >
      <section class="lg:col-span-2 my-10 lg:my-0 text-center lg:text-left">
        <img
          src="/nuxt.svg"
          alt="Nuxt logo"
          class="w-12 h-12 mb-5 block mx-auto lg:mx-0"
        />
        <h2 class="text-2xl font-bold mb-5">Templatr</h2>
        <p class="text-xl text-gray-600 dark:text-gray-300">
          {{ $t("footer.description") }}
        </p>
      </section>
      <nav
        class="row-start-2 row-span-2 lg:row-start-1 lg:col-start-3 lg:row-span-full text-center lg:text-left text-lg font-semibold lg:text-base lg:font-normal"
        aria-labelledby="sitemap"
      >
        <h2 id="sitemap">{{ $t("footer.sitemap.title") }}</h2>
        <ul>
          <li>
            <NuxtLink to="/">{{ $t("footer.sitemap.homepage") }}</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/guide">{{ $t("footer.sitemap.guide") }}</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/demo">{{ $t("footer.sitemap.demo") }}</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/resources">{{
              $t("footer.sitemap.resources")
            }}</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/blog/my-first-blog">{{
              $t("footer.sitemap.blogs")
            }}</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/credits">{{
              $t("footer.sitemap.credits")
            }}</NuxtLink>
          </li>
        </ul>
      </nav>
      <nav
        class="lg:row-start-1 lg:col-start-4 lg:row-span-full text-center lg:text-left text-lg font-semibold lg:text-base lg:font-normal"
        aria-labelledby="projects"
      >
        <h2 id="projects">{{ $t("footer.projects.title") }}</h2>

        <ul>
          <li>
            <a
              href="https://github.com/data-miner00/notes"
              :title="$t('footer.projects.titles.notes')"
              >Notes</a
            >
          </li>
          <li>
            <a
              href="https://github.com/data-miner00/blog"
              :title="$t('footer.projects.titles.blog')"
              >Blog</a
            >
          </li>
          <li>
            <a
              href="https://github.com/data-miner00/portfolio"
              :title="$t('footer.projects.titles.portfolio')"
              >Portfolio</a
            >
          </li>
          <li>
            <a
              href="https://github.com/data-miner00/sitemap.pretty"
              :title="$t('footer.projects.titles.sitemap_prettier')"
              >Sitemap Prettier</a
            >
          </li>
          <li>
            <a
              href="https://github.com/data-miner00/Linker"
              :title="$t('footer.projects.titles.linker')"
              >Linker</a
            >
          </li>
          <li>
            <a
              href="https://github.com/data-miner00/Sway"
              :title="$t('footer.projects.titles.sway')"
              >Sway</a
            >
          </li>
          <li>
            <a
              href="https://github.com/data-miner00/ng-hackernews"
              :title="$t('footer.projects.titles.hacker_times')"
              >The Hacker Times</a
            >
          </li>
          <li>
            <a
              href="https://github.com/data-miner00/KeyLogger"
              :title="$t('footer.projects.titles.keylogger')"
              >KeyLogger</a
            >
          </li>
          <li>
            <a
              href="https://github.com/data-miner00/ImageSquared"
              :title="$t('footer.projects.titles.image_squared')"
              >Image Squared</a
            >
          </li>
          <li>
            <a
              href="https://github.com/data-miner00/url-shortener"
              :title="$t('footer.projects.titles.url_shortener')"
              >Url Shortener</a
            >
          </li>
        </ul>
      </nav>
      <nav
        class="lg:row-start-1 lg:col-start-5 lg:row-span-full text-center lg:text-left text-lg font-semibold lg:text-base lg:font-normal"
        aria-labelledby="templates"
      >
        <h2 id="templates">{{ $t("footer.templates.title") }}</h2>

        <ul>
          <li>
            <a href="https://github.com/data-miner00/React-Esbuild-Template">{{
              $t("footer.templates.react_esbuild")
            }}</a>
          </li>
          <li>
            <a href="https://github.com/data-miner00/react-rescript-template">{{
              $t("footer.templates.react_rescript")
            }}</a>
          </li>
          <li>
            <a href="https://github.com/data-miner00/algorand-react-template">{{
              $t("footer.templates.algorand_react")
            }}</a>
          </li>
        </ul>
      </nav>
      <nav
        class="lg:row-start-1 lg:col-start-6 lg:row-span-full text-center lg:text-left text-lg font-semibold lg:text-base lg:font-normal"
        aria-labelledby="technologies"
      >
        <h2 id="technologies">{{ $t("footer.technologies.title") }}</h2>

        <ul>
          <li>
            <a href="https://vuejs.org/">Vue.js</a>
          </li>
          <li>
            <a href="https://nuxt.com">Nuxt.js</a>
          </li>
          <li>
            <a href="https://content.nuxtjs.org/">Nuxt Content</a>
          </li>
          <li>
            <a href="https://tailwindcss.com/">Tailwind CSS</a>
          </li>
          <li>
            <a href="https://tailwindcss.nuxt.dev/">Nuxt Tailwind</a>
          </li>
          <li>
            <a href="https://www.markdownguide.org/getting-started/"
              >Markdown</a
            >
          </li>
          <li>
            <a href="https://pnpm.io/">Pnpm</a>
          </li>
        </ul>
      </nav>
    </div>
    <footer
      class="pt-12 mx-auto px-6 lg:max-w-[75rem] text-gray-400 text-sm text-center lg:text-left"
    >
      Templatr &copy; {{ date.getFullYear() }} by Shaun. All rights unreserved.
    </footer>
  </footer>
</template>

<style lang="scss" scoped>
.footer::before {
  --mask-color: #000;
  --background-color: #fafafa;
  content: "";
  position: absolute;
  inset: 0;
  mask-image: linear-gradient(
    transparent,
    var(--mask-color),
    var(--mask-color)
  );
  background-color: var(--background-color);
  z-index: -1;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpolygon fill-rule='evenodd' points='8 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4'/%3E%3C/g%3E%3C/svg%3E");
}

.dark .footer::before {
  --mask-color: #fff;
  --background-color: #1e293b;
}

nav {
  @apply flex flex-col gap-2;

  h2 {
    @apply font-semibold mb-5 text-gray-700 dark:text-gray-200;
  }

  a {
    @apply text-gray-500 dark:text-gray-400 block my-2;

    &:hover {
      @apply text-green-600;
    }
  }
}
</style>
