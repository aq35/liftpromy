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
        <div class="container-fluid p-0">
            <section class="resume-section" id="profile">
                <div class="resume-section-content">
                    <div class="relative max-w-screen-xl w-full mx-auto xl:px-5">
                        <div class="relative w-full grid gap-12 lg:grid-cols-2">
                            <div class="w-full flex justify-center items-center px-3 xl:px-0">
                                <div class="sm:max-w-[480px]">
                                    <h2 class="text-4xl font-bold md:text-5xl">PRO<span class="text-primary">FILE</span>
                                    </h2>
                                    <p class="mb-1"><strong class="d-inline-block" style="width: 150px;">名　前</strong>細部
                                        寿麻（ほそべ かずま）</p>
                                    <p class="mb-1"><strong class="d-inline-block" style="width: 150px;">所在地</strong>東京都
                                        日野市</p>
                                    <p class="mb-1"><strong class="d-inline-block"
                                            style="width: 150px;">メールアドレス</strong><a
                                            href="mailto:nagarestarzxc@gmail.com">nagarestarzxc@gmail.com</a></p>
                                    <p class="mb-1"><strong class="d-inline-block" style="width: 150px;">SNS</strong><a
                                            href="mailto:nagarestarzxc@gmail.com">
                                            <a class="btn btn-sm btn-outline-dark" href="https://github.com/aq35"
                                                target="_blank">
                                                <i class="fab fa-github"></i> aq35
                                            </a>
                                        </a></p>
                                    <p class="mb-2"></p>
                                    <div class="sm:max-w-[480px]">
                                        <p class="mb-1"><strong class="d-inline-block"
                                                style="width: 150px;">Mission</strong></p>
                                        <p class="mb-1 text-gray-700 leading-relaxed">
                                            「多様な技術分野での知識とスキルを活かし、ユーザーに価値あるソリューションを提供すること。」
                                        </p>
                                        <p class="mb-1"><strong class="d-inline-block"
                                                style="width: 150px;">Vision</strong></p>
                                        <p class="mb-1 text-gray-700 leading-relaxed">
                                            「常に技術の最前線に立ち、フロントエンドからインフラ、機械学習まで幅広い分野での専門性を持ち、全ての開発工程で高品質な成果を生み出すエンジニアとして成長する」
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr class="m-0" />

            <!-- プロフィール -->
            <section class="resume-section" id="history">
                <div class="resume-section-content">
                    <div class="relative max-w-screen-xl w-full mx-auto xl:px-5">
                        <div class="relative w-full grid gap-12 lg:grid-cols-2">
                            <div class="w-full flex justify-center items-center px-3 xl:px-0">
                                <div class="sm:max-w-[480px]">
                                    <h2 class="text-4xl font-bold md:text-5xl">Hist<span class="text-primary">ory</span>
                                    </h2>
                                    <div class="sm:max-w-[480px]">
                                        <p class="mb-1 text-gray-700 leading-relaxed">
                                            5年間の様々な業種でのアルバイト経験を経て、手に職をつけたいと思い、SES企業に入社しました。
                                            しかし、成長を感じられず、一つのプロジェクトが終わったのを機に退職しました。
                                        </p>
                                        <p class="mb-1 text-gray-700 leading-relaxed">
                                            その後、介護福祉の仕事に出会い、穏やかな時間を過ごす中で、自分の問題（目標の設定、学習方法、コミュニケーション）に気付きました。
                                        </p>
                                        <p class="mb-1 text-gray-700 leading-relaxed">
                                            システム開発会社に入社し、現在はWEB系の受託開発に携わっております。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr class="m-0" />

            <!-- <hr class="m-0" />
            <section class="resume-section" id="experience">
                <div class="resume-section-content">
                    <h2 class="mb-5">Experience</h2>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Senior Web Developer</h3>
                            <div class="subheading mb-3">Intelitec Solutions</div>
                            <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end
                                of the day, going forward, a new normal that has evolved from generation X is on the
                                runway heading towards a streamlined cloud solution. User generated content in real-time
                                will have multiple touchpoints for offshoring.</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">March 2013 - Present</span></div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Web Developer</h3>
                            <div class="subheading mb-3">Intelitec Solutions</div>
                            <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.
                                Override the digital divide with additional clickthroughs from DevOps. Nanotechnology
                                immersion along the information highway will close the loop on focusing solely on the
                                bottom line.</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">December 2011 - March 2013</span></div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Junior Web Designer</h3>
                            <div class="subheading mb-3">Shout! Media Productions</div>
                            <p>Podcasting operational change management inside of workflows to establish a framework.
                                Taking seamless key performance indicators offline to maximise the long tail. Keeping
                                your eye on the ball while performing a deep dive on the start-up mentality to derive
                                convergence on cross-platform integration.</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">July 2010 - December 2011</span></div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Web Design Intern</h3>
                            <div class="subheading mb-3">Shout! Media Productions</div>
                            <p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically
                                procrastinate B2C users after installed base benefits. Dramatically visualize customer
                                directed convergence without revolutionary ROI.</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">September 2008 - June 2010</span></div>
                    </div>
                </div>
            </section>
            <hr class="m-0" />
            <section class="resume-section" id="education">
                <div class="resume-section-content">
                    <h2 class="mb-5">Education</h2>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">University of Colorado Boulder</h3>
                            <div class="subheading mb-3">Bachelor of Science</div>
                            <div>Computer Science - Web Development Track</div>
                            <p>GPA: 3.23</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">August 2006 - May 2010</span></div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">James Buchanan High School</h3>
                            <div class="subheading mb-3">Technology Magnet Program</div>
                            <p>GPA: 3.56</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">August 2002 - May 2006</span></div>
                    </div>
                </div>
            </section>
            <hr class="m-0" />
            <section class="resume-section" id="skills">
                <div class="resume-section-content">
                    <h2 class="mb-5">Skills</h2>
                    <div class="subheading mb-3">Programming Languages & Tools</div>
                    <ul class="list-inline dev-icons">
                        <li class="list-inline-item"><i class="fab fa-html5"></i></li>
                        <li class="list-inline-item"><i class="fab fa-css3-alt"></i></li>
                        <li class="list-inline-item"><i class="fab fa-js-square"></i></li>
                        <li class="list-inline-item"><i class="fab fa-angular"></i></li>
                        <li class="list-inline-item"><i class="fab fa-react"></i></li>
                        <li class="list-inline-item"><i class="fab fa-node-js"></i></li>
                        <li class="list-inline-item"><i class="fab fa-sass"></i></li>
                        <li class="list-inline-item"><i class="fab fa-less"></i></li>
                        <li class="list-inline-item"><i class="fab fa-wordpress"></i></li>
                        <li class="list-inline-item"><i class="fab fa-gulp"></i></li>
                        <li class="list-inline-item"><i class="fab fa-grunt"></i></li>
                        <li class="list-inline-item"><i class="fab fa-npm"></i></li>
                    </ul>
                    <div class="subheading mb-3">Workflow</div>
                    <ul class="fa-ul mb-0">
                        <li>
                            <span class="fa-li"><i class="fas fa-check"></i></span>
                            Mobile-First, Responsive Design
                        </li>
                        <li>
                            <span class="fa-li"><i class="fas fa-check"></i></span>
                            Cross Browser Testing & Debugging
                        </li>
                        <li>
                            <span class="fa-li"><i class="fas fa-check"></i></span>
                            Cross Functional Teams
                        </li>
                        <li>
                            <span class="fa-li"><i class="fas fa-check"></i></span>
                            Agile Development & Scrum
                        </li>
                    </ul>
                </div>
            </section>
            <hr class="m-0" />
            <section class="resume-section" id="interests">
                <div class="resume-section-content">
                    <h2 class="mb-5">Interests</h2>
                    <p>Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an
                        avid skier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain
                        biking, free climbing, and kayaking.</p>
                    <p class="mb-0">When forced indoors, I follow a number of sci-fi and fantasy genre movies and
                        television shows, I am an aspiring chef, and I spend a large amount of my free time exploring
                        the latest technology advancements in the front-end web development world.</p>
                </div>
            </section>
            <hr class="m-0" />
            <section class="resume-section" id="awards">
                <div class="resume-section-content">
                    <h2 class="mb-5">Awards & Certifications</h2>
                    <ul class="fa-ul mb-0">
                        <li>
                            <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
                            Google Analytics Certified Developer
                        </li>
                        <li>
                            <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
                            Mobile Web Specialist - Google Certification
                        </li>
                        <li>
                            <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
                            1
                            <sup>st</sup>
                            Place - University of Colorado Boulder - Emerging Tech Competition 2009
                        </li>
                        <li>
                            <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
                            1
                            <sup>st</sup>
                            Place - University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category)
                        </li>
                        <li>
                            <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
                            2
                            <sup>nd</sup>
                            Place - University of Colorado Boulder - Emerging Tech Competition 2008
                        </li>
                        <li>
                            <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
                            1
                            <sup>st</sup>
                            Place - James Buchanan High School - Hackathon 2006
                        </li>
                        <li>
                            <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
                            3
                            <sup>rd</sup>
                            Place - James Buchanan High School - Hackathon 2005
                        </li>
                    </ul>
                </div>
            </section> -->
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const sections = [
    { id: 'profile', name: 'Profile' },
    { id: 'history', name: 'History' },
    // { id: 'education', name: 'Education' },
    // { id: 'skills', name: 'Skills' },
    // { id: 'interests', name: 'Interests' },
    // { id: 'awards', name: 'Awards' },
];

const activeSection = ref('');

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
    color: #ffffff !important;
    /* 強調表示の色を指定 */
}
</style>