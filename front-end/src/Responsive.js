import { css } from "styled-components";

export const mobile =(props) => {
    return css `
        @media only screen and (min-width: 320px ){
            ${props}
        }
    `
}

export const tabletIpad = (props)=> {
    return css `
    @media only screen and (min-width: 768px) {
        ${props}
    }`
}

export const web = (props)=> {
    return css`
        @media only screen and (min-width: 1024px) {
            ${props}
        }
    `
}