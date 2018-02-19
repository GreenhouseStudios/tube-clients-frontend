import Vue from 'vue'
import HomeComponent from './Home'
import LoginComponent from './Login'
import RegisterComponent from './Register'
import ProfileComponent from './Profile'
import UpdateComponent from './Update'

export const Home = Vue.component('home', HomeComponent)
export const Login = Vue.component('login', LoginComponent)
export const Register = Vue.component('register', RegisterComponent)
export const Profile = Vue.component('register', ProfileComponent)
export const Update = Vue.component('update', UpdateComponent)