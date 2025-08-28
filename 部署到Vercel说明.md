# 部署到Vercel详细说明

## 什么是Vercel？
Vercel是一个免费的网站托管平台，特别适合部署静态网站和个人项目。它提供：
- 🆓 免费托管
- 🚀 自动部署
- 🌐 全球CDN加速
- 📱 移动端优化

## 部署步骤

### 方法1：通过Vercel网站部署（推荐）

1. **访问Vercel官网**
   - 打开浏览器，访问：https://vercel.com
   - 点击"Sign Up"注册账号（可以用GitHub账号登录）

2. **导入项目**
   - 登录后点击"New Project"
   - 选择"Import Git Repository"
   - 连接你的GitHub账号
   - 选择你的项目仓库

3. **配置部署**
   - Project Name: 输入你的项目名称（比如：grwz）
   - Framework Preset: 选择"Other"
   - Root Directory: 保持默认（./）
   - Build Command: 留空
   - Output Directory: 留空

4. **部署**
   - 点击"Deploy"按钮
   - 等待部署完成（通常1-2分钟）

### 方法2：通过Vercel CLI部署

1. **安装Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **登录Vercel**
   ```bash
   vercel login
   ```

3. **部署项目**
   ```bash
   vercel
   ```

## 部署后的配置

### 自定义域名（可选）
1. 在Vercel项目页面点击"Settings"
2. 选择"Domains"
3. 添加你的自定义域名

### 自动部署
- 每次你推送代码到GitHub，Vercel会自动重新部署
- 无需手动操作

## 注意事项

1. **文件大小限制**
   - 单个文件不能超过50MB
   - 你的图片文件都在合理范围内

2. **免费版限制**
   - 每月100GB带宽
   - 对于个人网站完全够用

3. **性能优化**
   - Vercel会自动压缩图片
   - 启用全球CDN加速

## 常见问题解决

### Q: 部署失败怎么办？
A: 检查vercel.json文件是否正确，确保所有文件路径正确

### Q: 图片显示不出来？
A: 检查图片路径，确保相对路径正确

### Q: 如何更新网站？
A: 推送代码到GitHub，Vercel会自动重新部署

## 部署成功后的效果

✅ 你的网站将获得一个类似这样的链接：
`https://你的项目名.vercel.app`

✅ 全球访问者都能快速访问你的网站
✅ 自动HTTPS加密
✅ 移动端完美适配

## 下一步建议

1. **优化网站内容** - 添加更多个人信息和作品展示
2. **SEO优化** - 添加meta标签和描述
3. **性能优化** - 压缩图片，优化CSS/JS
4. **添加分析工具** - 了解访问者数据

---
**祝你部署成功！** 🎉
如有问题，可以随时询问我。
