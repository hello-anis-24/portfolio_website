document.getElementById('year').textContent=new Date().getFullYear();
const phrases=['Power BI Developer','Microsoft Certified Data Analyst','SQL & Excel Analyst','Python Data Analyst'];let pi=0,ci=0,deleting=false;const typing=document.getElementById('typingText');function typeLoop(){const word=phrases[pi];typing.textContent=deleting?word.slice(0,--ci):word.slice(0,++ci);let wait=deleting?42:76;if(!deleting&&ci===word.length){deleting=true;wait=1250}else if(deleting&&ci===0){deleting=false;pi=(pi+1)%phrases.length;wait=260}setTimeout(typeLoop,wait)}typeLoop();
const themeBtn=document.getElementById('themeToggle'),saved=localStorage.getItem('portfolio-theme');if(saved==='light')document.body.classList.add('light');function themeIcon(){themeBtn.textContent=document.body.classList.contains('light')?'☾':'☀'}themeIcon();themeBtn.addEventListener('click',()=>{document.body.classList.toggle('light');localStorage.setItem('portfolio-theme',document.body.classList.contains('light')?'light':'dark');themeIcon()});
const form=document.getElementById('contactForm');form.addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.target),subject=encodeURIComponent('Portfolio inquiry: '+f.get('type')),body=encodeURIComponent(`Name: ${f.get('name')}\nEmail: ${f.get('email')}\nProject: ${f.get('type')}\n\n${f.get('message')}`),t=document.getElementById('toast');t.style.opacity=1;t.style.transform='translateY(0)';setTimeout(()=>t.style.opacity=0,1800);window.location.href=`mailto:anis360@gmail.com?subject=${subject}&body=${body}`});
const revealTargets=document.querySelectorAll('.section-head,.about-grid>*,.cert-grid>*,.contact>*,.facts>div,.project,.skill-box,.services>div,.steps>div,.client-strip>div');revealTargets.forEach((el,i)=>el.style.transitionDelay=`${(i%4)*70}ms`);const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');revealObserver.unobserve(entry.target)}}),{threshold:.12,rootMargin:'0px 0px -40px 0px'});revealTargets.forEach(el=>revealObserver.observe(el));
const skillObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(!entry.isIntersecting)return;const box=entry.target,bar=box.querySelector('.skill-fill'),pct=box.querySelector('.skill-top span:last-child'),target=parseInt(bar.dataset.level,10);requestAnimationFrame(()=>bar.style.width=target+'%');let start=null;function count(ts){if(!start)start=ts;const progress=Math.min((ts-start)/1200,1),eased=1-Math.pow(1-progress,3);pct.textContent=Math.round(target*eased)+'%';if(progress<1)requestAnimationFrame(count)}requestAnimationFrame(count);skillObserver.unobserve(box)}),{threshold:.45});document.querySelectorAll('.skill-box').forEach(x=>skillObserver.observe(x));
const modal=document.getElementById('projectModal'),fields={image:document.getElementById('modalImage'),title:document.getElementById('modalTitle'),desc:document.getElementById('modalDesc'),tags:document.getElementById('modalTags'),requirement:document.getElementById('modalRequirement'),details:document.getElementById('modalDetails'),output:document.getElementById('modalOutput'),insights:document.getElementById('modalInsights'),recommend:document.getElementById('modalRecommend'),impact:document.getElementById('modalImpact')};function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow=''}document.querySelectorAll('.project').forEach(p=>p.querySelector('.project-media').addEventListener('click',()=>{fields.image.src=p.dataset.image;fields.title.textContent=p.dataset.title;fields.desc.textContent=p.dataset.desc;fields.tags.textContent=p.dataset.tags;fields.requirement.textContent=p.dataset.requirement;fields.details.textContent=p.dataset.details;fields.output.textContent=p.dataset.output;fields.insights.textContent=p.dataset.insights;fields.recommend.textContent=p.dataset.recommend;fields.impact.textContent=p.dataset.impact;modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}));document.getElementById('modalClose').addEventListener('click',closeModal);document.getElementById('modalContact').addEventListener('click',closeModal);modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
if(matchMedia('(pointer:fine)').matches){const hero=document.querySelector('.hero'),o1=document.querySelector('.o1'),o2=document.querySelector('.o2');hero.addEventListener('mousemove',e=>{const x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;o1.style.transform=`translate(${x*22}px,${y*18}px)`;o2.style.transform=`translate(${x*-16}px,${y*-12}px)`})}


// Highlight the navigation link for the section currently in view
const navLinks = [...document.querySelectorAll('.nav a[href^="#"]')];
const navSections = navLinks
  .map(link => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

function updateActiveNav(){
  const marker = window.scrollY + 140;
  let current = navSections[0];

  navSections.forEach(section => {
    if(section.offsetTop <= marker) current = section;
  });

  navLinks.forEach(link => {
    const isActive = current && link.getAttribute('href') === '#' + current.id;
    link.classList.toggle('active', isActive);
    if(isActive) link.setAttribute('aria-current','page');
    else link.removeAttribute('aria-current');
  });
}

window.addEventListener('scroll', updateActiveNav, {passive:true});
window.addEventListener('resize', updateActiveNav);
updateActiveNav();
