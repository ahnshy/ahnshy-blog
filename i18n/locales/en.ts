// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { defineI18nLocale } from 'vue-i18n'

export default defineI18nLocale((locale) => {
  return {
    seo: {
      homes: {
        title: 'Home',
        menuName: 'Home',
        description: '',
      },
      blogs: {
        title: 'Blog',
        menuName: 'Blog',
        description: '',
      },
      aboutMe: {
        title: 'About',
        menuName: 'About',
        description: '',
      },
      donations: {
        title: 'Donations',
        description: '',
      },
      links: {
        title: 'Links',
        description: '',
      },
    },
    me: {
      name: 'ahnshy',
      position: 'Software Engineer',
      description: ``,
    },
    labels: {
      categories: 'Categories',
      locales: {
        en: 'English',
        ko: 'Korean',
      },
      orders: {
        recent: 'Recent',
        old: 'Old',
        Asc: 'Ascending',
        Desc: 'Descending',
      },
    },
    categories: {
      programming: 'Programming',
    },
    tags: {
      algorithm: 'Algorithm',
    },
    welcome: 'Welcome',
    pages: {
      homes: {
        popularTags: 'Popular Tags',
      },
      donations: {
        thanks1: '',
        thanks2: '',
      },
    },
  }
})
