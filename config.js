// 个人网站配置文件
// 你可以在这里修改个人信息，无需改动其他代码文件

const siteConfig = {
    // 个人信息
    personalInfo: {
        name: "你的名字", // 修改为你的真实姓名
        title: "初中生 / 学生", // 修改为你的身份描述
        subtitle: "欢迎来到我的个人世界", // 修改为你的个性标语
        description: "我是一名充满激情和创造力的年轻人，热爱学习和探索新事物。我具备良好的沟通能力和团队合作精神，善于解决问题和接受挑战。",
        education: "目前就读于初中，正在为未来的学习和职业发展打下坚实基础。"
    },

    // 技能特长
    skills: [
        {
            icon: "💻",
            name: "计算机技能",
            description: "熟练使用各种办公软件和基础编程"
        },
        {
            icon: "🎨",
            name: "创意设计",
            description: "具有丰富的想象力和创造力"
        },
        {
            icon: "📚",
            name: "学习能力",
            description: "快速学习新知识和技能"
        },
        {
            icon: "🤝",
            name: "团队合作",
            description: "良好的沟通和协作能力"
        }
    ],

    // 社交媒体链接
    socialMedia: {
        xiaohongshu: {
            name: "小红书",
            url: "#", // 修改为你的小红书链接
            description: "点击查看我的分享",
            icon: "📖"
        },
        douyin: {
            name: "抖音",
            url: "#", // 修改为你的抖音链接
            description: "观看我的视频",
            icon: "🎬"
        },
        wechat: {
            name: "微信",
            url: "#", // 修改为你的微信二维码或联系方式
            description: "添加我的微信",
            icon: "💬"
        }
    },

    // 网站设置
    siteSettings: {
        title: "我的个人网站 - 专业简历展示",
        description: "专业的个人网站，展示个人能力和形象",
        theme: {
            primaryColor: "#689f38",
            secondaryColor: "#558b2f",
            accentColor: "#81c784"
        }
    },

    // AI形象设置
    aiAvatar: {
        enabled: true,
        processingSteps: [
            "分析面部特征...",
            "生成AI模型...",
            "优化形象效果...",
            "AI形象生成完成！"
        ],
        processingTime: 1500 // 每个步骤的处理时间（毫秒）
    }
};

// 导出配置（如果使用模块化）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = siteConfig;
}

// 在浏览器中全局可用
if (typeof window !== 'undefined') {
    window.siteConfig = siteConfig;
}
