<template>
    <div class="bg-[#FEC4B6] shadow rounded-xl hover:scale-105 transition-transform duration-300">
            <router-link :to="{name: 'mealDetails', params: {id: meal.idMeal}}" class="relative block group">
                <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-xl w-full h-48 object-cover">
                <div class="absolute inset-0 flex items-center justify-center rounded-t-xl bg-[#FEC4B6] bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#3C284B] text-xl font-semibold">
                    Xem Công Thức
                </div>
            </router-link>
            <div class="p-3">
                <h3 class="px-3 py-2 font-semibold text-[#3C284B] text-2xl">{{ meal.strMeal }}</h3>
                <div class="flex items-center justify-between">
                    <VideoButton :href="meal.strYoutube"/>
                    
                </div>
            </div>


        </div>
</template>
<script setup>
import VideoButton from './VideoButton.vue';

const {meal} = defineProps({
    meal: {
        Required : true,
        type : Object
    }
})
</script>