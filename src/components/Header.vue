<template>
    <header class="sticky top-0 z-40 lg:z-50 w-full mx-auto bg-white px-5 xl:px-0 py-5 border-b border-gray-200 mb-2">
        <div class="flex-none flex-wrap flex mx-auto max-w-screen-xl">
            <a href="/" class="flex-none flex items-center lg:border-b-0 text-lg font-bold">
                {{ title }}
            </a>
            <div class="flex-auto h-18 flex items-center justify-between lg:mx-6 lg:px-0 xl:mx-8">
                <div class="flex items-center space-x-6"></div>
                <div>
                    <a
                        href="http://www.sjzezsyxx.com"
                        class="text-gray-400 hover:text-gray-500 transition-colors duration-200 px-1 md:px-3"
                    >
                        石家庄二中实验学校
                    </a>
                    <a
                        href="https://github.com/sjzezsyxx"
                        class="text-gray-400 hover:text-gray-500 transition-colors duration-200 px-1 md:px-3"
                        >GitHub</a
                    >
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
const title = '石家庄二中实验学校信竞团队';
</script>
