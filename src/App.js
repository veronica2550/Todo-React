import React from 'react';
import Todo from './Todo';
import './App.css';
class App extends React.Component { constructor(props){ //매개변수 props 생성자
 super(props); // 매개변수 pros 초기화
 this.state ={ // item 에 item.id, item.title, item.done 매개변수 이름과 값 할당
 items :[ {id:0, title:"Todo 1 ", done:false}, {id:1, title:"Todo 2 ", done:false}, ], }; } render(){ // 자바스크립트가 제공하는 map 함수를 이용해서 배열을 반복해 <Todo /> 컴포넌트를 여러 개 생성한다.
    var todoItems =this.state.items.map((item,idx)=>(
        <Todo item={item} key={item.id}/>
        ));
    // 생성된 컴포넌트 JSX를 리턴한다. return <div className="App">{todoItems}</div>; }
    return <div className="App">{todoItems}</div>;
 }
}
export default App;