<template>
    <div class="p-8 pb-0">
       <h1 class="text-4xl font-bold mb-4 text-[#3C284B]">Tìm kiếm theo bảng chữ cái</h1> 
    </div>
    <div class="flex justify-center gap-2 mt-2 mb-10 font-bold text-[#3C284B]">
        <router-link :to="{ name: 'byletter', params: { letter } }" v-for="letter of letters" :key="letter" class="text-lg font-medium transition-transform duration-300 hover:scale-125 hover:text-[#F1B0DA]">
            {{ letter }}
        </router-link>
    </div>
    <!-- <div class="grid grid-cols-1 md:grid-cols-4 gap-5 p-8">
        <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div> -->
    <Meals :meals="meals" />
</template>

<script setup>
import { computed, onMounted, watch} from 'vue';
import {useRoute} from 'vue-router';
import MealItem from '../components/MealItem.vue';
import Meals from '../components/Meals.vue';
import store from '../store';
const route = useRoute();
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
const meals = computed(()=> store.state.searchLetter)
watch(route,()=>{
    store.dispatch('searchByLetter', route.params.letter)
})
onMounted(()=>{
    store.dispatch('searchByLetter', route.params.letter)
})
</script>