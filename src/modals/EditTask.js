import React, { useState , useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const EditTaskPopup = ({modal, toggle, updateTask, taskObj}) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    var [time] = useState(new Date());
    const handleChange = (e) => {
        
        const {name, value} = e.target

        if(name === "taskName"){
            setTaskName(value)
        }else{
            setDescription(value)
        }


    }
    useEffect(() => {
        setTaskName(taskObj.Name)
        setDescription(taskObj.Description)
    },[taskObj.Description, taskObj.Name])
    

    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {}
        tempObj['Name'] = taskName
        tempObj['Description'] = description
        taskObj["time"]= time.toLocaleTimeString()
        updateTask(tempObj)
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Update Task</ModalHeader>
            <ModalBody>
            
                    <div className = "form-group">
                        <label>Task Name</label>
                        <input type="text" className = "form-control" value = {taskName} onChange = {handleChange} name = "taskName" required/>
                    </div>
                    <div className = "form-group">
                        <label>Description</label>
                        <textarea rows = "5" className = "form-control" value = {description} onChange = {handleChange} name = "description" required></textarea>
                    </div>
                
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleUpdate} style={{borderRadius:'10px', margin:'5px',padding:'8px',backgroundColor:'blue'}}>Update</Button>{' '}
            <Button color="secondary" onClick={toggle} style={{borderRadius:'10px', margin:'5px',padding:'8px',backgroundColor:'blue'}}>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};

export default EditTaskPopup;