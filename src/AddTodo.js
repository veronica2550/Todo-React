import React from "react";
import { TextField, Paper, Button, Grid }from "@material-ui/core";
class AddTodo extends React.Component { constructor(props){ super(props); this.state ={item :{title:""}}; this.add = props.add;
// props 의 함수를 this.add 에 연결, props에는 상위 컴포넌트(App.js)의 함수, 매개변수가 들어 있음.
 } onInputChange =(e)=>{ const thisItem =this.state.item; thisItem.title = e.target.value; this.setState({item:thisItem}); console.log(thisItem); }
 onButtonClick =()=>{ this.add(this.state.item); this.setState({item:{title:""}});
}
 enterKeyEventHandler =(e)=>{ if(e.key =='Enter'){ this.onButtonClick(); } } 
 render(){ return (
 <Paper style={{margine:16, padding:16}}>
 <Grid container>
 <Grid xs={11} md={11} item style={{paddingRight:16}}>
 <TextField 
placehoder="Add Todo here" 
fullWidth 
onChange={this.onInputChange}
value={this.state.item.title}
onKeyPress={this.enterKeyEventHandler}
/>
 </Grid>
 <Grid xs={1} md={1} item>

 <Button 
fullWidth 
color="secondary" 
variant="outlined"
onClick={this.onButtonClick}
>
 +
 </Button>
 </Grid> 
 </Grid>
 </Paper>
 ); }
}
export default AddTodo;
