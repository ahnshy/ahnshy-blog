// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { defineI18nLocale } from 'vue-i18n'
export default defineI18nLocale((locale) => {
  return {
    seo: {
      homes: {
        title: '홈',
        menuName: '홈',
        description: '',
      },
      blogs: {
        title: '블로그',
        menuName: '블로그',
        description: '',
      },
      aboutMe: {
        title: '소개',
        menuName: '소개',
        description: '',
      },
      donations: {
        title: '후원',
        description: '',
      },
      links: {
        title: '링크',
        description: '',
      },
    },
    me: {
      name: 'ahnshy',
      position: '소프트웨어 엔지니어',
      description: ``
    },
    labels: {
      categories: '카테고리',
      locales: {
        en: '영어',
        ko: '한국어'
      },
      orders: {
        recent: '최신 순',
        old: '오래된 순',
        Asc: '오름차순',
        Desc: '내림차순'
      }
    },
    categories: {
      programming: '프로그래밍'
    },
    tags: {
      algorithm: '알고리즘',
    },
    welcome: '안녕',
    pages: {
      homes: {
        popularTags: '인기 태그',
      },
      donations: {
        thanks1: '',
        thanks2: ''
      }
    },
  }
})
