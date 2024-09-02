# 1단계: Node.js 이미지를 사용하여 애플리케이션을 빌드합니다.
FROM node:14 AS build

# 작업 디렉토리 설정
WORKDIR /app

# package.json과 package-lock.json 복사
COPY package*.json ./

# 의존성 설치
RUN npm install

# 애플리케이션 빌드
COPY . .
RUN npm run build

# 2단계: Nginx 이미지를 사용하여 빌드된 파일을 제공
FROM nginx:alpine

# 빌드된 파일을 Nginx 기본 경로로 복사
COPY --from=build /app/build /usr/share/nginx/html

# Nginx의 기본 포트를 사용
EXPOSE 8080

# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]
