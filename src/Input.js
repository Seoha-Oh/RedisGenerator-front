import React, {useState} from "react";

function Input(){
    const onChange = (e)=>{

    };

    const onReset = () =>{

    };

    return (
    <div>
        <div>
            Domain <input/>
        </div>
        <div>
            3G<input type="radio"/>
            6G<input type="radio"/>
            12G<input type="radio"/>
            24G<input type="radio"/>
        </div>
        <div>
            eviction policy 
            <select>
                <option key="noeviction" value="noeviction" title="maxmemory에 도달하면 쓰기/삭제 작업시 오류를 반환합니다.">noeviction</option>
                <option key="allkeys-lru" value="allkeys-lru" title="새로 추가된 데이터의 용량을 확보하기 위해 최근에 사용하지 않은 키를 제거합니다.">allkeys-lru</option>
                <option key="volatile-lru" value="volatile-lru" title="새로 추가된 데이터의 용량을 확보하기 위해 TTL이 설정된 키들 중 최근에 사용하지 않은 키를 제거합니다.">volatile-lru</option>
                <option key="allkeys-lfu" value="allkeys-lfu" title="새로 추가된 데이터의 용량을 확보하기 위해 사용빈도수가 가장 적은 키를 제거합니다. 최근 저장된 키라도 사용 빈도수가 적다면 대상이 될 수 있습니다.">allkeys-lfu</option>
                <option key="volatile-lfu" value="volatile-lfu" title="새로 추가된 데이터의 용량을 확보하기 위해 TTL이 설정된 키들 중 사용빈도 수가 적은 키를 제거합니다. 최근 저장된 키라도 사용 빈도수가 적다면 대상이 될 수 있습니다.
">volatile-lfu</option>
                <option key="allkeys-random" value="allkeys-random" title="새로 추가된 데이터의 용량을 확보하기 위해 무작위로 키를 제거합니다.">allkeys-random</option>
                <option key="volatile-random" value="volatile-random" title="새로 추가된 데이터의 용량을 확보하기 위해 TTL이 설정된 키들 중 무작위로 키를 제거합니다.">volatile-random</option>
                <option key="volatile-ttl" value="volatile-ttl" title="새로 추가된 데이터의 용량을 확보하기 위해 TTL이 짧은 키를 제거합니다.">volatile-ttl</option>
            </select>
        </div>
        <div>
            Password <input placeholder="미입력시 임의생성됩니다."/>
        </div>
        <div>
            <button>생성</button>
            <button>닫기</button>
        </div>
    </div>
    );
}

export default Input;