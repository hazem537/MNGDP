<template>
    <div class="flex flex-col  p-20 bg-[#F9FAFB] gap-8">
        <div class="flex items-center justify-between">
            <h2 class="text-4xl font-bold text-primary-sa-flag">
                الخطوط المستخدمة
            </h2>
            <!-- <UButton variant="outline" size="sm" color="neutral"
                class="text-lg rounded-md   text-black  border-black px-[16px] py-[8px] gap-1 flex items-center">
                <span>تحميل دليل هوية البرنامج</span>
                <UIcon name="i-lucide-download" class="w-4 h-4" />
            </UButton> -->
        </div>
        <div class="grid grid-cols-3 gap-4">
            <div class="bg-white  p-6 flex flex-col gap-4 border border-gray-200 rounded-md" >
                <p class="warning-bage w-fit text-xs p-2 py-1 font-semibold rounded-md">
                    الخط العربي/الانجليزي الرئيسي
                </p>
                <h2 class="text-[72px] font-bold font-['majallab'] text-primary">
                    أب . Aa
                </h2>
                <h3 class="text-4xl font-bold text-primary-sa-flag">
                    Sakkal Majalla
                </h3>
                <div class="flex  gap-6 *:text-lg ">
                    <p class="font-bold">Bold</p>
                    <p class="font-semibold">semibold</p>
                    <p class="font-medium">Medium</p>
                    <p class="font-regular">Regular</p>
                </div>
                <div class="flex flex-col gap-4 *:text-xl   text-[#6C737F] w-full  " dir="ltr">
                    <p> abcdefghijklmnopqrstuvwxyz</p>
                    <p> ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                    <p> 1234567890-=+_!@#$%&*()</p>

                </div>

                            <UButton variant="outline" size="sm" color="neutral"
                class="text-lg rounded-md   w-fit text-black  border-black px-[16px] py-[8px] gap-1 flex items-center">
                <span>تحميل الخط </span>
                <UIcon name="i-lucide-download" class="w-4 h-4" />
            </UButton>
            </div>
            <div class="bg-white  p-6 flex flex-col gap-4 border border-gray-200 rounded-md" >
                <p class="warning-bage w-fit text-xs p-2 py-1 font-semibold rounded-md">
                    الخط الرئيسي للغة الانجليزية
                </p>
                <h2 class="text-[72px] font-bold font-['georgia'] text-primary">
                     Aa
                </h2>
                <h3 class="text-4xl font-bold text-primary-sa-flag">
                    Georgia
                </h3>
                <div class="flex  gap-6 *:text-lg ">
                    <p class="font-bold">Bold</p>
                    <p class="font-semibold">semibold</p>
                    <p class="font-medium">Medium</p>
                    <p class="font-regular">Regular</p>
                </div>
                <div class="flex flex-col gap-4 *:text-xl  font-['bukra']  text-[#6C737F] w-full  " dir="ltr">
                    <p> abcdefghijklmnopqrstuvwxyz</p>
                    <p> ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                    <p> 1234567890-=+_!@#$%&*()</p>

                </div>

                            <UButton variant="outline" size="sm" color="neutral"
                class="text-lg rounded-md   w-fit text-black  border-black px-[16px] py-[8px] gap-1 flex items-center">
                <span>تحميل الخط </span>
                <UIcon name="i-lucide-download" class="w-4 h-4" />
            </UButton>
            </div>
            <div class="bg-white  p-6 flex flex-col gap-4 border border-gray-200 rounded-md" >
                <p class="info-bage w-fit text-xs p-2 py-1 font-semibold rounded-md">
                    الخط العربي الثانوي
                </p>
                <h2 class="text-[72px] font-bold font-['bukra'] text-primary">
                    أب 
                </h2>
                <h3 class="text-4xl font-bold text-primary-sa-flag">
                    29LT Bukra
                </h3>
                <div class="flex  gap-6 *:text-lg  ">
                    <p class="font-bold">Bold</p>
                    <p class="font-semibold">semibold</p>
                    <p class="font-medium">Medium</p>
                    <p class="font-regular">Regular</p>
                </div>
                <div class="flex flex-col gap-4 *:text-xl   font-['bukra']  text-[#6C737F] w-full  " dir="ltr">
                    <p> abcdefghijklmnopqrstuvwxyz</p>
                    <p> ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                    <p> 1234567890-=+_!@#$%&*()</p>

                </div>

                            <UButton variant="outline" size="sm" color="neutral"
                class="text-lg rounded-md   w-fit text-black  border-black px-[16px] py-[8px] gap-1 flex items-center">
                <span>تحميل الخط </span>
                <UIcon name="i-lucide-download" class="w-4 h-4" />
            </UButton>
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