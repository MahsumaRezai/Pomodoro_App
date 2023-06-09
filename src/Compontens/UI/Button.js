import { Fragment } from "react";
import classes from './Button.module.css'

const Button = (porps) => {
    return (
        <Fragment>
            <button type={porps.type || 'button'} className={classes.btn} onClick={porps.onClick}>{porps.children}</button>
        </Fragment>
    )

}
export default Button;