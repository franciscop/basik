import styled from "styled-components";
import CheckBox from ".";

import { Section, MiniCard, LabCard } from "../../helpers";

const CustomCheckStyle = styled(CheckBox)`
  --size: 20px;
  --radius: 0px;
  --color: blue;
  --line: 2px;
`;

const CustomCheckProps = (props) => (
  <CheckBox size="20px" line="2px" radius="0px" color="blue" {...props} />
);

export default function Demo() {
  return (
    <Section title="<CheckBox />">
      <label>
        <CheckBox /> A simple checkbox
      </label>
      <label>
        <CheckBox defaultChecked /> A checked one
      </label>

      <hr />

      <MiniCard as="label">
        <CheckBox size={12} /> 12
      </MiniCard>
      <MiniCard as="label">
        <CheckBox size={14} /> 14
      </MiniCard>
      <MiniCard as="label">
        <CheckBox size={16} /> 16 (default)
      </MiniCard>
      <MiniCard as="label">
        <CheckBox size={18} /> 18
      </MiniCard>
      <MiniCard as="label">
        <CheckBox size={20} /> 20
      </MiniCard>

      <hr />

      <LabCard scale={8}>
        <CheckBox size={10} defaultChecked />
      </LabCard>
      <LabCard scale={5}>
        <CheckBox defaultChecked />
      </LabCard>
      <LabCard scale={0.75}>
        <CheckBox size={100} defaultChecked />
      </LabCard>

      <LabCard scale={15}>
        <CheckBox size={5} line="0.5px" radius="0.5px" defaultChecked />
      </LabCard>
      <LabCard scale={3.75}>
        <CheckBox size={20} line="2px" radius="2px" defaultChecked />
      </LabCard>
      <LabCard scale={0.75}>
        <CheckBox size={100} line="10px" radius="10px" defaultChecked />
      </LabCard>

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
