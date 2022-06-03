import { NextComponentType } from "next";
import styled from "styled-components";

type Props = {
  className?: string;
};

const Component: NextComponentType<NextComponentType, {}, Props> = (props) => (
  <div className={props.className}>Welcome to next.js!</div>
);

const StyledComponent = styled(Component)`
color: #f00;
`

export default StyledComponent