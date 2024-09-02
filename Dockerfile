# 1단계: Node.js를 사용하여 애플리케이션을 빌드합니다.
FROM node:14 AS build

# 작업 디렉토리 설정
WORKDIR /app

# package.json과 package-lock.json 복사
COPY package*.json ./

# 의존성 설치
RUN npm install

# 애플리케이션 소스 복사 및 빌드
COPY . .
RUN npm run build

# 2단계: Nginx를 사용하여 빌드된 파일을 서빙합니다.
FROM nginx:alpine

# 빌드된 파일을 Nginx의 기본 경로로 복사
COPY --from=build /app/build /usr/share/nginx/html

# Nginx가 8080 포트에서 리스닝하도록 설정
EXPOSE 8080

# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]
