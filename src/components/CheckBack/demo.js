import styled from "styled-components";
import CheckBack from ".";

import { Section, MiniCard, LabCard } from "../../helpers";

const CustomCheckStyle = styled(CheckBack)`
  --size: 20px;
  --radius: 0px;
  --color: blue;
  --line: 3px;
`;

const CustomCheckProps = (props) => (
  <CheckBack size="20px" line="3px" radius="0px" color="blue" {...props} />
);

export default function Demo() {
  return (
    <Section title="<CheckBack />">
      <label>
        <CheckBack /> A simple checkbox
      </label>
      <label>
        <CheckBack defaultChecked /> A checked one
      </label>

      <hr />

      <MiniCard as="label">
        <CheckBack size={12} /> 12
      </MiniCard>
      <MiniCard as="label">
        <CheckBack size={14} /> 14
      </MiniCard>
      <MiniCard as="label">
        <CheckBack size={16} /> 16 (default)
      </MiniCard>
      <MiniCard as="label">
        <CheckBack size={18} /> 18
      </MiniCard>
      <MiniCard as="label">
        <CheckBack size={20} /> 20
      </MiniCard>

      <hr />

      <LabCard scale={8}>
        <CheckBack size={10} defaultChecked />
      </LabCard>
      <LabCard scale={5}>
        <CheckBack defaultChecked />
      </LabCard>
      <LabCard scale={0.75}>
        <CheckBack size={100} defaultChecked />
      </LabCard>

      <LabCard scale={15}>
        <CheckBack size={5} stroke="0.5px" radius="0.5px" defaultChecked />
      </LabCard>
      <LabCard scale={3.75}>
        <CheckBack size={20} stroke="2px" radius="2px" defaultChecked />
      </LabCard>
      <LabCard scale={0.75}>
        <CheckBack size={100} stroke="10px" radius="10px" defaultChecked />
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
