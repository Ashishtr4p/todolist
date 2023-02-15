import React, {useState} from 'react';
import EditTask from '../modals/EditTask'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const Card = ({taskObj, index, deleteTask, updateListArray}) => {
    const [modal, setModal] = useState(false);
    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = () => {
        deleteTask(index)
    }

    return (
        <div >
            
            
        <div class = "card-wrapper" style={{paddingleft:'20px'}}>
            <div class = "card-top" style={{"background-color": colors[index%5].primaryColor}}></div>
            <div class = "task-holder" >
                <span class = "card-header" style={{"background-color": colors[index%5].secondaryColor, "border-radius": "10px",textTransform:'uppercase'}}><b>{taskObj.Name}</b></span>
                <p className = "mt-3" style={{textAlign:'justify',paddingLeft:'10px'}}>
                    {taskObj.Description}
                    
                   
                    </p>

                <div style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}>
                <p >
                        <select id="task" name="task" style={{"background-color": colors[index%5].primaryColor}}>
                        <option value="OPEN">OPEN</option>
                        <option value="WORKING">WORKING</option>
                        <option value="DONE">DONE</option>
                        <option value="OVERDUE">OVERDUE</option>
                        </select>
                    </p>
                <p>{taskObj.time}</p>
                    <i class = "far fa-edit mr-3" style={{"color" : colors[index%5].primaryColor, "cursor" : "pointer",paddingRight:'20px'}} onClick = {() => setModal(true)}></i>
                    <i class="fa-solid fa-trash" style = {{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {handleDelete}></i>
                </div>
        </div>
        <EditTask modal = {modal} toggle = {toggle} updateTask = {updateTask} taskObj = {taskObj}/>
        </div>
        </div>
    );
};

export default Card;