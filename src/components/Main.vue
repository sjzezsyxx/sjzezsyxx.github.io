<template>
    <div class="slogans grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div v-for="slogan in slogans" :key="slogan.name" class="p-2">
            <figure class="shadow-lg rounded-xl flex-none w-full">
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
                        <span :class="`${slogan.color[1]}`">{{ slogan.grade }} 级</span>
                    </div>
                    <div class="flex" v-if="slogan.site">
                        <a :href="slogan.site" class="opacity-50 hover:opacity-75 transition-opacity duration-200">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                />
                            </svg>
                        </a>
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
    blue: [gradients.blue[0], 'text-sky-100', 'bg-sky-100'],
};

const slogans = [
    {
        name: '宝硕',
        grade: 2021,
        avatar: 'https://cdn.jsdelivr.net/npm/bsi@0.0.4/avatar/144x144.png',
        slogan: '学习，就是发现自己越来越菜的过程。',
        site: 'https://baoshuo.ren',
    },
    {
        name: 'LawrenceSivan',
        grade: 2020,
        avatar: 'https://gravatar.loli.net/avatar/6b39805028574604c8349b18dcdb8a9f?d=mm&s=144',
        slogan: 'I was so much older then, I′m younger than that now.',
        site: 'https://lawrencesivan.github.io',
    },
    {
        name: 'youwike',
        grade: 2021,
        avatar: 'https://i.loli.net/2021/08/28/9SUsgA1u6Kj73r5.jpg',
        slogan: '我将会骄傲的说，这世界我来过。',
        site: 'https://www.cnblogs.com/i209M/',
    },
    {
        name: 'XYY1411',
        grade: 2020,
        avatar: 'https://gravatar.loli.net/avatar/2df35c7d897d344d3889ffc8290bb1cd?d=mm&s=144',
        slogan: '星空在前，路在脚下。',
        site: 'https://xyy1411.github.io',
    },
    {
        name: 'RenaMoe',
        grade: 2020,
        avatar: 'https://gravatar.loli.net/avatar/af4f417cc9c743bec7c0b06c94fe1f71?d=mm&s=144',
        slogan: '以必将褪色的誓言，守护无法实现的愿望。',
        site: 'https://renamoe.gitee.io',
    },
    {
        name: 'CloudySky',
        grade: 2021,
        avatar: 'https://i.loli.net/2021/08/31/mRjfMirAvxtXE2Q.jpg',
        slogan: '纵使世界万般残酷，总有温暖值得守护。',
    },
    {
        name: 'non_fried_chips',
        grade: 2020,
        avatar: 'https://gravatar.loli.net/avatar/3a0ef19aebf369316d445ff5334e9d6c?s=144',
        slogan: '所有梦想终将怒放。',
        site: 'https://nonfriedchips.github.io',
    },
    {
        name: 'SGColin',
        grade: 2017,
        avatar: 'https://gravatar.loli.net/avatar/2caaf8193e57d2f3f9c657ca244df330?s=144',
        slogan: 'God helps those who help themselves.',
        site: 'https://blog.gyx.me',
    },
    {
        name: '凉笙',
        grade: 2020,
        avatar: 'https://gravatar.loli.net/avatar/6bc0966973b7ac6d2ffbc017372b053f?s=144',
        slogan: 'Inner peace.',
        site: 'https://www.cnblogs.com/Liang-sheng/',
    },
    {
        name: 'Rsdbkhusky',
        grade: 2020,
        avatar: 'https://i.loli.net/2021/09/01/qt4FWld7SkAVrQU.png',
        slogan: 'Life is a game, and the game is a life.',
        site: 'https://rsdbkhusky.github.io/',
    },
    {
        name: 'CG__HeavenHealer',
        grade: 2020,
        avatar: 'https://i.loli.net/2021/09/01/3uvLtCZVdi9aY7y.png',
        slogan: '年月把拥有变作失去，疲倦的双眼带着期望。',
        site: 'https://cgheavenhealer.github.io/',
    },
].map((slogan, index) => {
    slogan.color = colors[Object.keys(colors)[index % Object.keys(colors).length]];
    return slogan;
});
</script>

<style scoped>
/* 
`grid-template-rows: masonry` is a new feature and has not been widely
supported by mainstream browsers, so use @supports to ensure compatibility.

See:
  * https://drafts.csswg.org/css-grid-3/#masonry-layout
  * https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows
*/
@supports (grid-template-rows: masonry) {
    .slogans {
        grid-template-rows: masonry;
    }
}
</style>
