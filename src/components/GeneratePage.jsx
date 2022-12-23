import { Button } from "@mui/material";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import SimpleInput from "./common/Input";
import SimpleRadio from "./common/Radio";
import SimpleSelect from "./common/SimpleSelect";

import { MainContainer, RowWrapper, RowContainer } from "./GeneratePage.styles";

const initvalue = {
  domain: "",
  memory: 3,
  policy: "noeviction",
  password: "",
};

const radiosLabels = [
  { label: "3G", value: 3 },
  { label: "6G", value: 6 },
  { label: "12G", value: 12 },
  { label: "24G", value: 24 },
];

const policyLabels = [
  {
    label: "noeviction",
    info: `maxmemory에 도달하면 쓰기/삭제 작업시 오류를 반환합니다. `,
  },
  {
    label: "allkeys-lru",
    info: `새로 추가된 데이터의 용량을 확보하기 위해 최근에 사용하지 않은 키를 제거합니다.`,
  },
  {
    label: "volatile-lru",
    info: `새로 추가된 데이터의 용량을 확보하기 위해 TTL이 설정된 키들 중 최근에 사용하지 않은 키를 제거합니다.`,
  },
  {
    label: "allkeys-lfu",
    info: `새로 추가된 데이터의 용량을 확보하기 위해 사용빈도수가 가장 적은 키를 제거합니다. 최근 저장된 키라도 사용 빈도수가 적다면 대상이 될 수 있습니다.`,
  },
  {
    label: "volatile-lfu",
    info: `새로 추가된 데이터의 용량을 확보하기 위해 TTL이 설정된 키들 중 사용빈도 수가 적은 키를 제거합니다. 최근 저장된 키라도 사용 빈도수가 적다면 대상이 될 수 있습니다.`,
  },
  {
    label: "allkeys-random",
    info: `새로 추가된 데이터의 용량을 확보하기 위해 무작위로 키를 제거합니다.`,
  },
  {
    label: "volatile-random",
    info: `새로 추가된 데이터의 용량을 확보하기 위해 TTL이 설정된 키들 중 무작위로 키를 제거합니다.`,
  },
  {
    label: "volatile-ttl",
    info: `새로 추가된 데이터의 용량을 확보하기 위해 TTL이 짧은 키를 제거합니다.`,
  },
];

const GeneratePage = () => {
  const navigate = useNavigate();

  const [domainValue, setDomainValue] = useState("");
  const [memoryValue, setMemoryValue] = useState(3);
  const [policyValue, setPolicyValue] = useState("noeviction");
  const [passwordValue, setPasswordValue] = useState("");

  const init = () => {
    const { domain, memory, policy, password } = initvalue;
    setDomainValue(domain);
    setMemoryValue(memory);
    setPolicyValue(policy);
    setPasswordValue(password);
  };

  const onCreate = () => {
    if (!domainValue) {
      alert("domain 항목을 입력해주세요 💦");
      return;
    }

    const params = {
      domain: domainValue,
      redisMemory: memoryValue,
      evictionPolicy: policyValue,
      password: passwordValue,
    };
    console.log(params);
  };

  const onClose = () => {
    init();
    navigate("/");
  };

  const handleDomainChange = (event) => {
    const { value } = event.target;

    setDomainValue(value);
  };

  const handleRadioChange = (event) => {
    const { value } = event.target;

    setMemoryValue(value);
  };

  const handlePolicyChange = (event) => {
    const { value } = event.target;

    setPolicyValue(value);
  };

  const handlePasswordChange = (event) => {
    const { value } = event.target;

    setPasswordValue(value);
  };

  return (
    <MainContainer>
      <RowContainer>
        <h3>🔨 Generate your Redis!</h3>
        <RowWrapper>
          <SimpleInput label="domain" onChange={handleDomainChange} />
        </RowWrapper>
        <RowWrapper>
          <SimpleRadio
            labels={radiosLabels}
            value={memoryValue}
            handleChange={handleRadioChange}
          />
        </RowWrapper>
        <RowWrapper>
          <SimpleSelect
            value={policyValue}
            handleChange={handlePolicyChange}
            labels={policyLabels}
          />
        </RowWrapper>
        <RowWrapper>
          <SimpleInput
            label="password"
            type="password"
            onChange={handlePasswordChange}
          />
        </RowWrapper>
        <RowWrapper style={{ alignSelf: "center" }}>
          <Button onClick={onCreate}>생성</Button>
          <Button onClick={onClose}>닫기</Button>
        </RowWrapper>
      </RowContainer>
    </MainContainer>
  );
};

export default GeneratePage;
