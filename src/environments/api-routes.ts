export const apiRoutes = {
  auth: {
    login: '/auth/login',
  },
  notes: {
    me: '/note/me',
  },
  users: {
    create: '/user',
  },
} as const;
