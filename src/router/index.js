import {createRouter,createWebHistory } from 'vue-router';
import DefaultLayout from '../components/DefaultLayout.vue';
import Home from '../views/Home.vue';
import SearchByName from '../views/SearchByName.vue';
import SearchByLetter from '../views/SearchByLetter.vue';
import GuestLayout from '../components/GuestLayout.vue';
import MealDetails from '../views/MealDetails.vue'
const routes =[
    {
        path:'/',
        component: DefaultLayout,
        children:[
            {
                path:'/',
                name:'home',
                component: Home,
            },
            {
                path:"/by-name/:name?",
                name:"byname",
                component: SearchByName,
            },
            {
                path:"/by-letter/:letter?",
                name:"byletter",
                component: SearchByLetter,
            },
            {
                path:'/meal/:id',
                name:'mealDetails',
                component: MealDetails,
            },
        ]
    },
    {
        path:'/guest',
        component: GuestLayout,
       
    },
    
];
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;