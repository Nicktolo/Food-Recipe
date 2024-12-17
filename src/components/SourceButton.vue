<template>
    <a 
        :href="href" 
        target="_blank"
        class="px-3 py-2 rounded-full border-2 border-[#3C284B] text-[#3C284B]  hover:bg-[#3C284B] hover:text-[#F1B0DA] transition-colors">
        Nguồn trang tham khảo
    </a>

</template>
<script setup>
 const props = defineProps({
    href: String
 })
</script>