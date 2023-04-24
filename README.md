<div style="display:flex; align-items: center;">
<img src="https://user-images.githubusercontent.com/58963027/232326249-c3dc4e87-a8e2-4dd8-84bc-a42e82e556d0.png" align="left" width="30px"/>
<h1>first-react-to-do!</h1></div>
<h3>리액트로 만든 첫번째 todo 입니다.</h3>

### [FIRST-REACT-TO-DO 바로가기](https://first-react-to-do.vercel.app/)

<h3>구현 화면</h3>
<p align="center"><img src="https://user-images.githubusercontent.com/58963027/232555325-0cbaba1a-d6e5-4828-bbc0-6b1f1469e7ee.gif"></p>
<p align="center">내용 입력 후 추가 버튼을 클릭하면 TODO가 추가 됩니다.</p>
<p align="center">TODO 완료 버튼을 누르면 완료로 처리되고 아래의 영역으로 이동합니다.</p>
<p align="center">완료된 TODO의 취소 버튼을 누르면 완료되지않음 상태로 위쪽 영역으로 이동합니다.</p>
<p align="center">삭제 버튼을 클릭하면 등록된 TODO가 삭제됩니다.</p>
</div>

### 파일구조
.<br/>
├── README.md<br/>
├── node_modules<br/>
├── package.json<br/>
├── public<br/>
├── src<br/>
│   ├── component<br/>
│   │   ├── Todo.jsx.     (todo 카드의 내용을 담고 있는 컴포넌트입니다.)<br/>
│   │   └── TodoList.jsx  (todo 카드들을 표현하는 부분을 담고 있는 컴포넌트 입니다.)<br/>
│   ├── pages<br/>
│   │   ├── Details.jsx   (상세내용입니다.)<br/>
│   │   └── Main.jsx      (TodoList를 가져오는 페이지입니다.)<br/>
│   ├── redux<br/>
│   │   ├── config<br/>
│   │   └── modules<br/>
│   ├── shared<br/>
│   │   └── Router.jsx<br/>
│   ├── styles<br/>
│   │   └── styles.jsx<br/>
│   ├── App.css<br/>
│   ├── App.jsx<br/>
│   ├── App.test.js<br/>
│   ├── index.css<br/>
│   ├── index.js<br/>
│   ├── reset.css<br/>
│   └── setupTests.js<br/>
└── yarn.lock<br/>
