import { Fragment } from "react";
import classes from './ButtonLogn.module.css'

const ButtonLogn = (porps) => {
    return (
        <Fragment>
            <div>

                <button type={porps.type || 'button'} className={classes.btn}>{porps.children}</button>
            </div>

        </Fragment>

    )
}
export default ButtonLogn;