// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    
    // 初始化粒子背景
    initParticles();
    
    // 初始化打字机效果
    initTypewriter();
    
    // 初始化滚动动画
    initScrollAnimations();
    
    // 平滑滚动功能
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // 更新活跃状态
                navLinks.forEach(nl => nl.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // 导航栏滚动效果
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // 添加背景模糊效果
        if (scrollTop > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
        
        lastScrollTop = scrollTop;
    });

    // 头像悬停效果
    const aiAvatar = document.querySelector('.ai-avatar');
    const aiOverlay = document.querySelector('.ai-overlay');
    
    if (aiAvatar && aiOverlay) {
        aiAvatar.addEventListener('mouseenter', function() {
            aiOverlay.style.opacity = '1';
        });
        
        aiAvatar.addEventListener('mouseleave', function() {
            aiOverlay.style.opacity = '0';
        });
    }

    // 技能卡片动画效果
    const skillItems = document.querySelectorAll('.skill-item');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const skillObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    // 这段代码的作用是：让每个技能卡片（skill-item）在页面初始时都不可见并稍微下移，
    // 当它们滚动到视口（屏幕可见区域）时，通过IntersectionObserver让它们渐渐显示出来并回到原位，实现动画效果。

    skillItems.forEach(item => {
        // 初始时让技能卡片透明并下移20像素
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.6s ease'; // 设置动画过渡效果
        // 监听每个技能卡片是否进入视口
        skillObserver.observe(item);
    });

    // 社交媒体链接悬停效果
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // 按钮点击波纹效果
    // 这段代码的作用是：为所有带有 .btn 类的按钮添加点击波纹动画效果
    // 具体解释如下：
    // 1. 首先，选中页面上所有 class 为 'btn' 的按钮元素。
    const buttons = document.querySelectorAll('.btn');
    // 2. 遍历每一个按钮，为其添加点击事件监听器
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // 3. 创建一个 <span> 元素，用作波纹效果
            const ripple = document.createElement('span');
            // 4. 获取按钮的位置和尺寸
            const rect = this.getBoundingClientRect();
            // 5. 计算波纹的直径，取按钮宽高的最大值，保证波纹能覆盖整个按钮
            const size = Math.max(rect.width, rect.height);
            // 6. 计算波纹出现的位置，让波纹以点击点为中心展开
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            // 7. 设置波纹的大小和位置
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            // 8. 给波纹添加 'ripple' 类，方便用 CSS 控制动画
            ripple.classList.add('ripple');
            
            // 9. 把波纹元素添加到按钮内部
            this.appendChild(ripple);
            
            // 10. 动画结束后（600毫秒），移除波纹元素，避免页面堆积无用节点
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // 添加CSS波纹效果
    const style = document.createElement('style');
    style.textContent = `
        .btn {
            position: relative;
            overflow: hidden;
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // 页面加载完成后的入场动画
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });

    // 滚动进度指示器
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #689f38, #558b2f);
        z-index: 1001;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });

    // 添加键盘导航支持
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // ESC键关闭AI处理状态
            if (aiOverlay && aiOverlay.style.opacity === '1') {
                aiOverlay.style.opacity = '0';
                currentStep = 0;
                aiProcessing.innerHTML = `
                    <svg class="ai-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
                        <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
                        <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
                    </svg>
                    <span>AI形象生成中...</span>
                `;
            }
        }
    });

    // 初始化鼠标互动效果
    initMouseInteractions();
    
    console.log('个人网站加载完成！🎉');
});

// 小红书页面跳转函数
function openXiaohongshu() {
    // 你的小红书页面链接
    const xiaohongshuUrl = 'https://www.xiaohongshu.com/user/profile/5c306cd50000000007022a69';
    
    // 在新窗口打开链接
    window.open(xiaohongshuUrl, '_blank');
    
    // 添加一些用户友好的提示
    console.log('正在打开小红书页面...');
    
    // 如果链接无效，显示提示信息
    setTimeout(() => {
        // 检测是否成功打开了新窗口
        const popup = window.open('', '_blank');
        if (!popup || popup.closed || typeof popup.closed == 'undefined') {
            alert('请允许弹窗访问，或者直接复制链接手动打开：\n' + xiaohongshuUrl);
        }
        popup.close();
    }, 1000);
}

// 抖音页面跳转函数
function openDouyin() {
    // 你的抖音页面链接
    const douyinUrl = 'https://www.douyin.com/user/self?from_tab_name=main';
    
    // 在新窗口打开链接
    window.open(douyinUrl, '_blank');
    
    // 添加一些用户友好的提示
    console.log('正在打开抖音页面...');
    
    // 如果链接无效，显示提示信息
    setTimeout(() => {
        // 检测是否成功打开了新窗口
        const popup = window.open('', '_blank');
        if (!popup || popup.closed || typeof popup.closed == 'undefined') {
            alert('请允许弹窗访问，或者直接复制链接手动打开：\n' + douyinUrl);
        }
        popup.close();
    }, 1000);
}

// 微信二维码弹窗函数
function openWechatQR() {
    const modal = document.getElementById('wechatModal');
    modal.style.display = 'flex';
    // 添加显示动画
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
    
    // 防止背景滚动
    document.body.style.overflow = 'hidden';
    
    console.log('显示微信二维码弹窗');
}

function closeWechatQR() {
    const modal = document.getElementById('wechatModal');
    modal.classList.remove('show');
    
    // 延迟隐藏，等待动画完成
    setTimeout(() => {
        modal.style.display = 'none';
        // 恢复背景滚动
        document.body.style.overflow = 'auto';
    }, 300);
    
    console.log('关闭微信二维码弹窗');
}

// ESC键关闭弹窗
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const modal = document.getElementById('wechatModal');
        if (modal && modal.style.display === 'flex') {
            closeWechatQR();
        }
    }
});

// 粒子背景动画函数
function initParticles() {
    const heroSection = document.querySelector('.hero-section');
    if (!heroSection) return;
    
    // 创建粒子容器
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    heroSection.appendChild(particlesContainer);
    
    // 创建粒子
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // 随机位置和大小
        const x = Math.random() * window.innerWidth;
        const size = Math.random() * 4 + 2;
        const duration = Math.random() * 4 + 8; // 8-12秒
        
        particle.style.left = x + 'px';
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.animationDuration = duration + 's';
        particle.style.animationDelay = Math.random() * 2 + 's';
        
        particlesContainer.appendChild(particle);
        
        // 动画结束后移除粒子
        setTimeout(() => {
            if (particle.parentNode) {
                particle.remove();
            }
        }, (duration + 2) * 1000);
    }
    
    // 持续创建粒子
    setInterval(createParticle, 300);
    
    // 初始创建一些粒子
    for (let i = 0; i < 15; i++) {
        setTimeout(createParticle, i * 200);
    }
}

// 优化的打字机效果函数
function initTypewriter() {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;
    
    const texts = [
        '你好，我是 <span class="highlight">张宇茜</span>',
        '欢迎来到我的 <span class="highlight">个人世界</span>',
        '让我们一起 <span class="highlight">探索未来</span>'
    ];
    
    let currentTextIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let isTyping = false;
    
    // 预处理文本，将HTML标签单独处理
    const processedTexts = texts.map(text => {
        const temp = document.createElement('div');
        temp.innerHTML = text;
        return {
            html: text,
            text: temp.textContent || temp.innerText,
            htmlLength: text.length
        };
    });
    
    // 创建打字机容器，避免重复创建DOM
    heroTitle.innerHTML = '<span class="typewriter-text"></span><span class="typewriter-cursor">|</span>';
    const textElement = heroTitle.querySelector('.typewriter-text');
    const cursorElement = heroTitle.querySelector('.typewriter-cursor');
    
    // 使用requestAnimationFrame优化性能
    let animationId;
    let lastTime = 0;
    
    function typeEffect(currentTime = 0) {
        // 控制动画帧率，避免过快更新
        if (currentTime - lastTime < (isDeleting ? 50 : 100)) {
            animationId = requestAnimationFrame(typeEffect);
            return;
        }
        
        lastTime = currentTime;
        const currentProcessed = processedTexts[currentTextIndex];
        
        if (isDeleting) {
            currentCharIndex = Math.max(0, currentCharIndex - 1);
        } else {
            currentCharIndex = Math.min(currentProcessed.text.length, currentCharIndex + 1);
        }
        
        // 高效更新文本内容
        updateDisplayText(currentProcessed, currentCharIndex);
        
        // 判断动画状态
        if (!isDeleting && currentCharIndex >= currentProcessed.text.length) {
            // 完成打字，停留2秒后开始删除
            cursorElement.style.animationPlayState = 'running';
            setTimeout(() => {
                isDeleting = true;
                animationId = requestAnimationFrame(typeEffect);
            }, 2000);
            return;
        } else if (isDeleting && currentCharIndex <= 0) {
            // 完成删除，切换到下一个文本
            isDeleting = false;
            currentTextIndex = (currentTextIndex + 1) % texts.length;
            setTimeout(() => {
                animationId = requestAnimationFrame(typeEffect);
            }, 500);
            return;
        }
        
        // 继续动画
        animationId = requestAnimationFrame(typeEffect);
    }
    
    // 高效的文本更新函数
    function updateDisplayText(processedText, charIndex) {
        const plainText = processedText.text;
        const displayPlainText = plainText.substring(0, charIndex);
        
        // 重建HTML，保持高亮标签
        let htmlResult = '';
        let plainIndex = 0;
        let htmlIndex = 0;
        
        while (plainIndex < displayPlainText.length && htmlIndex < processedText.html.length) {
            const htmlChar = processedText.html[htmlIndex];
            
            if (htmlChar === '<') {
                // 找到完整的HTML标签
                let tagEnd = processedText.html.indexOf('>', htmlIndex);
                if (tagEnd !== -1) {
                    htmlResult += processedText.html.substring(htmlIndex, tagEnd + 1);
                    htmlIndex = tagEnd + 1;
                    continue;
                }
            }
            
            if (htmlChar === displayPlainText[plainIndex]) {
                htmlResult += htmlChar;
                plainIndex++;
            }
            htmlIndex++;
        }
        
        // 使用textContent避免XSS，然后安全地设置innerHTML
        if (textElement.innerHTML !== htmlResult) {
            textElement.innerHTML = htmlResult;
        }
    }
    
    // 启动打字机效果
    setTimeout(() => {
        animationId = requestAnimationFrame(typeEffect);
    }, 1000);
    
    // 页面卸载时清理动画
    window.addEventListener('beforeunload', () => {
        if (animationId) {
            cancelAnimationFrame(animationId);
        }
    });
}

// 滚动视差效果
function initScrollParallax() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-section .particles');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// 启动视差效果
initScrollParallax();

// 滚动动画函数
function initScrollAnimations() {
    const animateElements = document.querySelectorAll('.scroll-animate');
    
    // 创建交叉观察器
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                // 添加动画类
                entry.target.classList.add('animated');
                
                // 为技能卡片添加额外的交错效果
                if (entry.target.classList.contains('skill-item')) {
                    const index = Array.from(entry.target.parentNode.children).indexOf(entry.target);
                    setTimeout(() => {
                        entry.target.style.transform = 'translateY(0) rotateX(0deg) rotateY(0deg) scale(1)';
                    }, index * 100);
                }
                
                // 停止观察已动画的元素
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // 观察所有动画元素
    animateElements.forEach(element => {
        observer.observe(element);
    });
    
    // 为技能卡片添加鼠标跟踪效果
    addSkillCardMouseTracking();
    

}

// 技能卡片鼠标跟踪效果
function addSkillCardMouseTracking() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
        item.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / centerY * -10;
            const rotateY = (x - centerX) / centerX * 10;
            
            this.style.transform = `
                translateY(-8px) 
                rotateX(${rotateX}deg) 
                rotateY(${rotateY}deg) 
                scale(1.02)
            `;
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateX(0deg) rotateY(0deg) scale(1)';
        });
    });
}

// 添加视差滚动效果增强
function enhanceParallaxScrolling() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        // 英雄区域背景视差
        const heroSection = document.querySelector('.hero-section');
        if (heroSection) {
            heroSection.style.backgroundPosition = `center ${rate}px`;
        }
        
        // 头像轻微视差效果
        const avatar = document.querySelector('.virtual-avatar');
        if (avatar) {
            const avatarRate = scrolled * -0.2;
            avatar.style.transform = `translateY(${avatarRate}px) scale(${1 + scrolled * 0.0001})`;
        }
        
        // 粒子容器视差
        const particles = document.querySelector('.particles');
        if (particles) {
            particles.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });
}

// 启动增强视差效果
enhanceParallaxScrolling();

// 鼠标互动效果函数
function initMouseInteractions() {
    // 禁用自定义光标
    // createMouseFollower();
    
    // 添加点击波纹效果
    addClickRippleEffect();
    
    // 添加鼠标悬停粒子效果
    addHoverParticleEffect();
    
    // 添加鼠标移动磁场效果
    addMouseMagnetEffect();
}

// 创建鼠标跟随光标
function createMouseFollower() {
    // 创建光标跟随元素
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
    
    const cursorDot = document.createElement('div');
    cursorDot.className = 'cursor-dot';
    document.body.appendChild(cursorDot);
    
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let dotX = 0, dotY = 0;
    
    // 鼠标移动事件
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // 立即更新小点位置
        dotX = mouseX;
        dotY = mouseY;
        cursorDot.style.transform = `translate(${dotX}px, ${dotY}px)`;
    });
    
    // 平滑跟随动画
    function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;
        
        cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
        requestAnimationFrame(animateCursor);
    }
    animateCursor();
    
    // 悬停效果
    const hoverElements = document.querySelectorAll('a, button, .btn, .social-link, .skill-item');
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-hover');
            cursorDot.classList.add('cursor-hover');
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-hover');
            cursorDot.classList.remove('cursor-hover');
        });
    });
}

// 添加点击波纹效果
function addClickRippleEffect() {
    document.addEventListener('click', (e) => {
        // 创建波纹元素
        const ripple = document.createElement('div');
        ripple.className = 'click-ripple';
        
        // 设置位置
        ripple.style.left = e.clientX + 'px';
        ripple.style.top = e.clientY + 'px';
        
        document.body.appendChild(ripple);
        
        // 动画结束后移除
        setTimeout(() => {
            ripple.remove();
        }, 1000);
    });
}

// 添加鼠标悬停粒子效果
function addHoverParticleEffect() {
    let particles = [];
    let isMouseMoving = false;
    let mouseTrail = [];
    
    document.addEventListener('mousemove', (e) => {
        isMouseMoving = true;
        
        // 记录鼠标轨迹
        mouseTrail.push({
            x: e.clientX,
            y: e.clientY,
            time: Date.now()
        });
        
        // 限制轨迹长度
        if (mouseTrail.length > 10) {
            mouseTrail.shift();
        }
        
        // 创建粒子
        if (Math.random() < 0.3) {
            createHoverParticle(e.clientX, e.clientY);
        }
        
        // 重置鼠标移动标记
        clearTimeout(window.mouseStopTimer);
        window.mouseStopTimer = setTimeout(() => {
            isMouseMoving = false;
        }, 100);
    });
    
    function createHoverParticle(x, y) {
        const particle = document.createElement('div');
        particle.className = 'hover-particle';
        
        // 随机偏移
        const offsetX = (Math.random() - 0.5) * 40;
        const offsetY = (Math.random() - 0.5) * 40;
        
        particle.style.left = (x + offsetX) + 'px';
        particle.style.top = (y + offsetY) + 'px';
        
        // 随机大小和颜色
        const size = Math.random() * 6 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // 随机颜色
        const colors = ['#689f38', '#558b2f', '#7cb342', '#8bc34a', '#cddc39'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        document.body.appendChild(particle);
        
        // 动画
        setTimeout(() => {
            particle.style.opacity = '0';
            particle.style.transform = 'translateY(-50px) scale(0)';
        }, 10);
        
        // 移除
        setTimeout(() => {
            particle.remove();
        }, 800);
    }
}

// 添加鼠标移动磁场效果
function addMouseMagnetEffect() {
    let mouseX = 0, mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // 对特定元素添加磁场效果
        const magnetElements = document.querySelectorAll('.btn, .social-icon, .skill-icon');
        
        magnetElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const elementCenterX = rect.left + rect.width / 2;
            const elementCenterY = rect.top + rect.height / 2;
            
            const distance = Math.sqrt(
                Math.pow(mouseX - elementCenterX, 2) + 
                Math.pow(mouseY - elementCenterY, 2)
            );
            
            // 磁场范围
            const magnetRange = 100;
            
            if (distance < magnetRange) {
                const strength = (magnetRange - distance) / magnetRange;
                const pullX = (mouseX - elementCenterX) * strength * 0.3;
                const pullY = (mouseY - elementCenterY) * strength * 0.3;
                
                element.style.transform = `translate(${pullX}px, ${pullY}px) scale(${1 + strength * 0.1})`;
            } else {
                element.style.transform = 'translate(0px, 0px) scale(1)';
            }
        });
    });
    
    // 鼠标离开页面时重置
    document.addEventListener('mouseleave', () => {
        const magnetElements = document.querySelectorAll('.btn, .social-icon, .skill-icon');
        magnetElements.forEach(element => {
            element.style.transform = 'translate(0px, 0px) scale(1)';
        });
    });
}


