import styled from "styled-components";
/** TODO */
export const TodoCard = styled.div`
  margin : 5px 0px 5px 0px;
  width : 250px;
  height : 150px;
  border : 1px solid blueviolet;
  background-color: whitesmoke;
  color : #555;
  border-radius : 5px;
`

export const TodoTitle = styled.div`
    margin : 10px;
    color : #111;
    font-weight: 900;
    border-radius : 5px;
`

export const TodoBody = styled.div`
    height: 35%;
`

export const TodoBtns = styled.div`
    color : #444;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`
  

export const TodoBtn = styled.button`
    border: solid 3px blueviolet;
    background-color: blueviolet;
    font-size: large;
    text-decoration: none;
    border-radius: 8px;
    width: 50px;
    padding: 5px;
    margin: 10px;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    &:hover{
        border: solid 3px #282c34;
        background-color: #282c34; 
        color: white;
    }
`

/** TODO LIST */
export const Body = styled.div`
  text-align: center;
  min-width: 800px;
  max-width: 1200px;
  background-color: #282c34;
  margin : 0 auto;
  color : whitesmoke;
`

export const Header = styled.div`
  color: #61dafb;
  font-size: xx-large;
  font-weight: 900;
  height: 80px;
  width : 100%;
  display: flex;
  align-items : center;
  padding: 5px;
  justify-content: center;
  color :whitesmoke
`

export const InnerDiv = styled.div`
  background-color: #282c34;
  height: 50px;
  color: #61dafb;
  font-size: large;
  font-weight: 900;
  display: flex;
  align-items : center;
  margin: 0;
  justify-content: right;
  color :whitesmoke
`
export const StIpt = styled.input`
  text-decoration: none;
  height: 30px;
  width: 250px;
  margin: 0px 5px 0px 5px;
`

export const InputLabel = styled.label`
text-decoration: none;
  height: 30px;
  width: 180px;
  text-align: right;  
`

export const StBtn = styled.button`
  border: solid 3px blueviolet;
  background-color: blueviolet;
  font-size: large;
  text-decoration: none;
  border-radius: 8px;
  width: 50px;
  padding: 5px;
  margin: 10px 30px 10px 10px;
  color: white;
  &:hover {
    border: solid 3px white;
    background-color: white; 
    color: #282c34;
  } 
`

export const StAraa = styled.div`
  height : 30px;
  margin : 5px 0px 5px 30px;
  font-size: large;
  font-weight: 900;
  text-align: left;
`

export const StCardsDiv = styled.div`
display : flex;
  flex-direction: row;
  column-gap : 10px;
  flex-wrap: wrap;
  padding : 10px 30px 10px 30px;
`

/** Details */
export const DetailMain = styled.div`
  min-width: 800px;
  max-width: 1200px;
  background-color: #282c34;
  margin : 0 auto;
  color : whitesmoke;
`
export const DetailInner = styled.div`
  background-color: #282c34;
  height: 100px;
  font-size: large;
  font-weight: 900;
  display: flex;
  align-items : center;
  margin: 0;
  justify-content: space-between;
  color :whitesmoke;
  text-align: center;
  margin: 0px 100px 0px 0px;
`
export const DetailBtn = styled.button`
  border: solid 3px blueviolet;
  background-color: blueviolet;
  font-size: large;
  text-decoration: none;
  border-radius: 8px;
  width: 100px;
  padding: 5px;
  margin: 10px 30px 10px 10px;
  color: white;
  &:hover {
    border: solid 3px white;
    background-color: white; 
    color: #282c34;
  } 
`
export const DetailTitleDiv = styled.div` 
    width : 30%;
    font-size: x-large;
    padding: 10px;
    border-radius: 8px;
    background-color: whitesmoke;
    color:#282c34;
    margin: 10px 30px 10px 50px;
`