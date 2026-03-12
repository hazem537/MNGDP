<template>
    <div class="flex flex-col gap-6 px-20 py-10 w-full bg-primary-sa-flag text-white">
        <div class="flex justify-between  *:grow  gap-6 pt-4">
            <div class="flex flex-col gap-2 ">
                <h2 class="text-md font-bold  border-b border-white pb-2">الصفحات الأكثر زيارة</h2>
                <NuxtLink to="/about" class="text-sm text-white hover:text-gray-300">نبذة عن البرنامج</NuxtLink>
                <NuxtLink to="/" class="text-sm text-white hover:text-gray-300">نشرة لمحة عن التطوير​</NuxtLink>
                <NuxtLink to="/" class="text-sm text-white hover:text-gray-300">مركز بناء القدرات</NuxtLink>
                <NuxtLink to="/" class="text-sm text-white hover:text-gray-300">المكتبة الرقمية</NuxtLink>
            </div>
            <div class="flex flex-col gap-2 ">
                <h2 class="text-md font-bold  border-b border-white pb-2">روابط مهمة</h2>
                <span class="flex items-center gap-2">
                    <NuxtLink to="/about" class="text-sm text-white hover:text-gray-300">وزارة الحرس الوطني</NuxtLink>
                    <UIcon name="i-hugeicons-link-square-01" class="w-4 h-4" />
                </span>
                <span class="flex items-center gap-2">
                    <NuxtLink to="/" class="text-sm text-white hover:text-gray-300">الشؤون الصحية بوزارة الحرس الوطني
                    </NuxtLink>
                    <UIcon name="i-hugeicons-link-square-01" class="w-4 h-4" />
                </span>
            </div>
            <div class="flex flex-col gap-2 ">
                <h2 class="text-md font-bold  border-b border-white pb-2">الاتصال والدعم</h2>
                <NuxtLink to="/about" class="text-sm text-white hover:text-gray-300">اتصل بنا</NuxtLink>
                <NuxtLink to="/" class="text-sm text-white hover:text-gray-300">الأسئلة الشائعة</NuxtLink>
                <NuxtLink to="/" class="text-sm text-white hover:text-gray-300">انضم إلينا</NuxtLink>
            </div>
            <div class="flex flex-col gap-8 ">
                <div class="flex flex-col gap-2">

                    <h2 class="text-md font-bold  border-b border-white pb-2">تابعنا على</h2>
                    <div class="flex items-center w-8 h-8  border border-white rounded-md p-1.5">
                        <NuxtLink to="/" class="flex items-center justify-center w-full h-full">
                            <UIcon name="i-uit-linkedin-alt" class="w-full h-full" />
                        </NuxtLink>
                    </div>
                </div>
                <div class="flex flex-col gap-2">
                    <h2 class="text-md font-bold  border-b border-white pb-2">أدوات الاتاحة والوصول</h2>

                    <div class="flex items-center gap-2">
                        <NuxtLink to="/" class="flex items-center justify-center border border-white rounded-md p-1.5">
                            <UIcon name="i-lucide-eye" class="w-5 h-5" />
                        </NuxtLink>
                        <NuxtLink to="/" class="flex items-center justify-center border border-white rounded-md p-1.5">
                            <UIcon name="i-fe-search-plus" class="w-5 h-5" />
                        </NuxtLink>
                        <NuxtLink to="/" class="flex items-center justify-center border border-white rounded-md p-1.5">
                            <img :src="handIcon" alt="hand" class="w-5 h-5" />
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>


        <div class="flex items-center justify-between">
            <div class="flex flex-col   gap-6 py-4">
                <div class="flex  items-center gap-4">
                    <NuxtLink to="/" class="text-sm text-white hover:text-gray-300 underline    ">
                        سياسة الخصوصية
                    </NuxtLink>
                    <NuxtLink to="/" class="text-sm text-white hover:text-gray-300 underline        ">
                        سياسة ملفات الارتباط
                    </NuxtLink>
                    <NuxtLink to="/" class="text-sm text-white hover:text-gray-300 underline        ">
                        خريطة الموقع
                    </NuxtLink>
                    <NuxtLink to="/" class="text-sm text-white hover:text-gray-300 underline         ">
                        RSS
                    </NuxtLink>
                </div>
                <p class="text-sm text-white">2026 - 2025 © جميع الحقوق محفوظة لبرنامج تطوير وزارة الحرس الوطني</p>
            </div>
            <div class="flex gap-4">
                <img :src="DPWhiteLogo" alt="DP-white-logo" class=" h-10" />
                <img :src="DigAuthLogo" alt="DigitalGovAut-logo" class=" h-10" />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import DPWhiteLogo from '~/assets/images/DP-white-logo.svg'
import DigAuthLogo from '~/assets/images/DigitalGovAut.svg'
import handIcon from '~/assets/icons/hand.svg'
</script>