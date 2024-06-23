<template>
    <section id="about">
        <!-- メニュー -->
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">

            <div class="d-block d-lg-none d-flex">
                <span class="me-2 nav-item" v-for="section in sections" :key="section.id">
                    <a class="nav-link" :class="{ active: activeSection === section.id }" :href="'#' + section.id">{{
                    section.name }}</a>
                </span>
            </div>

            <a class="navbar-brand" href="#page-top">
                <span class="d-none d-lg-block">
                    <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="@/assets/aq35/logo.webp"
                        alt="プロフィール" />
                </span>
            </a>

            <div class="collapse navbar-collapse">
                <ul class="navbar-nav">
                    <li class="nav-item" v-for="section in sections" :key="section.id">
                        <a class="nav-link" :class="{ active: activeSection === section.id }"
                            :href="'#' + section.id">{{ section.name }}</a>
                    </li>
                </ul>
            </div>
        </nav>

        <!-- コンテンツ -->
        <div class="container-fluid p-0">
            <ResumeSection id="profile">
                <h2 class="text-4xl font-bold md:text-5xl">Pro<span class="text-primary">file</span>
                </h2>
                <p class="mb-1"><strong class="d-inline-block" style="width: 150px;">名　前</strong>細部
                    寿麻（ほそべ かずま）</p>
                <p class="mb-1"><strong class="d-inline-block" style="width: 150px;">所在地</strong>東京都
                    日野市</p>
                <p class="mb-1"><strong class="d-inline-block" style="width: 150px;">メールアドレス</strong><a
                        href="mailto:nagarestarzxc@gmail.com">nagarestarzxc@gmail.com</a></p>
                <p class="mb-1"><strong class="d-inline-block" style="width: 150px;">SNS</strong><a
                        href="mailto:nagarestarzxc@gmail.com">
                        <a class="btn btn-sm btn-outline-dark" href="https://github.com/aq35" target="_blank">
                            <i class="fab fa-github"></i> aq35
                        </a>
                    </a></p>
                <p class="mb-2"></p>
                <div class="sm:max-w-[480px]">
                    <p class="mb-1"><strong class="d-inline-block" style="width: 150px;">Mission</strong></p>
                    <p class="mb-1 text-gray-700 leading-relaxed">
                        「多様な技術分野での知識とスキルを活かし、ユーザーに価値あるソリューションを提供する」
                    </p>
                    <p class="mb-1"><strong class="d-inline-block" style="width: 150px;">Vision</strong></p>
                    <p class="mb-1 text-gray-700 leading-relaxed">
                        「常に技術の最前線に立ち、フロントエンドからインフラ、機械学習まで幅広い分野での専門性を持ち、全ての開発工程で高品質な成果を生み出すエンジニアとして成長する」
                    </p>
                </div>
            </ResumeSection>

            <hr class="m-0" />

            <ResumeSection id="history">
                <h2 class="text-4xl font-bold md:text-5xl">Hist<span class="text-primary">ory</span>
                </h2>
                <div>
                    <div class="timeline" v-for="item in historyItems" :key="item.id">
                        <div class="timeline-item">
                            <span class="timeline-date">{{ item.date }}</span>
                            <p class="text-gray-700 leading-relaxed" v-html="item.content"></p>
                        </div>
                    </div>
                </div>
            </ResumeSection>

            <hr class="m-0" />

            <ResumeSection id="projects">
                <h2 class="text-4xl font-bold md:text-5xl">Pr<span class="text-primary">o</span>ject<span
                        class="text-primary">s</span></h2>
                <div class="project" v-for="project in projects" :key="project.id">
                    <h3 class="text-3xl font-semibold">{{ project.title }}</h3>
                    <p class="text-gray-700 leading-relaxed">{{ project.description }}</p>
                    <p><strong>Technologies:</strong> {{ project.technologies.join(', ') }}</p>
                    <a :href="project.link" target="_blank" class="text-primary">View Project</a>
                </div>
            </ResumeSection>

            <hr class="m-0" />

            <ResumeSection id="skills">
                <h2 class="text-4xl font-bold md:text-5xl">Skills</h2>
                <div class="card" style="width: min-content;">
                    <SkillsRadarChart :skillArea="laravelSkills" />
                </div>

            </ResumeSection>

            <hr class="m-0" />
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import ResumeSection from './ResumeSection.vue';
import SkillsRadarChart from './SkillsRadarChart.vue';

