import SignIn from './layouts/authentication/sign-in';
import SignUp from './layouts/authentication/sign-up';
import Billing from './layouts/billing';
import Dashboard from './layouts/dashboard';
import Profile from './layouts/profile';
import Rtl from './layouts/rtl';
import Tables from './layouts/tables';
import VirtualReality from './layouts/virtual-reality';

import CreditCard from './examples/Icons/CreditCard';
import Cube from './examples/Icons/Cube';
import CustomerSupport from './examples/Icons/CustomerSupport';
import Document from './examples/Icons/Document';
import Office from './examples/Icons/Office';
import Settings from './examples/Icons/Settings';
import Shop from './examples/Icons/Shop';
import SpaceShip from './examples/Icons/SpaceShip';

const routes = [
    {
        type: 'collapse',
        name: 'Dashboard',
        key: 'dashboard',
        route: '/dashboard',
        icon: <Shop size={'12px'} />,
        component: <Dashboard />,
        noCollapse: true,
    },
    {
        type: 'collapse',
        name: 'Tables',
        key: 'tables',
        route: '/tables',
        icon: <Office size={'12px'} />,
        component: <Tables />,
        noCollapse: true,
    },
    {
        type: 'collapse',
        name: 'Billing',
        key: 'billing',
        route: '/billing',
        icon: <CreditCard size={'12px'} />,
        component: <Billing />,
        noCollapse: true,
    },
    {
        type: 'collapse',
        name: 'Virtual Reality',
        key: 'virtual-reality',
        route: '/virtual-reality',
        icon: <Cube size={'12px'} />,
        component: <VirtualReality />,
        noCollapse: true,
    },
    {
        type: 'collapse',
        name: 'RTL',
        key: 'rtl',
        route: '/rtl',
        icon: <Settings size={'12px'} />,
        component: <Rtl />,
        noCollapse: true,
    },
    { type: 'title', title: 'Account Pages', key: 'account-pages' },
    {
        type: 'collapse',
        name: 'Profile',
        key: 'profile',
        route: '/profile',
        icon: <CustomerSupport size={'12px'} />,
        component: <Profile />,
        noCollapse: true,
    },
    {
        type: 'collapse',
        name: 'Sign In',
        key: 'sign-in',
        route: '/authentication/sign-in',
        icon: <Document size={'12px'} />,
        component: <SignIn />,
        noCollapse: true,
    },
    {
        type: 'collapse',
        name: 'Sign Up',
        key: 'sign-up',
        route: '/authentication/sign-up',
        icon: <SpaceShip size={'12px'} />,
        component: <SignUp />,
        noCollapse: true,
    },
];

export default routes;
