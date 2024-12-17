<template>
    <header class="bg-[#3C284B] shadow h-16 flex justify-between items-stretch ">
        <router-link :to="{name: 'home'}" class="inline-flex items-center h-full px-5 font-bold text-[#F1B0DA] hover:bg-[#FEC4B6] hover:text-[#3C284B] rounded-l-lg rounded-full hover:scale-105 transition-transform duration-300">
          Trang chủ
        </router-link>
        <div class="flex items-center gap-1">
          <router-link :to="{name: 'byname'}" class="inline-flex items-center mr-4 px-2 h-full font-bold  hover:bg-[#FEC4B6] text-[#F1B0DA] hover:text-[#3C284B] rounded-full hover:scale-105 transition-transform duration-300">
            Bạn muốn kiếm gì ?
          </router-link>
          <router-link :to="{name: 'byletter'}" class="inline-flex items-center px-2 h-full font-bold  hover:bg-[#FEC4B6] text-[#F1B0DA] hover:text-[#3C284B] rounded-r-lg rounded-full hover:scale-105 transition-transform duration-300">
            Tìm kiếm theo bảng chữ cái
          </router-link>
        </div>
    </header>
</template>