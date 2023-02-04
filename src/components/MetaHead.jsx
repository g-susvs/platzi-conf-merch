import React from 'react'
import { Helmet } from 'react-helmet'

export const MetaHead = ({ title }) => {
    return (
        <Helmet>
            <meta name="description" content="Ecomerce prueba" />
            <meta name="keywords" content="E-commerce,HTML, CSS, JavaScript, React" />
            <meta name="author" content="g-susvs" />
            <title>{title}</title>
        </Helmet>
    )
}
