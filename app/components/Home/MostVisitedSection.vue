<template>
    <div class="flex flex-col bg-gray-50 p-20 w-full h-full gap-8">
        <div class="flex flex-col gap-4">
            <h3 class="text-lg font-meduim ">الصفحات الأعلى زيارة</h3>
            <h2 class="text-4xl font-bold text-primary-sa-flag  whitespace-pre-line  ">
                أبرز المواضيع والتحديثات</h2>
        </div>

        <div class="flex flex-wrap gap-4">
            <div v-for="item in mostVisitedItems" :key="item.title" class="flex flex-col gap-2">
                <NuxtLink :to="item.url" class="text-lg font-meduim text-primary-sa-flag px-4 py-2 rounded-full border border-primary-sa-flag  ">
                    {{ item.title }}
                </NuxtLink>
            </div>
        </div>



    </div>
</template>

<script setup lang="ts">

const { t } = useI18n()

const mostVisitedItems = [
    {title:'عن البرنامج',url:'/about'},
    {title:'مركز بناء القدرات',url:'/capacity'},
    {title:'المكتبة الرقمية',url:'/library'},
    {title:'الأسئلة الشائعة ',url:'/faq'},
    {title:'سياسة الخصوصية ',url:'/privacy'},
]
</script>