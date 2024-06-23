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
                    <p class="mb-1"><strong class="d-inline-block" style="width: 150px;">最終目標</strong></p>
                    <p class="mb-1 text-gray-700 leading-relaxed">
                        CTO/CIOとして、企業全体の技術ビジョンを策定・実行し、技術投資とイノベーションを推進する人材になりたい。
                    </p>
                    <p class="mb-1"><strong class="d-inline-block" style="width: 150px;">現在の目標</strong></p>
                    <p class="mb-1 text-gray-700 leading-relaxed">
                        プロジェクト管理スキルとリーダーシップスキルを向上させる。
                        具体的には、効果的なプロジェクト計画、リソース管理、リスク管理を実践し、小規模チームをリードし、メンバーの成長を支援する。
                        また、フロントエンドおよびバックエンド技術、クラウドプラットフォームのスキルを強化する。
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
                <h2 class="text-4xl font-bold md:text-5xl"><span class="text-primary">Pro</span>ject<span
                        class="text-primary">s</span></h2>
                <div class="project" v-for="project in projects" :key="project.id">
                    <h3 class="text-3xl font-semibold">{{ project.title }}</h3>
                    <p class="text-gray-700 leading-relaxed">{{ project.description }}</p>
                    <p><strong>期間:</strong> {{ project.duration }}</p>
                    <p><strong>種別:</strong> <span class="badge bg-primary">{{ project.type }}</span></p>
                    <p><strong>役割:</strong>
                        <span v-for="role in project.roles" :key="role" class="badge bg-secondary me-1">{{ role
                            }}</span>
                    </p>
                    <p><strong>PC:</strong> {{ project.pc.join(', ') }}</p>
                    <p><strong>言語:</strong> {{ project.languages.join(', ') }}</p>
                    <p><strong>開発環境:</strong> {{ project.environment.join(', ') }}</p>
                    <p><strong>成長:</strong>
                    <div v-for="item in project.growth" :key="item">{{ item }}</div>
                    </p>

                </div>
            </ResumeSection>

            <hr class="m-0" />

            <ResumeSection id="skills">
                <h2 class="text-4xl font-bold md:text-5xl">Ski<span class="text-primary">ll</span>s<span
                        class="text-primary"></span></h2>
                <div class="row">
                    <SkillCategory title="フロントエンド" message="直近ではVue3で開発してました。" :skills="[
                    { name: 'Vue3', level: 75, comment: 'TypeScriptとセットで使います。' },
                    { name: 'Bootstrap5', level: 65, comment: '' },
                ]" />
                    <SkillCategory title="サーバーサイド" message="職場では、Laravel先生と呼ばれます。" :skills="[
                    { name: 'Laravel', level: 75, comment: '' },
                    { name: 'PHP', level: 70, comment: '' },
                    { name: 'Python', level: 20, comment: '' },
                ]" />
                    <SkillCategory title="DB" message="" :skills="[
                    { name: 'MySQL', level: 55, comment: '' },
                    { name: 'MongoDB', level: 15, comment: '' },
                ]" />
                    <SkillCategory title="インフラ・サーバー" message="これから伸ばしていきたい分野です。" :skills="[
                    { name: 'Docker', level: 60, comment: '' },
                    { name: 'Nginx', level: 35, comment: '' },
                    { name: 'Conoha', level: 35, comment: '(実務経験なし)' },
                    { name: 'Kubernetes', level: 30, comment: '(実務経験なし)' },
                    { name: 'AWS', level: 10, comment: '(実務経験なし)' },
                ]" />
                    <SkillCategory title="その他" message="" :skills="[
                    { name: 'Github', level: 60, comment: '' },
                    { name: 'VSCode', level: 60, comment: '' },
                    { name: 'Figma', level: 20, comment: '要件定義で使う' },
                    { name: 'Google Spreadsheet', level: 20, comment: '要件定義で使う' },
                ]" />
                </div>
            </ResumeSection>
            <hr class="m-0" />

            <ResumeSection id="thankyou">
                <h2 class="text-4xl font-bold md:text-5xl"><span class="text-primary">Thank</span> You!</h2>
                <p class="text-gray-700 leading-relaxed">
                    ポートフォリオをご覧いただきありがとうございます。
                </p>
            </ResumeSection>

        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import ResumeSection from './ResumeSection.vue';
import SkillsRadarChart from './SkillsRadarChart.vue';
import SkillCategory from './SkillCategory.vue';

const sections = [
    { id: 'profile', name: 'Profile' },
    { id: 'history', name: 'History' },
    { id: 'projects', name: 'Projects' },
    { id: 'skills', name: 'Skills' },
    { id: 'thankyou', name: 'Thank you!' },
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
        title: 'ECプラットフォーム開発',
        description: '企業間でのギフト送付を目的としたオンラインショッピングモールです。企業が他の企業にプレゼントを送る際に、最適なギフトを推薦する機能を持っています。',
        duration: '2021/6〜2022/7 (14ヶ月)',
        type: '受託開発',
        roles: [
            '要件定義(お手伝い)',
            '設計（基本設計、画面設計、詳細設計）',
            'Webアプリの開発（運営向け、加盟店向け、利用者向け(外注)）',
            'Web APIの開発（利用者スマホアプリ向け）',
            'PAY.JP Platform型 API'
        ],
        pc: ['Windows 10', 'Mac mini'],
        languages: ['Laravel(PHP8)', 'Vue3', 'TypeScript', 'JavaScript', 'SCSS', 'Bootstrap5', 'Flutter(Dart)'],
        environment: ['phpMyAdmin', 'MariaDB', 'MinIO', 'Docker', 'AWS', 'Visual Studio Code', 'GitHub', 'SCSS', 'Bootstrap 5', 'Redmine', 'LINE WORKS'],
        growth: [
            '・新技術の調査、導入(Docker・Vue3)',
            '・お客様とのMTGで基本設計フェーズ以降の質疑応答を担当',
            '・外注先エンジニアに、技術コーチング(Laravel、Vue3)',
        ]
    },
    {
        id: 2,
        title: '通信講座システム機能追加',
        description: '受講生が購入した通信講座のスケジュール管理機能を追加',
        duration: '2023/06〜2023/12(6ヶ月)',
        type: '受託開発',
        roles: [
            '要件定義',
            '設計（基本設計、画面設計、詳細設計）',
            'Webアプリの開発（運営向け、利用者向け(外注)）',
        ],
        pc: ['Mac mini'],
        languages: ['Laravel8(PHP8)', 'JQuery'],
        environment: ['MySQL', 'Docker', 'Visual Studio Code', 'GitHub', 'Office', 'Backlog', 'LINE WORKS'],
        growth: [
            '・要件定義から納品までやりきった。',
            '・スケジュール管理や、お客様とのコミュニケーションの大事さを身をもって知る。',
        ]
    },
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