const sections = [
    { id: 'profile', name: 'Profile' },
    { id: 'history', name: 'History' },
    { id: 'projects', name: 'Projects' },

];

const activeSection = ref('');

const historyItems = ref([
    {
        id: 1,
        date: '2013/4 - 2013/10 (6ヶ月)',
        content: '日本大学 法律学科 法学部 途中退学'
    },
    {
        id: 2,
        date: '2013/12 - 2017/10 (4年)',
        content: '他業種にて就業(レジ業務、住宅基礎工事、倉庫ピッキング、工場検品 etc.)'
    },
    {
        id: 3,
        date: '2018/11 - 2018/01 (3ヶ月)',
        content: '<a href="https://programmercollege.jp/" target="_blank">プログラマカレッジ</a>でプログラミングを学ぶ。'
    },
    {
        id: 4,
        date: '2018/02 - 2018/11 (9ヶ月)',
        content: '<a href="https://www.staffservice-engineering.jp/" target="_blank">株式会社スタッフサービスエンジニアリング</a>に所属。SESエンジニアとして実務(客先業務)に従事。'
    },
    {
        id: 5,
        date: '2018/11 - 2019/12 (1年2ヶ月)',
        content: '<a href="https://j-lifedesign.com/" target="_blank">株式会社日本ライフデザイン</a>に所属。介護士として、認知症高齢者向けのグループホームで勤務。'
    },
    {
        id: 6,
        date: '2020/02 - 現在 (4年6ヶ月)',
        content: '<a href="https://www.whaletech.co.jp/" target="_blank">ホエールテック株式会社</a>に入社、現在に至るまでWEB系の受託開発に携わる。'
    }
]);


const projects = ref([
    {
        id: 1,
        title: 'E-commerce Website',
        description: 'Developed a full-fledged e-commerce website with user authentication, product listings, and a shopping cart system. Integrated payment gateways and implemented responsive design.',
        technologies: ['Vue.js', 'Vuex', 'Node.js', 'Express', 'MongoDB'],
        link: 'https://example.com/ecommerce'
    },
    {
        id: 2,
        title: 'Portfolio Website',
        description: 'Created a personal portfolio website to showcase my projects and skills. Implemented dynamic content loading and SEO best practices.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
        link: 'https://example.com/portfolio'
    },
    {
        id: 3,
        title: 'Task Management App',
        description: 'Developed a task management application that allows users to create, edit, and delete tasks. Implemented user authentication and real-time updates using WebSocket.',
        technologies: ['React', 'Redux', 'Node.js', 'Express', 'Socket.io'],
        link: 'https://example.com/taskmanager'
    },
    {
        id: 4,
        title: 'Weather Dashboard',
        description: 'Built a weather dashboard that displays current weather conditions and forecasts for multiple cities. Utilized third-party APIs to fetch weather data and implemented dynamic updates.',
        technologies: ['Angular', 'TypeScript', 'RxJS', 'API'],
        link: 'https://example.com/weatherdashboard'
    },
    {
        id: 5,
        title: 'Blog Platform',
        description: 'Developed a multi-user blog platform with features such as user registration, post creation, commenting, and social media sharing.',
        technologies: ['Ruby on Rails', 'PostgreSQL', 'Heroku'],
        link: 'https://example.com/blogplatform'
    }
]);


const handleScroll = () => {
    console.log(sections);
    const sectionOffsets = sections.map(section => {
        const element = document.getElementById(section.id);
        return { id: section.id, offset: element ? element.offsetTop : 0 };
    });

    const scrollPosition = window.scrollY + window.innerHeight / 2;

    for (let i = sectionOffsets.length - 1; i >= 0; i--) {
        if (scrollPosition >= sectionOffsets[i].offset) {
            activeSection.value = sectionOffsets[i].id;
            break;
        }
    }
};

const laravelSkills = ref({
    labels: ['チームワーク', '設計', '開発', '統率', '成長性'],
    name: 'Laravel',
    param1: 75,
    param2: 50,
    param3: 70,
    param4: 25,
    param5: 85,
    icon: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg' // LaravelのアイコンURL
});

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped></style>