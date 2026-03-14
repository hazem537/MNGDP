<template>
    <div class="flex flex-col ">

        <PageHeader :imageUrl="item.image" :alt="item.alt" :title="item.title" :description="item.description"
            :breadcrumbItems="breadcrumbItems" />
        <div class="p-20 grid grid-cols-4 gap-x-4  gap-y-8">

            <DevelopmentOverviewCard title="العدد الخامس عشر" link="/" type="text"
                date=" يناير 2020" />
            <DevelopmentOverviewCard title="العدد الخامس عشر" link="/" type="video"
                date=" يناير 2020" />
            <DevelopmentOverviewCard title="العدد الخامس عشر" link="/" type="text"
                date=" يناير 2020" />
            <DevelopmentOverviewCard title="العدد الخامس عشر" link="/" type="video"
                date=" يناير 2020" />
            <DevelopmentOverviewCard title="العدد الخامس عشر" link="/" type="text"
                date=" يناير 2020" />
            <DevelopmentOverviewCard title="العدد الخامس عشر" link="/" type="text"
                date=" يناير 2020" />
        </div>
        <LastUpdate />
        <IsPageUseful />
    </div>
</template>
<script setup lang="ts">
import PageHeader from '~/components/Global/PageHeader.vue';
import Header from '~/assets/images/developmentOverview/header.jpg'
import LastUpdate from '~/components/Global/LastUpdate.vue';
import IsPageUseful from '~/components/Global/IsPageUseful.vue';
const item = {
    image: Header,
    alt: 'about-header',
    title: 'العمل بروح الفريق.. لتحقيق هدف واحد',
    description: 'إصدارات دورية تُشكّل مرجعية معرفية تبرز أهم المستجدات والإنجازات لمسيرة التحول.',

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
        label: 'نشرة لمحة عن التطور',
        to: '/transformation-news/development-overview',

    },
]





</script>