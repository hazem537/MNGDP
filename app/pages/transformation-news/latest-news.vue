<template>
    <div class="flex flex-col ">

        <PageHeader :imageUrl="item.image" :alt="item.alt" :title="item.title" :description="item.description"
            :breadcrumbItems="breadcrumbItems" />
        <div class="p-20 grid grid-cols-3 gap-x-4  gap-y-8">

            <LatestNewsCard title="أعلن مركز تطوير المهارات عن برامج تدريب معتمدة في إدارة الموارد البشرية والابتكار والتخطيط الاستراتيجي." link="/" type="text" date=" يناير 2020"
                description="هنا يمكنك تضمين وصف موجز للعنوان في أربعة أسطر. هنا يمكنك تضمين وصف موجز للعنوان في أربعة أسطر." />
            <LatestNewsCard title="أعلن مركز تطوير المهارات عن برامج تدريب معتمدة في إدارة الموارد البشرية والابتكار والتخطيط الاستراتيجي." link="/" type="text" date=" يناير 2020"
                description="هنا يمكنك تضمين وصف موجز للعنوان في أربعة أسطر. هنا يمكنك تضمين وصف موجز للعنوان في أربعة أسطر." />
            <LatestNewsCard title="أعلن مركز تطوير المهارات عن برامج تدريب معتمدة في إدارة الموارد البشرية والابتكار والتخطيط الاستراتيجي." link="/" type="text" date=" يناير 2020"
                description="هنا يمكنك تضمين وصف موجز للعنوان في أربعة أسطر. هنا يمكنك تضمين وصف موجز للعنوان في أربعة أسطر." />
            <LatestNewsCard title="أعلن مركز تطوير المهارات عن برامج تدريب معتمدة في إدارة الموارد البشرية والابتكار والتخطيط الاستراتيجي." link="/" type="text" date=" يناير 2020"
                description="هنا يمكنك تضمين وصف موجز للعنوان في أربعة أسطر. هنا يمكنك تضمين وصف موجز للعنوان في أربعة أسطر." />
           
        </div>
        <LastUpdate />
        <IsPageUseful />
    </div>
</template>
<script setup lang="ts">
import PageHeader from '~/components/Global/PageHeader.vue';
import Header from '~/assets/images/latestNews/header.jpg'
import LastUpdate from '~/components/Global/LastUpdate.vue';
import IsPageUseful from '~/components/Global/IsPageUseful.vue';
const item = {
    image: Header,
    alt: 'about-header',
    title: 'الاخبار والمستجدات',
    description: 'نافذة تُبرز أهم مستجدات مبادرات التحول وإنجازاتها، وتوثّق مراحل تقدمها بما يعزز الوعي المؤسسي ويرسّخ أثر التطوير واستدامته..',

}
const breadcrumbItems = [
    {
        label: 'الرئيسية',
        to: '/',
    },
    {
        label: 'أخبار التحول',
        to: '/transformation-news',
        disabled: true,
    },
    {
        label: 'الاخبار والمستجدات',
        to: '/transformation-news/latest-news',

    },
]





</script>