<template>
    <div class="p-8 pb-0">
       <h1 class="text-4xl font-bold mb-4 text-[#3C284B]">Gợi ý cho ngày hôm nay</h1> 
    </div>
    <Meals :meals="meals" />
</template>

<script setup>
    import { ref, computed, onMounted } from 'vue'; 
    import store from '../store';
    import axiosClient from '../axiosClient.js';
    import Meals from '../components/Meals.vue';

    
    const meals = ref([]);

    onMounted(async () => {
        for (let i = 0; i < 12; i++){
            axiosClient
             .get(`random.php`)
             .then(({data})=>meals.value.push(data.meals[0]));
        }
        
    });
</script>
