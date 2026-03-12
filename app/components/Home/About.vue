<template>
    <div class="flex flex-col p-20 ">
        <div class="flex justify-between items-center">
            <div class="flex flex-col gap-6">
                <div class="flex flex-col gap-4">

                    <h2 class="text-lg font-medium  "> {{ t('home.about.title') }}</h2>
                    <h3 class="text-4xl  font-bold text-primary-sa-flag ">
                        {{ t('home.about.subtitle1') }} <br>
                        {{ t('home.about.subtitle2') }}
                    </h3>   
                </div>
                <div class="flex items-center gap-4">
                    <img src="~/assets/images/iso.svg" alt="iso-icon" class="box-[50px] rounded-full">
                    <span class="  text-gray-700  ">
                        {{ t('home.about.certificate') }}
                        <br>
                        {{ t('home.about.certificate2') }}
                    </span>
                </div>
                <div>
                    <UButton color="primary" size="sm" class="text-lg rounded-md   px-[16px] py-[8px]">
                        {{ t('home.about.more') }}
                    </UButton>
                </div>
            </div>

            <div class="flex flex-col gap-4 w-[60%] text-sm font-semibold  ">
                <p class=" text-gray-700 ">
                    {{ t('home.about.description1') }}
                </p>
                <p class=" text-gray-700 ">
                    {{ t('home.about.description2') }}
                </p>
            </div>

        </div>

    </div>

</template>
<script setup lang="ts">
const { t } = useI18n()
</script>