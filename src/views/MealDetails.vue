<template>
    <div class="max-w-[800px] mx-auto">
        <h1 class="text-5xl font-bold mb-5 text-[#3C284B]">{{ meal.strMeal }}</h1>
        <img :src="meal.strMealThumb" :alt="meal.strMeal" class="w-full max-w-[100%] rounded-lg shadow-md ">
        <div class="grid grid-cols-1 sm:grid-cols-2 text-lg py-2">
            <div>
                <strong class="font-bold text-[#3C284B]">Loại:</strong> {{ meal.strCategory }}
            </div>
            <div>
                <strong class="font-bold text-[#3C284B]">Khu vực:</strong> {{ meal.strArea }}
            </div>
        </div>
        <div>
                <strong class="font-bold text-[#3C284B]">Tags:</strong> {{ meal.strTags }}
            </div>
        <div class="my-3">
            {{ meal.strInstructions }}
        </div>
        <div>
            <div>
                <h2 class="text-2xl font-semibold mb-2 text-[#3C284B] ">Thành phần: </h2>
                <ul>
                    <template v-for="(el, ind) of new Array(20)">
                        <li v-if="meal[`strIngredient${ind + 1}`]">
                            {{ ind + 1 }}. {{ meal[`strIngredient${ind + 1}`] }}
                            ({{ meal[`strMeasure${ind + 1}`] }})
                        </li>
                    </template>
                </ul>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 p-8">
            <div class="flex items-center justify-between">
                <VideoButton :href="meal.strYoutube" />
            </div>
            <div class="flex items-center justify-between">
                <SourceButton :href="meal.strSource" />
            </div>
        </div>

    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router';
import axiosClient from '../axiosClient';
import VideoButton from '../components/VideoButton.vue';
import SourceButton from '../components/SourceButton.vue';
const route = useRoute();
const meal = ref({})

onMounted(() => {
    axiosClient.get(`lookup.php?i=${route.params.id}`)
        .then(({ data }) => {
            meal.value = data.meals[0] || {}
        })
})
</script>