import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _2269f97d = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _2281ddec = () => import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */).then(m => m.default || m)
const _9280f146 = () => import('../pages/blog/articlePage.vue' /* webpackChunkName: "pages/blog/articlePage" */).then(m => m.default || m)
const _25ef207c = () => import('../pages/blog/_slug.vue' /* webpackChunkName: "pages/blog/_slug" */).then(m => m.default || m)



const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/",
			component: _2269f97d,
			name: "index"
		},
		{
			path: "/blog",
			component: _2281ddec,
			name: "blog"
		},
		{
			path: "/blog/articlePage",
			component: _9280f146,
			name: "blog-articlePage"
		},
		{
			path: "/blog/:slug",
			component: _25ef207c,
			name: "blog-slug"
		}
    ],
    fallback: false
  })
}
