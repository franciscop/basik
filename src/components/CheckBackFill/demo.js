import styled from "styled-components";
import CheckBackFill from ".";

import { Section, MiniCard } from "../../helpers";

const CustomCheckStyle = styled(CheckBackFill)`
  --size: 20px;
  --radius: 0px;
  --color: blue;
  --line: 3px;
`;

const CustomCheckProps = (props) => (
  <CheckBackFill size="20px" line="3px" radius="0px" color="blue" {...props} />
);

export default function Demo() {
  return (
    <Section title="<CheckBackFill />">
      <label>
        <CheckBackFill /> A simple checkbox
      </label>
      <label>
        <CheckBackFill defaultChecked /> A checked one
      </label>

      <hr />

      <MiniCard as="label">
        <CheckBackFill size={12} /> 12
      </MiniCard>
      <MiniCard as="label">
        <CheckBackFill size={14} /> 14
      </MiniCard>
      <MiniCard as="label">
        <CheckBackFill size={16} /> 16 (default)
      </MiniCard>
      <MiniCard as="label">
        <CheckBackFill size={18} /> 18
      </MiniCard>
      <MiniCard as="label">
        <CheckBackFill size={20} /> 20
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
