<template>
    <section id="about">
        <!-- Navigation-->
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a class="navbar-brand js-scroll-trigger" href="#page-top">
                <span class="d-block d-lg-none">細部 寿麻</span>
                <span class="d-none d-lg-block">
                    <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="@/assets/aq35/logo.webp"
                        alt="プロフィール" />
                </span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
                aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav">
                    <li class="nav-item" v-for="section in sections" :key="section.id">
                        <a class="nav-link js-scroll-trigger" :class="{ active: activeSection === section.id }"
                            :href="'#' + section.id">{{ section.name }}</a>
                    </li>
                </ul>
            </div>
        </nav>
        <!-- Page Content-->
        <div class="container-fluid p-0">
            <template v-for="section in sections" :key="section.id">
                <section :class="section.class" :id="section.id">
                    <div class="resume-section-content">
                        <h2 class="mb-5">{{ section.title }}</h2>
                        <template v-for="content in section.contents">
                            <div v-if="content.type === 'text'" class="mb-5" v-html="content.data"></div>
                            <div v-else-if="content.type === 'list'" class="mb-5">
                                <ul class="fa-ul mb-0">
                                    <li v-for="item in content.data" :key="item">
                                        <span class="fa-li"><i class="fas fa-check"></i></span>
                                        {{ item }}
                                    </li>
                                </ul>
                            </div>
                            <div v-else-if="content.type === 'icons'" class="mb-5">
                                <ul class="list-inline dev-icons">
                                    <li class="list-inline-item" v-for="icon in content.data" :key="icon">
                                        <i :class="icon"></i>
                                    </li>
                                </ul>
                            </div>
                        </template>
                    </div>
                </section>
                <hr class="m-0" />
            </template>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const sections = [
    {
        id: 'profile', name: 'PROFILE', title: 'Profile', class: 'resume-section', contents: [
            { type: 'text', data: '私は、5年間のアルバイト経験を経て、1年間エンジニアとして勤務しました。アルバイト時代は虚しさを感じることもありましたが、エンジニアとしてのはじまりは希望に満ち溢れていたような気がします。しかし、自分の無力さを痛感し、プロジェクトを続けることが難しいと判断しました。その後、1年間の介護経験を通じて穏やかな時間を過ごす中で、もう一度自分がやりたいことに挑戦したいと思い、エンジニアの門を再びくぐりました。現在、エンジニアとして5年目を迎えています。' }
        ]
    },
    {
        id: 'about', name: 'About', title: 'About', class: 'resume-section', contents: [
            { type: 'text', data: '<h1 class="mb-0">Clarence <span class="text-primary">Taylor</span></h1><div class="subheading mb-5">3542 Berry Street · Cheyenne Wells, CO 80810 · (317) 585-8468 · <a href="mailto:name@email.com">name@email.com</a></div><p class="lead mb-5">I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p><div class="social-icons"><a class="social-icon" href="#!"><i class="fab fa-linkedin-in"></i></a><a class="social-icon" href="#!"><i class="fab fa-github"></i></a><a class="social-icon" href="#!"><i class="fab fa-twitter"></i></a><a class="social-icon" href="#!"><i class="fab fa-facebook-f"></i></a></div>' }
        ]
    },
    {
        id: 'experience', name: 'Experience', title: 'Experience', class: 'resume-section', contents: [
            { type: 'text', data: '<div class="d-flex flex-column flex-md-row justify-content-between mb-5"><div class="flex-grow-1"><h3 class="mb-0">Senior Web Developer</h3><div class="subheading mb-3">Intelitec Solutions</div><p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p></div><div class="flex-shrink-0"><span class="text-primary">March 2013 - Present</span></div></div>' },
            { type: 'text', data: '<div class="d-flex flex-column flex-md-row justify-content-between mb-5"><div class="flex-grow-1"><h3 class="mb-0">Web Developer</h3><div class="subheading mb-3">Intelitec Solutions</div><p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p></div><div class="flex-shrink-0"><span class="text-primary">December 2011 - March 2013</span></div></div>' }
        ]
    },
    {
        id: 'education', name: 'Education', title: 'Education', class: 'resume-section', contents: [
            { type: 'text', data: '<div class="d-flex flex-column flex-md-row justify-content-between mb-5"><div class="flex-grow-1"><h3 class="mb-0">University of Colorado Boulder</h3><div class="subheading mb-3">Bachelor of Science</div><div>Computer Science - Web Development Track</div><p>GPA: 3.23</p></div><div class="flex-shrink-0"><span class="text-primary">August 2006 - May 2010</span></div></div>' },
            { type: 'text', data: '<div class="d-flex flex-column flex-md-row justify-content-between"><div class="flex-grow-1"><h3 class="mb-0">James Buchanan High School</h3><div class="subheading mb-3">Technology Magnet Program</div><p>GPA: 3.56</p></div><div class="flex-shrink-0"><span class="text-primary">August 2002 - May 2006</span></div></div>' }
        ]
    },
    {
        id: 'skills', name: 'Skills', title: 'Skills', class: 'resume-section', contents: [
            { type: 'text', data: '<div class="subheading mb-3">Programming Languages & Tools</div>' },
            { type: 'icons', data: ['fab fa-html5', 'fab fa-css3-alt', 'fab fa-js-square', 'fab fa-angular', 'fab fa-react', 'fab fa-node-js', 'fab fa-sass', 'fab fa-less', 'fab fa-wordpress', 'fab fa-gulp', 'fab fa-grunt', 'fab fa-npm'] },
            { type: 'text', data: '<div class="subheading mb-3">Workflow</div>' },
            { type: 'list', data: ['Mobile-First, Responsive Design', 'Cross Browser Testing & Debugging', 'Cross Functional Teams', 'Agile Development & Scrum'] }
        ]
    },
    {
        id: 'interests', name: 'Interests', title: 'Interests', class: 'resume-section', contents: [
            { type: 'text', data: 'Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and kayaking.' },
            { type: 'text', data: 'When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world.' }
        ]
    },
    {
        id: 'awards', name: 'Awards', title: 'Awards & Certifications', class: 'resume-section', contents: [
            { type: 'list', data: ['Google Analytics Certified Developer', 'Mobile Web Specialist - Google Certification', '1st Place - University of Colorado Boulder - Emerging Tech Competition 2009', '1st Place - University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category)', '2nd Place - University of Colorado Boulder - Emerging Tech Competition 2008', '1st Place - James Buchanan High School - Hackathon 2006', '3rd Place - James Buchanan High School - Hackathon 2005'] }
        ]
    }
];

const activeSection = ref('');

const handleScroll = () => {
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

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.nav-link.active {
    font-weight: bold;
    color: #ff5733 !important;
    /* 強調表示の色を指定 */
}
</style>
