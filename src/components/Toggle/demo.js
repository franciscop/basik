import styled from "styled-components";
import Toggle from ".";

import { Section, MiniCard } from "../../helpers";

const CustomToggleStyle = styled(Toggle)`
  --size: 20px;
  --radius: 0px;
  --color: blue;
  --line: 3px;
`;

const CustomToggleProps = (props) => (
  <Toggle size="20px" line="3px" radius="0px" color="blue" {...props} />
);

export default function Demo() {
  return (
    <Section title="<Toggle />">
      <label>
        <Toggle /> A simple toggle
      </label>
      <label>
        <Toggle defaultChecked /> A checked one
      </label>

      <hr />

      <MiniCard as="label">
        <Toggle size={12} /> 12
      </MiniCard>
      <MiniCard as="label">
        <Toggle size={14} /> 14
      </MiniCard>
      <MiniCard as="label">
        <Toggle size={16} /> 16 (default)
      </MiniCard>
      <MiniCard as="label">
        <Toggle size={18} /> 18
      </MiniCard>
      <MiniCard as="label">
        <Toggle size={20} /> 20
      </MiniCard>

      <hr />

      <MiniCard as="label">
        <CustomToggleStyle /> Custom Styled
      </MiniCard>
      <MiniCard as="label">
        <CustomToggleProps defaultChecked /> Custom Props
      </MiniCard>
    </Section>
  );
}
