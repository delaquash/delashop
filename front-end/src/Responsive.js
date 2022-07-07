import { css } from "styled-components";

export const mobileView =(props) => {
    return css `
        @media only screen and (max-width: 320px), only screen and (min-width: 768px){
            ${props}
        }
    `
}

export const tabletIpadView = (props)=> {
    return css `
    @media only screen and (max-width: 768px) {
        ${props}
    }`
}

export const webView = (props)=> {
    return css`
        @media only screen and (max-width: 1024px) {
            ${props}
        }
    `
}