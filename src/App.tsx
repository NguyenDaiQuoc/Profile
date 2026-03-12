/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Wrench, 
  Trophy, 
  Briefcase, 
  GraduationCap, 
  Heart,
  FileText,
  Sparkles,
  Terminal
} from 'lucide-react';
import { motion } from 'motion/react';

const projects = [
  {
    title: "Telegram Bot – Bach Hoa Xanh Price Checker",
    description: "Automates product search and price comparison for Bach Hoa Xanh products.",
    link: "https://github.com/NguyenDaiQuoc/BotcheckgiaTelegram",
    tags: ["Telegram API", "Automation", "Price Comparison"],
    color: "from-emerald-500 to-cyan-500"
  },
  {
    title: "E-Commerce Grocery Website",
    description: "Full-featured e-commerce site with product listing, shopping cart, and order management.",
    link: "https://github.com/NguyenDaiQuoc/TiemBachHoaHaiTuiMinh",
    tags: ["E-commerce", "Web Development", "Cart Management"],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Sports Clothing Store Website",
    description: "Designed product catalog and online shopping workflow for sports apparel.",
    link: "https://github.com/zaikaman/WebBanHangCNPM",
    tags: ["UI/UX", "Frontend", "Shopping Workflow"],
    color: "from-blue-500 to-indigo-500"
  },
  {
    title: "Smart Plant Watering Simulation App",
    description: "Inspired by smart plant watering systems, demonstrates automated logic and scheduling.",
    link: "https://github.com/zaikaman/AppTuoiCay",
    tags: ["Simulation", "Automation", "IoT Logic"],
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Nutrition Management Web/App",
    description: "Manage daily nutrition and diet tracking, monitor food intake and info.",
    link: "https://github.com/NguyenDaiQuoc/Nutrition-Manager",
    tags: ["HealthTech", "Data Tracking", "Nutrition"],
    color: "from-yellow-500 to-emerald-500"
  }
];

const skills = {
  languages: ["C/C++", "HTML", "CSS", "JavaScript", "TypeScript", "React", "Java"],
  tools: ["Git", "GitHub", "Visual Studio Code"]
};

