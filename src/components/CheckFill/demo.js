import styled from "styled-components";
import CheckFill from ".";

import { Section, MiniCard } from "../../helpers";

const CustomCheckStyle = styled(CheckFill)`
  --size: 20px;
  --radius: 0px;
  --color: blue;
  --stroke: 4px;
`;

const CustomCheckProps = (props) => (
  <CheckFill size="20px" radius="0px" color="blue" stroke="4px" {...props} />
);

export default function Demo() {
  return (
    <Section title="<CheckFill />">
      <label>
        <CheckFill /> A simple checkbox
      </label>
      <label>
        <CheckFill defaultChecked /> A checked one
      </label>

      <hr />

      <MiniCard as="label">
        <CheckFill size={12} /> 12
      </MiniCard>
      <MiniCard as="label">
        <CheckFill size={14} /> 14
      </MiniCard>
      <MiniCard as="label">
        <CheckFill size={16} /> 16 (default)
      </MiniCard>
      <MiniCard as="label">
        <CheckFill size={18} /> 18
      </MiniCard>
      <MiniCard as="label">
        <CheckFill size={20} /> 20
      </MiniCard>

      <hr />

      <MiniCard as="label">
        <CustomCheckStyle /> Custom Styled
      </MiniCard>
      <MiniCard as="label">
        <CustomCheckProps defaultChecked /> Custom Props
      </MiniCard>
    </Section>
  );
}
