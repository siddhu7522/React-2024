import styled from "styled-components"


const test=`
    text-align:center
`

const Heading = styled.h1`
  ${props => props.type==="h1" && `
    font-size:3rem;
    font-weight:600
  `}

${props => props.type==="h2" && `
    font-size:2rem;
    font-weight:600
  `}

${props => props.type==="h3" && `
    font-size:2rem;
    font-weight:500
  `}

  font-size:30px;
  font-weight:600;
  /* background-color: yellow; */
  ${test}
`


export default Heading