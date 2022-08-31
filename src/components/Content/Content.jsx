import React from 'react'
import PropTypes from 'prop-types'
import css from './Content.module.css'

const Content = () => {
    return (
        <section 
            className={css[`${"content__container--col"}`]}>
            <h1 
                className={ css[`${"titleText--main"}`] }>
                Main
            </h1>
            <h2 
                className={ css[`${"titleText--title"}`] }>
                Title
            </h2>
            <p 
                className={ css[`${"textAuxiliar"}`] }>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit beatae sint laboriosam quis. Laudantium, officia? Officia dolorem aut veniam ipsa?
            </p>
        </section>
    )
}

Content.propTypes = {}

export default Content