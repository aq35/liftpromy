// src/router/router.d.ts

import { Router } from 'vue-router'; // Adjust the import path according to your actual router setup

declare module './router' {
  const router: Router;
  export default router;
}