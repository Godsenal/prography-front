import React from "react";
import Renoti from "./demo/Renoti";
import Recalendar from "./demo/Recalendar";

const projects = [
  {
    title: "Devlog",
    description: `
    개발자들끼리 코드와 함께 팁을 공유하는 사이트입니다.\n
    개발자끼리 대화를 나눌 수 있는 트위터 같은 소셜 플랫폼을 목표로 만들었으며, 코드를 이용해 팁이나 그 코드로 배운 지식을 공유하는 것이 목표였습니다.\n
    `,
    github: "https://github.com/Godsenal/devlog"
  },
  {
    title: "classChat",
    description: `
    학교 내 같은 수업을 듣는 학생끼리 대화할 수 있는 채팅 웹 어플리케이션입니다.\n
    같은 과끼리 대화할 수 있는 플랫폼은 많은데, 같은 수업을 듣는 학생끼리 대화할 수 있는 플랫폼은 적다고 생각하여 개발하였습니다.\n
    이중전공을 하며 동기 없이 수업을 듣는 저의 마음이 반영 되기도 하였고, 첫 프로젝트여서 완성도는 미숙하지만 기억에 많이 남는 프로젝트입니다.\n
    `,
    github: "https://github.com/Godsenal/classChat"
  },
  {
    title: "Owesome Gwent",
    description: `
    Gwent 게임의 카드데이터를 보여주고, 덱을 짜볼 수 있는 사이트입니다.\n
    typescript로 작성되었으며, Nodejs와 React를 이용하였습니다.\n
    `,
    website: "http://owesomegwent.me",
    github: "https://github.com/OwesomeGwent/owesome-gwent"
  },
  {
    title: "fontest",
    description: `
    웹에서 폰트를 테스트 해볼 수 있는 사이트입니다.\n
    폰트 url이나 stylesheet에 들어있는 폰트를 파싱해서 적용시키거나,\n
    로컬로 올린 폰트를 적용시킨 후 테스트 할 수 있도록 하는 프로젝트입니다.\n
    `,
    website: "http://fontest.me",
    github: "https://github.com/Godsenal/fontest"
  },
  {
    title: "renoti",
    description: `
    React에서 사용할 수 있는 notification 라이브러리입니다.\n
    Notification 라이브러리가 필요한 경우가 많아서 시작해본 프로젝트 입니다.\n
    typescript로 작성되었으며 간단한 애니메이션과 여러 타입의 알림을 지원합니다.\n
    `,
    website: "https://godsenal.github.io/renoti",
    github: "https://github.com/Godsenal/renoti",
    demo: <Renoti />
  },
  {
    title: "recalendar",
    description: `
    React에서 사용할 수 있는 date-picker 입니다.\n
    date picker, date range picker를 제공하고 style 커스터마이징과 포탈같은 기능을 추가로 제공합니다.\n
    `,
    website: "https://godsenal.github.io/recalendar",
    github: "https://github.com/Godsenal/recalendar",
    demo: <Recalendar />
  }
];

export default projects;
