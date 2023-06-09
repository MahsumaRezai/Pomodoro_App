import { Fragment } from "react";
import classes from './OpenCart.module.css'
import Modal from "./Module";

const OpenCart = (props) => {
    return (
        <Fragment>
            <Modal className={classes.cart}>
            <form>
                <label>Name</label>
                <input></input>
                <label>Email</label>
                <input></input>
                <button>submit</button>
                <button>close</button>
                

            </form>
            </Modal>
        </Fragment>
    )


}
export default OpenCart;