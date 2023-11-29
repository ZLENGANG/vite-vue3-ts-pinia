import '@/views/index/index.vue';
import { RouteRecordRaw } from 'vue-router';
import Layout from '@/layout/index.vue';

export const baseRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    redirect: '/index',
    children: [
      {
        name: 'index',
        path: '/index',
        component: () => import('@/views/index/index.vue'),
        meta: {
          title: '首页',
          icon: 'ep:home-filled',
        },
      },
      {
        name: 'user',
        path: '/user',
        meta: {
          title: '用户管理',
          icon: 'ep:avatar',
        },
        redirect: '/user/list',
        children: [
          {
            name: 'user-list',
            path: '/user/list',
            component: () => import('@/views/user/index.vue'),
            meta: {
              title: '用户列表',
              icon: 'ep:avatar',
            },
          },
          {
            name: 'user-role',
            path: '/user/role',
            component: () => import('@/views/user/role.vue'),
            meta: {
              title: '角色列表',
              icon: 'ep:setting',
            },
          },
        ],
      },
      {
        name: 'external-link',
        path: '/external-link',
        meta: {
          title: '外部链接',
          icon: 'mdi:link-variant',
        },
        children: [
          {
            name: 'LinkGithubSrc',
            path: 'https://github.com/zclzone/vue-naive-admin',
            meta: {
              title: '源码 - github',
              icon: 'mdi:github',
            },
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录',
      noNeedLogin: true,
    },
  },
  {
    path: '/stock',
    component: () => import('@/views/stock/index.vue'),
    meta: {
      title: '随机股票',
    },
  },
];
