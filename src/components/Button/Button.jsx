import PropTypes from 'prop-types';
import { Component } from 'react';
import style from '../styles.module.css'

export class Button extends Component {
    render() {
        const { getSearchLoad, children } = this.props;
        return (
            <button
                className={style.Button}
                onClick={() => {
                    getSearchLoad();
                }}
            >
                {children}
            </button>
        );
    }
}

Button.propTypes = {
    getSearchLoad: PropTypes.func,
};
    

export default Button