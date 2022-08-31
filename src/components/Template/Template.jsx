import React from 'react'
import PropTypes from 'prop-types'
import css from './Template.module.css'

const Template = ({ children }) => {
    console.log('online--Template')
    return (
        <div className={css.container__template}>
            {children}
        </div>
    )
}

Template.propTypes = {}

export default Template