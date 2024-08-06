import styled from "styled-components";

const Row = styled.div`
    display: flex;
    ${props=>props.type==="horizontal" && `
        justify-content: space-between;
        align-items: center;
    `};

    ${props=>props.type==="vertical" && `
        flex-direction: column;
        gap: 1.6rem;
    `}
`

export default Row