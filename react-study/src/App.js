import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";
//css
//[name].module.css 파일 명명 규칙을 사용. CSS 모듈을 사용하면 이름 충돌에 대한 걱정없이 다른 파일에서 동일한 CSS 클래스 이름 사용가능
function Hello() {
  useEffect(() => {
    console.log("created :) ");
    return () => console.log("destroyed :( "); //clean up function : 컴포넌트가 삭제될 때 실행(return 으로 실행 가능)
  }, []);
  return <h1>Hello!</h1>;
}
function App() {
  const [showing, setShowing] = useState(false);
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState();
  const onShow = () => setShowing((prev) => !prev);
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time");
  const iRunOnlyOnce = () => {
    console.log("i run only once");
  };
  useEffect(iRunOnlyOnce, []);
  useEffect(() => {
    if (keyword && keyword.length > 5) {
      //조건 추가 : 키워드가 6글자일때부터 검색 시작
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword]); //keyword가 변할때 이 코드가 실행된다
  //빈 배열로 작성시, watch할게 없으므로 최초 한번만 실행
  useEffect(() => {
    console.log("I run when counter changes");
  }, [counter]);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onShow}>{showing ? "Hide" : "Show"}</button>
      <input
        value={keyword}
        type="text"
        onChange={onChange}
        placeholder="Search here..."
      />
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
