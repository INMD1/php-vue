# 이 프로젝트가 뭐지?
<img src="https://github.com/user-attachments/assets/e8a88537-7efc-42e2-9856-b7f6a3b3b6ef" style="width: 200px; height: 200px">

이번에 웹서버 괴목에서 기말과제를 프로젝트 형식으로 하는데 우리 웹서버에는 PHP를 이용서 공부를 한다.<br/>
하지만 나는 PHP를 쓰기 싫어서 php위에 프론트단에서는 Vue를 쓰기로 했다.<br/>
백엔드는 그래도 PHP는 써야되기 때문에 php + mysql을 쓰기로 했다 아마도?

## 쓰게될 프레임워크 및 CSS, DB
### franken
https://franken-ui.dev/docs/changelog
> 이 CSS는 기존 Tailwind CSS 기반을 이용해 만든 shadcn을 HTML에서 사용하기 만든 프로젝트입니다.

## Strapi
Headless CMS로 데이터베이스와 상호작용해 API를 만들어주는 오픈소스입니다.

## 파일폴더 구조
```
Project
  └─ app -> php단에서 작동하는 파일 모음
  └─ assets -> Vue 필드하면 나오는 파일
  └─ frontend -> vue파일이 집합하여 있는곳
  └─ public -> 사이트에 보여주기 위해 있는 곳
  └─ system -> 직접 건드는건 없습
  └─ test -> 테스트 관련 파일 
  └─ writable
... 등등
```
