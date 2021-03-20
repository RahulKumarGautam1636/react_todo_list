import React, { useState } from "react";
// import ListItemText from '@material-ui/core/ListItemText';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


function Note(props) {

    var dayFont = {color: props.status === false? "hsl(235, 19%, 35%)": "hsl(233, 11%, 84%)"};
    var NightFont = {color: props.status === false? "hsl(233, 11%, 84%)": "hsl(235, 19%, 35%)"};
    var noteBoxShadow = {boxShadow: props.isDay? "rgba(0, 0, 0, 0.2) 0px 1px 0px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 0px" : "rgba(255, 255, 255, 0.1) 0px 1px 0px 0px, rgba(27, 31, 35, 0.15) 0px 1px 0px 0px"}
    // var noteBorder = {border: "0.001px solid white"};

    return (



        <div style={{display: (props.isCompleted && props.status===false) || (props.isActive && props.status===true) ? "none": "flex", backgroundColor: props.isDay? "hsl(0, 0%, 98%)": "hsl(235, 24%, 19%)", boxShadow: noteBoxShadow.boxShadow}} className="note_container">
          <div className="check_container">
          <div style={{background: props.status? "linear-gradient(hsl(192, 100%, 67%) , hsl(280, 87%, 65%))": "transparent"}} onClick={() => {props.handleChecks()}} id="circle">
          <svg style={{display: props.status? "flex": "none"}} xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="#fff" strokeWidth="2" d="M1 4.304L3.696 7l6-6"/></svg>
          </div>
          <p style={{textDecoration: props.status === false ? "none": "line-through", color: props.isDay ? dayFont.color: NightFont.color}}>{props.title}</p>
          </div>
            <svg onClick={props.deleteNotes} id="cross" xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fillRule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
        </div>



    )
}


export default Note;
