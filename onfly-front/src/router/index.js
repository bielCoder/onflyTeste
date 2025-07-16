import DashboardComponent from '@/components/dashboard.component/DashboardComponent';
import ForgotPasswordComponent from '@/components/auth.component/forgot-password.component/ForgotPasswordComponent';
import LoginComponent from '@/components/auth.component/login.component/LoginComponent';
import RegisterComponent from '@/components/auth.component/register.component/RegisterComponent';
import TokenComponent from '@/components/auth.component/token.component/TokenComponent';
import { createRouter, createWebHistory } from 'vue-router';


const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginComponent
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterComponent
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent
  },
  {
    path: '/token',
    name: 'Token',
    component: TokenComponent
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPasswordComponent
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const publicPages = ['Login', 'Register', 'ForgotPassword', 'Token'];
  const authRequired = !publicPages.includes(to.name);
  const token = sessionStorage.getItem('auth');

  if (authRequired && !token) {
    return next({ name: 'Login' });
  }

  next();
});

export default router;
