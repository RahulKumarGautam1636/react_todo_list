import React ,{useEffect, useState} from "react";
import Head from "./Heading.jsx";
import Note from "./note.jsx";
import Media from 'react-media';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function TextArea(props, provided: DroppableProvided, snapshot: DroppableStateSnapshot) {
    const [note, setnote] = useState({title: "", status: ""});
    const [task, setTask] = useState([
      {title: "Complete online javascript course", status: true},
      {title: "Jog around the park 3x", status: false},
      {title: "10 minutes meditation", status: false},
      {title: "Read for 1 hour", status: false},
      {title: "Pick up groceries", status: false},
      {title: "Complete Todo App on Frontend Mentor", status: false}
    ]);
    const [isCompleted, setCompleted] = useState(false);
    const [isActive, setActive] = useState(false);
    const [isDay, setDay] = useState(false);
    const [viewport, setViewport] = useState(false);

    function addNote(note) {
        if (note.length === 0 || note.title === "") {
            console.log("please enter a valid task");
        } else {
            setTask((preNote) => {
                return [...preNote, note]
            });
        }
    }

    function checkDuplicate(note) {
      const duplicateItem = (task.filter(item => item.title===note.title)).length;
      if (duplicateItem===1) {
        alert("Item Already Exist");
      } else {
        addNote(note);
        handleBodyBackground();
      }
    }

    function deleteNote(id) {
        setTask((preNote) => {
            return (
                preNote.filter((noteItem, index) => {
                    return index !== id;
                })
            )
        })
    }

    function handleChange(event) {
        const {name, value} = event.target;
        setnote((preNote) => {
            return {...preNote, title: value, status: false};
        }
        )
    }

    function handleClick(e) {
        e.preventDefault();
    }

    function handleCheck(id) {
        setTask(preTask => {
            return (
                preTask.map((checkItem, index) => {
                      if (id===index) {
                          return {title: checkItem.title, status: !checkItem.status};
                      } else {
                          return {...checkItem};
                      }
                })
            )
        })
    }

    function handleCompleted() {
        setCompleted(true);
        setActive(false);
     }
     function handleActive() {
        setActive(true);
        setCompleted(false);
     }
     function renderCompleted() {
        setCompleted(false);
        setActive(false);
     }
     function clearCompleted() {
        setTask(preTask => {
        return (
            preTask.filter(item => item.status===false)
        )
        })
     }
     function dayNight() {
        setDay(!isDay);
    }
    function setViewportWidth() {
        setViewport(!viewport);
    }
    function handleOnDragEnd(result) {
        if (!result.destination) return;
        const items = Array.from(task);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0,  reorderedItem);
        setTask(items);
    }
    function handleBodyBackground() {
      document.querySelector("body").style.backgroundColor = isDay? "hsl(0, 0%, 98%)" : "hsl(235, 21%, 11%)";
       document.querySelector("body").style.paddingBottom = "3rem";
    }

