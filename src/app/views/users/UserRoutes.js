import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import { authRoles } from '../../auth/authRoles';
const AppUsers = Loadable(lazy(() => import('./AppUsers')));
const userRoutes = [
    {
      path: '/users',
      element: <AppUsers />,
    }
]
export default  userRoutes;