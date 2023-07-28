# 使用 Node.js 镜像作为基础镜像
FROM node:16 AS builder

# 设置工作目录
WORKDIR /app

# 将 package.json 和 package-lock.json 复制到工作目录
COPY package*.json ./

# 安装项目依赖
RUN npm install

# 将整个项目复制到工作目录
COPY . .

# 执行 UmiJS 的项目构建
RUN npm run build:prod

# 使用 Nginx 镜像作为基础镜像
FROM nginx:latest

# 将 UmiJS 构建好的静态文件复制到 Nginx 默认的网站根目录
COPY --from=builder /app/dist /usr/share/nginx/html

# 使用 80 端口暴露 Nginx 服务
EXPOSE 80

# 启动 Nginx 服务
CMD ["nginx", "-g", "daemon off;"]
