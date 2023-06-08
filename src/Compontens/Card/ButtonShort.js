import { Fragment } from "react";
import classes from './ButtonShort.module.css';
const ButtonShort = (porps) => {
    return (
        <Fragment>
            <div>

                <button type={porps.type || 'button'} className={classes.btn}  >
                    {porps.children}</button>
            </div>

        </Fragment>

    )
}
export default ButtonShort;