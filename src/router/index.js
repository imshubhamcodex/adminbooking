import login_signup_user from '../components/login_signup_user.vue';
import user from '../components/user.vue';

export default [
{
	path:'/',
	component: login_signup_user
},
{
	path: '/login_signup_user',
	component: login_signup_user
},
{
	path: '/user',
	component: user
}

]