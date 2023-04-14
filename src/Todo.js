import React from 'react';
class Todo extends React.Component { constructor(props){ super(props); this.state ={ item: props.item }; // 매개변수 item 의 변수/값을 item에 대입
 } render(){ return (
 <div className="Todo">
 <input
 type="checkbox"
 id={this.state.item.id} // item.id 값으로 렌더링하란 의미(JPX)
 name={this.state.item.id} checked={this.state.item.done} // item.done 값으로 렌더링하란 의미
 />
 <label for={this.state.item.id}>{this.state.item.title}</label>
 </div>
 ); }
}
export default Todo;
