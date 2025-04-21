import { CanMatchFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const roleGuard: CanMatchFn = () => {
  const router = inject(Router);
  const userRole = localStorage.getItem('userRole');
  
  if (userRole === 'admin') {
    return true;
  }
  
  return router.createUrlTree(['/admin/dashboard']);
};