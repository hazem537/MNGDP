<template>
    <div class="flex flex-col ">
        <ContentPgaeHeader />
        <ContentPgaeContent />
        <!-- <AboutStrategicAxes /> -->
        <!-- <AboutTransformationAspects /> -->
        <!-- <AboutOrganizationalStructure /> -->

        <LastUpdate />
        <IsPageUseful />
    </div>
</template>
<script setup lang="ts">
import LastUpdate from '~/components/Global/LastUpdate.vue';
import IsPageUseful from '~/components/Global/IsPageUseful.vue';
</script>
