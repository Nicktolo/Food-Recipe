<template>
    <div class="p-8 pb-0">
       <h1 class="text-4xl font-bold text-[#3C284B]">Bạn cần tìm kiếm cái gì ?</h1> 
    </div>
    <div class="p-8 pb-0">
        <input type="text" v-model="keyword" class="rounded border-2 border-[#3C284B] w-50% mb-10 font-bold text-[#3C284B]" placeholder="Tìm kiếm"
            @change="searchMeals" />
    </div>
    <!-- <div class="grid grid-cols-1 md:grid-cols-4 gap-5 p-8">
        <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div> -->
    <Meals :meals="meals" />
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';
import VideoButton from '../components/VideoButton.vue';
// import MealItem from '../components/MealItem.vue';
import Meals from '../components/Meals.vue';

const route = useRoute();
const keyword = ref('');
const meals = computed(() => store.state.searchMeals)
function searchMeals() {
    if(keyword.value){
        store.dispatch('searchMeals', keyword.value)
    }else{
        store.commit('setSearchMeals', [])
    }
    
}
onMounted(()=>{
   keyword.value = route.params.name
   if(keyword.value){
    searchMeals()
   }
})
</script>