export default function App() {
  const openResume = () => {
    const resumeWindow = window.open('', '_blank');
    if (!resumeWindow) return;

    const resumeHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>NguyenDaiQuoc_resume</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
        <style>
          @page {
            size: A4;
            margin: 15mm;
          }
          body { 
            font-family: 'Inter', sans-serif; 
            background-color: #f3f4f6; 
            color: #111827;
            margin: 0;
            padding: 0;
          }
          .serif { font-family: 'Libre Baskerville', serif; }
          .page { 
            background: white; 
            width: 210mm; 
            min-height: 297mm; 
            padding: 20mm; 
            margin: 2rem auto; 
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            box-sizing: border-box;
          }
          .section-header {
            font-family: 'Libre Baskerville', serif;
            font-size: 1rem;
            text-transform: uppercase;
            border-bottom: 1px solid #000;
            padding-bottom: 2px;
            margin-top: 1.5rem;
            margin-bottom: 0.75rem;
          }
          .item-title { font-weight: 700; font-size: 1.05rem; }
          .item-date { font-size: 0.95rem; color: #374151; }
          .item-desc { font-size: 0.95rem; color: #374151; margin-top: 2px; }
          ul { list-style-type: disc; margin-left: 1.25rem; margin-top: 0.25rem; }
          li { margin-bottom: 0.1rem; font-size: 0.95rem; }
          @media print {
            body { background: white; }
            .page { margin: 0; box-shadow: none; width: 210mm; height: 297mm; }
            .no-print { display: none; }
          }
        </style>
      </head>
      <body>
        <div class="no-print fixed top-6 right-6 z-50">
          <button onclick="window.print()" class="bg-black text-white px-6 py-3 rounded-lg text-sm font-bold shadow-xl hover:bg-gray-800 transition-all flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9V2h12v7"></path><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
            Print / Save as PDF
          </button>
        </div>

        <div class="page">
          <header class="text-center mb-8">
            <h1 class="serif text-4xl font-normal mb-4">Nguyen Dai Quoc</h1>
            <div class="flex justify-center gap-6 text-sm text-gray-700">
              <span class="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                github.com/NguyenDaiQuoc
              </span>
              <span class="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                linkedin.com/in/NguyenDaiQuoc
              </span>
              <span class="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                luutrithon1996@gmail.com
              </span>
            </div>
          </header>

          <section>
            <h2 class="section-header">Education</h2>
            <div class="flex justify-between items-baseline">
              <span class="item-title">Saigon University</span>
              <span class="item-date">2022 — 2027</span>
            </div>
            <p class="italic text-gray-600">Bachelor of Software Engineering</p>
          </section>

          <section>
            <h2 class="section-header">Skills</h2>
            <div class="space-y-1">
              <p><span class="font-bold">Languages:</span> C/C++, HTML, CSS, JavaScript, TypeScript, React, Java</p>
              <p><span class="font-bold">Tools:</span> Git, GitHub, Visual Studio Code</p>
            </div>
          </section>

          <section>
            <h2 class="section-header">Awards</h2>
            <div class="space-y-3">
              <div>
                <div class="flex justify-between items-baseline">
                  <span class="item-title">Robot Fire Fighting Competition – City Level</span>
                  <span class="item-date">2018 — 2019</span>
                </div>
                <ul><li>Consolation Prize</li></ul>
              </div>
              <div>
                <div class="flex justify-between items-baseline">
                  <span class="item-title">Robot Fire Fighting Competition – District Level</span>
                  <span class="item-date">2018 — 2019</span>
                </div>
                <ul><li>Consolation Prize</li></ul>
              </div>
            </div>
          </section>

          <section>
            <h2 class="section-header">Projects</h2>
            <div class="space-y-4">
              <div>
                <p class="item-title">Telegram Bot – Bach Hoa Xanh Price Checker</p>
                <ul>
                  <li>Telegram bot that checks product prices from Bach Hoa Xanh</li>
                  <li>Automates product search and price comparison</li>
                  <li>Link: <span class="italic">https://github.com/NguyenDaiQuoc/BotcheckgiaTelegram</span></li>
                </ul>
              </div>
              <div>
                <p class="item-title">E-Commerce Grocery Website</p>
                <ul>
                  <li>E-commerce website for selling grocery products</li>
                  <li>Includes product listing, shopping cart and order management</li>
                  <li>Link: <span class="italic">https://github.com/NguyenDaiQuoc/TiemBachHoaHaiTuiMinh</span></li>
                </ul>
              </div>
              <div>
                <p class="item-title">Sports Clothing Store Website</p>
                <ul>
                  <li>E-commerce website for selling sports clothing</li>
                  <li>Designed product catalog and online shopping workflow</li>
                  <li>Link: <span class="italic">https://github.com/zaikaman/WebBanHangCNPM</span></li>
                </ul>
              </div>
              <div>
                <p class="item-title">Smart Plant Watering Simulation App</p>
                <ul>
                  <li>Simulation app inspired by smart plant watering systems</li>
                  <li>Demonstrates automated watering logic and scheduling</li>
                  <li>Link: <span class="italic">https://github.com/zaikaman/AppTuoiCay</span></li>
                </ul>
              </div>
              <div>
                <p class="item-title">Nutrition Management Web/App</p>
                <ul>
                  <li>Application to manage daily nutrition and diet tracking</li>
                  <li>Allows users to monitor food intake and nutrition information</li>
                  <li>Link: <span class="italic">https://github.com/NguyenDaiQuoc/Nutrition-Manager</span></li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 class="section-header">Experience</h2>
            <div>
              <div class="flex justify-between items-baseline">
                <span class="item-title">Math Tutor</span>
                <span class="item-date">Present</span>
              </div>
              <ul>
                <li>Tutored mathematics for students from kindergarten to grade 8</li>
                <li>Helped students improve basic math skills and problem solving</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 class="section-header">Hobbies</h2>
            <div class="space-y-3">
              <div>
                <p class="item-title">Music</p>
                <ul><li>Listening to music and producing music</li></ul>
              </div>
              <div>
                <p class="item-title">Reading</p>
                <ul><li>Reading books about technology, business and personal development</li></ul>
              </div>
              <div>
                <p class="item-title">Entrepreneurship</p>
                <ul><li>Interested in business and trading</li></ul>
              </div>
            </div>
          </section>
        </div>
      </body>
      </html>
    `;

    resumeWindow.document.write(resumeHtml);
    resumeWindow.document.close();
  };

  return (
    <div className="min-h-screen bg-[#050505] text-stone-200 font-sans selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden">
      {/* Background Atmosphere */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-purple-500/10 blur-[120px] rounded-full" />
        <div className="absolute top-[40%] right-[10%] w-[20%] h-[20%] bg-blue-500/10 blur-[100px] rounded-full" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/40 backdrop-blur-xl border-b border-white/5 z-50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-black text-xl tracking-tighter bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
          >
            NDQ.
          </motion.span>
          <div className="flex gap-8 items-center">
            <a href="#projects" className="text-xs uppercase tracking-widest font-bold text-stone-400 hover:text-emerald-400 transition-colors">Projects</a>
            <button 
              onClick={openResume}
              className="group relative flex items-center gap-2 px-5 py-2 bg-white text-black rounded-full text-xs font-black uppercase tracking-widest hover:scale-105 transition-all active:scale-95 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              <FileText size={14} className="relative z-10" />
              <span className="relative z-10">View CV</span>
            </button>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-40 pb-24">
        {/* Hero Section */}
        <section className="mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-widest mb-8">
              <Sparkles size={12} />
              Available for opportunities
            </div>
            <h1 className="text-7xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
              NGUYEN <br />
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">DAI QUOC</span>
            </h1>
            <p className="text-lg text-stone-400 max-w-xl mb-10 leading-relaxed font-medium">
              Software Engineering student crafting digital experiences with precision and color. 
              Turning complex logic into vibrant, user-centric applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://github.com/NguyenDaiQuoc" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all group">
                <Github size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://linkedin.com/in/NguyenDaiQuoc" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all group">
                <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="mailto:luutrithon1996@gmail.com" className="p-3 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all group">
                <Mail size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </motion.div>
        </section>

        {/* Stats/Quick Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          <div className="p-8 bg-white/5 border border-white/10 rounded-[2rem] backdrop-blur-md">
            <GraduationCap className="text-emerald-400 mb-4" size={24} />
            <h3 className="text-stone-400 text-[10px] uppercase tracking-widest font-bold mb-2">Education</h3>
            <p className="font-bold text-lg">Saigon University</p>
            <p className="text-xs text-stone-500 mt-1">Software Engineering '27</p>
          </div>
          <div className="p-8 bg-white/5 border border-white/10 rounded-[2rem] backdrop-blur-md">
            <Trophy className="text-purple-400 mb-4" size={24} />
            <h3 className="text-stone-400 text-[10px] uppercase tracking-widest font-bold mb-2">Awards</h3>
            <p className="font-bold text-lg">Robot Fire Fighting</p>
            <p className="text-xs text-stone-500 mt-1">City & District Level Prizes</p>
          </div>
          <div className="p-8 bg-white/5 border border-white/10 rounded-[2rem] backdrop-blur-md">
            <Terminal className="text-cyan-400 mb-4" size={24} />
            <h3 className="text-stone-400 text-[10px] uppercase tracking-widest font-bold mb-2">Focus</h3>
            <p className="font-bold text-lg">Full Stack Dev</p>
            <p className="text-xs text-stone-500 mt-1">React, C++, TypeScript</p>
          </div>
        </div>

        {/* Projects Grid */}
        <section id="projects" className="mb-32">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl font-black tracking-tighter mb-2">PROJECTS</h2>
              <div className="h-1 w-12 bg-emerald-500 rounded-full" />
            </div>
            <p className="text-stone-500 text-xs font-bold uppercase tracking-widest">Selected Works</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="group relative p-8 bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden cursor-pointer"
                onClick={() => window.open(project.link, '_blank')}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.color} opacity-10 blur-3xl group-hover:opacity-30 transition-opacity`} />
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${project.color} bg-opacity-10`}>
                      <Wrench size={20} className="text-white" />
                    </div>
                    <ExternalLink size={18} className="text-stone-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-emerald-400 transition-colors">{project.title}</h3>
                  <p className="text-stone-400 text-sm leading-relaxed mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[9px] uppercase tracking-widest font-black text-stone-500 px-2 py-1 bg-white/5 rounded-md border border-white/5">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Marquee-like Section */}
        <section className="mb-32">
          <h2 className="text-center text-stone-600 text-[10px] uppercase tracking-[0.3em] font-black mb-12">Technologies I use</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[...skills.languages, ...skills.tools].map((skill, i) => (
              <motion.span 
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-sm font-bold hover:bg-white/10 hover:border-emerald-500/30 transition-all"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </section>

        {/* Experience & Hobbies Split */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-10 bg-gradient-to-br from-emerald-500/10 to-transparent border border-white/10 rounded-[3rem]">
            <Briefcase className="text-emerald-400 mb-6" size={32} />
            <h3 className="text-2xl font-black mb-4">EXPERIENCE</h3>
            <div className="space-y-6">
              <div>
                <p className="font-bold text-lg">Math Tutor</p>
                <p className="text-stone-500 text-sm mb-2">Kindergarten to Grade 8</p>
                <p className="text-stone-400 text-sm leading-relaxed">Helping students master core concepts and problem-solving strategies.</p>
              </div>
            </div>
          </div>
          <div className="p-10 bg-gradient-to-br from-purple-500/10 to-transparent border border-white/10 rounded-[3rem]">
            <Heart className="text-purple-400 mb-6" size={32} />
            <h3 className="text-2xl font-black mb-4">HOBBIES</h3>
            <div className="flex flex-wrap gap-2">
              {["Music Production", "Tech Reading", "Trading", "Personal Dev"].map(hobby => (
                <span key={hobby} className="px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-xs font-bold">{hobby}</span>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-20 bg-black/50 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
          <h2 className="text-4xl font-black tracking-tighter mb-8">LET'S BUILD SOMETHING <span className="text-emerald-400">VIBRANT</span>.</h2>
          <div className="flex gap-8 mb-12">
            <a href="https://github.com/NguyenDaiQuoc" className="text-stone-500 hover:text-white transition-colors"><Github size={24} /></a>
            <a href="https://linkedin.com/in/NguyenDaiQuoc" className="text-stone-500 hover:text-white transition-colors"><Linkedin size={24} /></a>
            <a href="mailto:luutrithon1996@gmail.com" className="text-stone-500 hover:text-white transition-colors"><Mail size={24} /></a>
          </div>
          <p className="text-stone-600 text-[10px] uppercase tracking-widest font-bold">© 2026 Nguyen Dai Quoc • All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}