// ******************************Variable styles**************************************************************************

    var backGroundDay = {backgroundColor: "hsl(0, 0%, 98%)", backgroundImage: viewport? "url(images/bg-mobile-light.jpg)": "url(images/bg-desktop-light.jpg)"};
    var backGroundNight = {backgroundColor: "hsl(235, 21%, 11%)", backgroundImage: viewport? "url(images/bg-mobile-dark.jpg)": "url(images/bg-desktop-dark.jpg)"};
    var notesOuterShadow = {background: isDay? "white": "hsl(235, 24%, 19%)",boxShadow: isDay ? "rgba(50, 50, 93, 0.40) 0px 50px 100px -20px, rgba(0, 0, 0, 0.5) 0px 30px 60px -30px": "rgba(0, 0, 0, 0.50) 0px 50px 100px -20px, rgba(0, 0, 0, 0.4) 0px 30px 60px -30px"};
    var buttons_container_styles = {display: viewport && task.length!==0 ? "flex": "none", backgroundColor: isDay? "white": "hsl(235, 24%, 19%)"};
    var toggleButtonsColor = {color: isDay? "hsl(236, 9%, 61%)": "hsl(234, 11%, 52%)"};

    return (
        <section style={isDay?backGroundDay:backGroundNight}>
                <Media queries={{small: "(max-width: 800px)"}}
            onChange={matches =>
                matches.small
                ? setViewport(true)
                : setViewport(false)
          }
        />
        <div className="form_container">
           <Head isDay={isDay} setDay={setDay}/>
          <form className="form" onSubmit={handleClick}>
           <div style={{backgroundColor: isDay? "white": "hsl(235, 24%, 19%)"}} id="inputField_container">
            <div className="circle">
            <button className="submitNoteButton" onClick={() => {checkDuplicate(note); setnote({title: "", status: false});}} name="submitnote_button" type="submit"></button>
            </div>
            <input style={{color: isDay? "hsl(235, 19%, 35%)": "hsl(0, 0%, 98%)"}} id="inputField" onChange={handleChange} type="text" value={note.title} name="main_input" placeholder="Create a new todo.." autoComplete="off"/>
            <svg id="input_check" onClick={() => {checkDuplicate(note); setnote({title: "", status: false});}} xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke={isDay? "hsl(235, 19%, 35%)": "hsl(233, 11%, 84%)"} strokeWidth="2" d="M1 4.304L3.696 7l6-6"/></svg>
           </div>
           <div style={notesOuterShadow} className="handle_outer_shadow">
            <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="characters">
            {(provided) => (
            <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
            {task.map((item, index) => {
               return (
                   <Draggable key={item.title} draggableId={item.title} index={index}>
                   {(provided) => (
                     <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                     <Note
                      title={item.title}
                      handleChecks={() => {handleCheck(index)}}
                      deleteNotes={() => {deleteNote(index)}}
                      status={item.status}
                      isCompleted={isCompleted}
                      isActive={isActive}
                      isDay={isDay}
                      />
                      </li>
                  )}
                   </Draggable>
                    )
                  }
               )}
               {provided.placeholder}
               </ul>
           )}
           </Droppable>
           </DragDropContext>
          </div>
          <div id="todoStatus" style={buttons_container_styles} className="buttons_container">
           <p style={{color: isDay ? "hsl(236, 9%, 61%)": "hsl(233, 14%, 35%)"}}> {(task.filter(item => item.status===isCompleted? true: false)).length} items {isCompleted? "completed": "left"}</p>
           <button name="completed_item" type="button" onClick={clearCompleted}><p style={{color: isDay ? "hsl(236, 9%, 61%)": "hsl(233, 14%, 35%)"}}>Clear Completed</p></button>
          </div>
          <div style={{display: task.length===0 ? "none" : "flex", borderRadius: "0"}} className="handle_outer_shadow">
           <div style={{backgroundColor: isDay? "white": "hsl(235, 24%, 19%)"}} className="buttons_container">
            <p style={{color: isDay ? "hsl(236, 9%, 61%)": "hsl(233, 14%, 35%)", display: viewport ? "none" : "flex"}}> {(task.filter(item => item.status===isCompleted? true: false)).length} items {isCompleted? "completed": "left"}</p>
            <div className="toggleButtons">
            <button name="all_items" type="button" onClick={renderCompleted}><p style={{color: (isActive===false&&isCompleted===false&&task.length!==0)? "hsl(220, 98%, 61%)": toggleButtonsColor.color}}>All</p></button>
            <button name="active_items" type="button" onClick={handleActive}><p style={{color: (isActive&&task.length!==0)? "hsl(220, 98%, 61%)": toggleButtonsColor.color}}>Active</p></button>
            <button name="completed_items" type="button" onClick={handleCompleted}><p style={{color: (isCompleted&&task.length!==0)? "hsl(220, 98%, 61%)": toggleButtonsColor.color}}>Completed</p></button>
            </div>
            <button name="clear_completed" style={{display: viewport ? "none" : "flex", color: isDay ? "hsl(236, 9%, 61%)": "hsl(233, 14%, 35%)"}} type="button" onClick={clearCompleted}><p>Clear Completed</p></button>
            </div>
           </div>
          </form>
         </div>
           <div style={{cursor: 'move', position: 'absolute', width: '100%'}}>
            <p className="order">Drag and drop to reorder the list</p>
           </div>
        </section>
    )
}
export default TextArea;
