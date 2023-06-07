import { Fragment } from "react";
import classes from './Time.module.css'

const Timer = (porps) => {
    return (
        <Fragment>

            <button type={porps.type || 'button'} className={classes.btn}>{porps.children}</button>
        </Fragment>
    )
}
export default Timer;