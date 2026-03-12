<template>
    <div class="p-20 w-full flex flex-col items-center justify-center gap-10">
        <div class="flex flex-col items-center justify-center gap-2">
            <h3 class="font-medium text-lg "> الهيكل التنظيمي</h3>
            <h2 class="text-4xl font-bold text-primary-sa-flag  text-center leading-[40px] pb-2">
                منظومة عمل البرنامج
            </h2>
       
        </div>
        <img :src="organizationalStructureImage" alt="organizational-structure" class="w-full h-full object-cover ">
    

    </div>

</template>
<script setup lang="ts">
import organizationalStructureImage from '~/assets/images/AboutOrganizationalStructure/Final.png'


const { t } = useI18n()
</script>