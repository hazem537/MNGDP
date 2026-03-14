<template>
    <div class="flex flex-col  p-20 gap-8">
        <div class="flex items-center justify-between">
            <h2 class="text-4xl font-bold text-primary-sa-flag">
                شعار البرنامج
            </h2>
            <UButton variant="outline" size="sm" color="neutral"
                class="text-lg rounded-md   text-black  border-black px-[16px] py-[8px] gap-1 flex items-center">
                <span>تحميل دليل هوية البرنامج</span>
                <UIcon name="i-lucide-download" class="w-4 h-4" />
            </UButton>
        </div>
        <div class="grid grid-cols-4 gap-4">
            <div class="h-[250px] px-[60px] py-[25px]">
                <img :src="logoImage2" alt="logo" class=" object-cover">
            </div>
            <div class="h-[250px] px-[60px] py-[25px] bg-primary-green rounded-md">
                <img :src="whitelogoImage2" alt="logo" class=" object-cover">
            </div>
            <div class="h-[250px] px-[18px] py-[76px] flex items-center justify-center" >
                <img :src="logoImage1" alt="logo" class=" object-cover">
            </div>
            <div class="h-[250px] px-[18px] py-[76px] bg-primary-green rounded-md flex items-center justify-center">
                <img :src="whitelogoImage1" alt="logo" class=" object-cover">
            </div>
        </div>


    </div>
</template>
<script setup lang="ts">
import logoImage2 from '~/assets/images/logo2.png'
import logoImage1 from '~/assets/images/logo1.png'


import whitelogoImage2 from '~/assets/images/whitelogo2.png'
import whitelogoImage1 from '~/assets/images/whitelogo1.png'

</script>