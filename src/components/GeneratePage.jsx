import { Button } from "@mui/material";

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import SimpleInput from "./common/Input";
import SimpleRadio from "./common/Radio";
import SimpleSelect from "./common/Select";

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
  { label: "noeviction" },
  { label: "allkeys-lru" },
  { label: "volatile-lru" },
  { label: "allkeys-lfu" },
  { label: "volatile-lfu" },
  { label: "allkeys-random" },
  { label: "volatile-random" },
  { label: "volatile-ttl" },
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

  useEffect(() => {
    return () => init();
  }, []);

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
