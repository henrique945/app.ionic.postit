export const apiRoutes = {
  auth: {
    login: '/auth/login',
  },
  notes: {
    me: '/note/me',
    create: '/note',
    delete: '/note/{noteId}',
    update: '/note/{noteId}',
    feed: '/note/feed',
    get: '/note/{noteId}',
    like: {
      delete: '/note/{noteId}/like',
      create: '/note/{noteId}/like',
    },
    comment: {
      create: '/note/{noteId}/comment',
    },
  },
  users: {
    create: '/user',
  },
} as const;
