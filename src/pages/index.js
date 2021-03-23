/** @format */

import { Divider } from '@material-ui/core';
import React from 'react';

export default function Home() {
  return (
    <>
      <h2>안녕하세요, 저는 한형석 입니다.</h2>
      <p>이 사이트는 현재 작업 중입니다.</p>
      <p>한/영 번역이 되는 기능을 만들고 있습니다. 기다려 주셔서 감사 드립니다.</p>
      <p>
        아직 한글보다 영어로 대부분 작업을 해 놔서 죄송합니다... <br /> 빠른 시일 안에 한글로도 볼수 있는
        포트폴리오/블로그를 완성을 하겠습니다.
      </p>
      <p>3월 23일 2021년 - 업데이트 됨.</p>
      <br />
      <Divider />
      <br />
      <h2>Todo list:</h2>
      <ul>
        <li>English/Korean</li>
        <li>Dark mode toggle</li>
        <li>Optimize Gatsby build time</li>
        <li>Reduce build time</li>
        <li>Page transitions</li>
        <li>Move table of contents to the aside right</li>
        <li>Make a todo page</li>
        <li>Search function</li>
        <li>Filter posts by tags</li>
        <li>Design the index page layout</li>
        <li>Design posts page layout</li>
        <li>Make a simple form in contacts page</li>
        <li>Redesign sidebar menu list</li>
      </ul>
    </>
  );
}
