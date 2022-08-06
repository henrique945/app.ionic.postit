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
    like: {
      delete: '/note/{noteId}/like',
      create: '/note/{noteId}/like',
    }
  },
  users: {
    create: '/user',
  },
} as const;
