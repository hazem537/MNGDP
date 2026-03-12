<template>
    <div class="p-20 w-full flex flex-col items-center justify-center gap-10">
        <div class="flex flex-col items-center justify-center gap-2">
            <h3 class="font-medium text-lg "> المحاور الاستراتيجية</h3>
            <h2 class="text-4xl font-bold text-primary-sa-flag  text-center leading-[40px] pb-2">نقلة نوعية في أداء
                الوزارة وتعزيز كفاءتها
                <br> في تحقيق
                مستهدفاتها الاستراتيجية
            </h2>
            <p class="text-center text-lg text-gray-500">
                يهدف برنامج تطوير وزارة الحرس الوطني إلى تحقيق نقلة نوعية في أدائها وتعزيز كفاءتها من خلال ثلاثة محاور
                استراتيجية، حيث نسعى لأن نكون أكثر جاهزية <br>وفاعلية في ظل التغيرات السريعة، ونركز على تحسين الأداء
                وصنع
                المستقبل بقرارات واعية وموارد بشرية مؤهلة، يعكس هذا التحول ثقافة عمل مسؤولة ومتميزة، <br> مما يمكّن
                الوزارة
                من تجاوز التحديات وتحقيق أثر وطني مستدام يتماشى مع تطلعات المملكة.
            </p>
        </div>
        <div class=" grid grid-cols-3 w-full gap-20">
            <div class="flex flex-col items-center justify-center gap-4">
                <img :src="starIcon" alt="feature" class="w-14 h-14">
                <h2 class="text-2xl font-bold  ">الرفاه والازدهار الوطني</h2>
            </div>
            <div class="flex flex-col items-center justify-center gap-4" >
                <UIcon name="i-hugeicons-reload" class="w-14 h-14 bg-icon-gold" />
                <h2 class="text-2xl font-bold ">المرونة والاستدامة</h2>
            </div>
            <div class="flex flex-col items-center justify-center gap-4" >
                <!-- icon  -->
                <img :src="prisonGuardIcon" alt="feature" class="w-14 h-14">

                <h2 class="text-2xl font-bold ">قوات جاهزة ومناسبة</h2>
            </div>


        </div>

    </div>

</template>
<script setup lang="ts">
import starIcon from '~/assets/icons/star.svg'
// import userIcon from '~/assets/icons/user.svg'
import prisonGuardIcon from '~/assets/icons/prison-guard.svg'


const { t } = useI18n()
</script>