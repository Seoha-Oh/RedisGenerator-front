import React from "react";

import {
  WelcomeContainer,
  WelcomeCenterBox,
  RouteGenerateButton,
  WelcomeBoxFooter,
} from "./WelcomePage.styles";

import { useNavigate } from "react-router-dom";

const WelcomePage = (props) => {
  const navigate = useNavigate();
  return (
    <WelcomeContainer>
      <WelcomeCenterBox>
        <h1>Redis Generator</h1>
        <p>
          별도의 작업이나 설치 없이 개발에 필요한 redis를 즉시 생성해보세요 :)
        </p>
        <p>
          저희 "Redis Generator"는 어쩌구 저쩌구를 통해 이러한 기능을
          제공합니다.
        </p>
        <RouteGenerateButton
          onClick={() => {
            navigate("/generate-redis");
          }}
        >
          Generate Redis ❕
        </RouteGenerateButton>
        <WelcomeBoxFooter>by seoha-oh and sieun-lee</WelcomeBoxFooter>
      </WelcomeCenterBox>
    </WelcomeContainer>
  );
};

export default WelcomePage;
