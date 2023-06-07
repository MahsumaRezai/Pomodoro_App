import { Fragment } from "react";
import classes from './Task.module.css';

const Task = (props) => {
    return (
        <Fragment>
            <form className={classes.form}>
                <label>Time to focus!</label>
                <input type="text" ></input>
            </form>

        </Fragment>
    )
}
export default Task;