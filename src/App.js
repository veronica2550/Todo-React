import React from 'react';
import Todo from './Todo';
import {Paper, List}from "@material-ui/core";
import './App.css';

class App extends React.Component { constructor(props){ //매개변수 props 생성자
 super(props); // 매개변수 pros 초기화
 this.state ={ // item 에 item.id, item.title, item.done 매개변수 이름과 값 할당
 items :[ {id:0, title:"Todo 1 ", done:true}, {id:1, title:"Todo 2 ", done:false}, ], }; } render(){ // todoItems에 this.state.items.length 가 0보다 크다면 true 이므로 && 뒤에 값을 넘겨준다. // totoItem = this.state.items.length > 0 ? (<Paper></Paper>):""; 이렇게 해도 같은 결과이다. 조건선택문 ? ternary operator
 var todoItems =this.state.items.length >0 &&(
 <Paper style={{margin:16}}>
 <List>
 {this.state.items.map((item,idx)=>(
 <Todo item={item} key={item.id}/>
 ))} </List>
 </Paper>
 );
 // 생성된 컴포넌트 JSX를 리턴한다.
 return <div className="App">{todoItems}</div>; }
}
export default App;
