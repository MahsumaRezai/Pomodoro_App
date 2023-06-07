import { Fragment } from "react";
import classes from './ButtonTask.module.css'

const ButtonTask = (porps) => {
    return (
        <Fragment>
            <div>

                <button type={porps.type || 'submit'} className={classes.btn}>{porps.children}</button>
            </div>

        </Fragment>

    )
}
export default ButtonTask;