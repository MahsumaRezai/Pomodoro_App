import { Fragment } from "react";
import classes from './ButtonPomdor.module.css'

const ButtonPomdor = (porps) => {
    return (
        <Fragment>
            <div>

                <button type={porps.type || 'button'} className={classes.btn}>{porps.children}</button>
            </div>

        </Fragment>

    )
}
export default ButtonPomdor;