import { Fragment } from "react";
import classes from './Task.module.css';
import ButtonTask from "./ButtonTask";

const Task = (porps) => {
    return (
        <Fragment>
            <form className={classes.form}>
                <input type="text" className={classes.input} ></input>
                <ButtonTask>Add Task</ButtonTask>
            </form>

        </Fragment>
    )
}
export default Task;