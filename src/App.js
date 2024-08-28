import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import BodyComponent from './components/BodyComponent';
import FooterComponent from './components/FooterComponent';
import Movie from './components/Movie';
import BoolComponent from './components/BoolComponent';
import Wrapper from './components/Wrapper'
import DefaultProps from './components/DefaultProps';
import ChildComponent from './components/ChildComponent'
import ProTypesComponent from './components/ProTypesComponent';

function App() {

  return (
    <>
      {/* 컴포넌트 호출 */}
      <Movie img = "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88488/88488_320.jpg" title = "베테랑2" director = "류승완" day = "24.9.13" />
      <Movie img = "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88170/88170_320.jpg" title = "에일리언" director = "페데 알바레즈" day = "24.8.14" />
      <Movie img = "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88442/88442_320.jpg" title = "트위스터스" director = "정이삭" day = "24.8.14" />
      <BoolComponent study />
      <BoolComponent />

      <Wrapper>
        <HeaderComponent />
        <BodyComponent />
        <FooterComponent />
      </Wrapper>

      <DefaultProps old = {30} city = "김해" nameColor = "bule" oldColor = "orange" cityColor = "red" />

      <ChildComponent>리액트</ChildComponent>

      <ProTypesComponent item = "젤리" price = {1000} />
    </>
  );
}

export default App;
