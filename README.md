# telegram-regist-bot
💬telegram chat bot

[제이구일일의 개발 블로그](https://j911.me)의 [타입스크립트로 텔레그램 챗봇 만들기](https://j911.me/2018/09/create-telegrambot-with-typescript.html)에서 다룬 예제입니다.

## 이것은 무엇인가요?
이것은 텔레그램 챗봇을 공부해기 위해 만들어본 작은 프로젝트입니다.

텔레그램으로 메시지를 전송하면 데이터베이스에 등록되고, api 호출로 이를 불러올 수 있습니다.

## stack
- node js
- typescript
- telebot
- yaml
- mongoose

## build
프로젝트 클론하기🔥🔥
```
$ git clone https://github.com/J911/telegram-regist-bot.git
```
프로젝트 폴더로 이동하고, 의존성 모듈 설치하기
```
$ cd telegram-regist-bot
$ npm install
```
프로젝트 환경설정 만들기
```
$ cp src/environmnet-template.yml src/environmnet.yml 
$ vi src/environmnet.yml
```
프로젝트 실행하기🙌🙌
```
$ ts-node src
```
