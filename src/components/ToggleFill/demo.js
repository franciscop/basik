import styled from "styled-components";
import ToggleFilled from ".";

import { Section, MiniCard } from "../../helpers";

const CustomToggleStyle = styled(ToggleFilled)`
  --size: 20px;
  --radius: 0px;
  --color: blue;
  --line: 3px;
`;

const CustomToggleProps = (props) => (
  <ToggleFilled size="20px" line="3px" radius="0px" color="blue" {...props} />
);

export default function Demo() {
  return (
    <Section title="<ToggleFilled />">
      <label>
        <ToggleFilled /> A simple toggle
      </label>
      <label>
        <ToggleFilled defaultChecked /> A checked one
      </label>

      <hr />

      <MiniCard as="label">
        <ToggleFilled size={12} /> 12
      </MiniCard>
      <MiniCard as="label">
        <ToggleFilled size={14} /> 14
      </MiniCard>
      <MiniCard as="label">
        <ToggleFilled size={16} /> 16 (default)
      </MiniCard>
      <MiniCard as="label">
        <ToggleFilled size={18} /> 18
      </MiniCard>
      <MiniCard as="label">
        <ToggleFilled size={20} /> 20
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
