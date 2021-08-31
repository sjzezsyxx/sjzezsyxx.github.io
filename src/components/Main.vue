<template>
    <div class="flex flex-wrap justify-between">
        <div v-for="slogan in slogans" :key="slogan.name">
            <figure class="shadow-lg rounded-xl flex-none w-72 md:w-xl m-2">
                <blockquote
                    class="
                        rounded-t-xl
                        bg-white
                        px-6
                        py-8
                        md:p-10
                        text-lg
                        md:text-xl
                        leading-8
                        md:leading-8
                        font-semibold
                        text-gray-900
                    "
                >
                    <svg width="45" height="36" :class="`mb-5 fill-current ${slogan.color[1]}`">
                        <path
                            d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"
                        ></path>
                    </svg>
                    <p>{{ slogan.slogan }}</p>
                </blockquote>
                <figcaption
                    :class="`flex items-center space-x-4 p-6 md:px-10 md:py-6 bg-gradient-to-br rounded-b-xl leading-6 font-semibold text-white ${slogan.color[0]}`"
                >
                    <div
                        :class="`flex-none w-14 h-14 bg-white rounded-full flex items-center justify-center ${slogan.color[2]}`"
                    >
                        <img :src="slogan.avatar" alt="" class="w-12 h-12 rounded-full" loading="lazy" />
                    </div>
                    <div class="flex-auto">
                        {{ slogan.name }}
                        <br />
                        <span :class="`${slogan.color[0]}`">{{ slogan.grade }} 级</span>
                    </div>
                </figcaption>
            </figure>
        </div>
    </div>
</template>

<script setup>
import { gradients } from '../utils/gradients';

const colors = {
    lightblue: [gradients.lightblue[0], 'text-cyan-100', 'bg-cyan-100'],
    purple: [gradients.purple[0], 'text-fuchsia-100', 'bg-fuchsia-100'],
    orange: [gradients.orange[0], 'text-orange-100', 'bg-orange-100'],
    teal: [gradients.teal[0], 'text-green-100', 'bg-green-100'],
    violet: [gradients.violet[0], 'text-purple-100', 'bg-purple-100'],
    amber: [gradients.amber[0], 'text-orange-100', 'bg-orange-100'],
    pink: [gradients.pink[0], 'text-rose-100', 'bg-rose-100'],
    blue: [gradients.blue[0], 'text-light-blue-100', 'bg-light-blue-100'],
};

const slogans = [
    {
        name: '宝硕',
        grade: 2021,
        avatar: 'https://cdn.jsdelivr.net/npm/bsi@0.0.4/avatar/144x144.png',
        slogan: '学习，就是发现自己越来越菜的过程。',
    },
    {
        name: 'LawrenceSivan',
        grade: 2020,
        avatar: 'https://gravatar.loli.net/avatar/6b39805028574604c8349b18dcdb8a9f?d=mm&s=144',
        slogan: 'I was so much older then, I′m younger than that now.',
    },
    {
        name: 'youwike',
        grade: 2021,
        avatar: 'https://i.loli.net/2021/08/28/9SUsgA1u6Kj73r5.jpg',
        slogan: '我将会骄傲的说，这世界我来过。',
    },
    {
        name: 'XYY1411',
        grade: 2020,
        avatar: 'https://gravatar.loli.net/avatar/2df35c7d897d344d3889ffc8290bb1cd?d=mm&s=144',
        slogan: '星空在前，路在脚下。',
    },
    {
        name: 'RenaMoe',
        grade: 2020,
        avatar: 'https://gravatar.loli.net/avatar/af4f417cc9c743bec7c0b06c94fe1f71?d=mm&s=144',
        slogan: '以必将褪色的誓言，守护无法实现的愿望。',
    },
].map((slogan, index) => {
    slogan.color = colors[Object.keys(colors)[index % Object.keys(colors).length]];
    return slogan;
});
</script>
