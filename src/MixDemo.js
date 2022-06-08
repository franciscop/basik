import CheckBack from "./components/CheckBack";
import CheckBackFill from "./components/CheckBackFill";
import CheckBox from "./components/CheckBox";
import CheckFill from "./components/CheckFill";
import Toggle from "./components/Toggle";
import ToggleFill from "./components/ToggleFill";
import ToggleOut from "./components/ToggleOut";

import { Section } from "./helpers";

export default function Demo() {
  return (
    <Section>
      <label>
        <CheckBack /> CheckBack
      </label>
      <label>
        <CheckBackFill /> CheckBackFill
      </label>
      <label>
        <CheckBox /> CheckBox
      </label>
      <label>
        <CheckFill /> CheckFill
      </label>
      <label>
        <Toggle /> Toggle
      </label>
      <label>
        <ToggleFill /> ToggleFill
      </label>
      <label>
        <ToggleOut /> ToggleOut
      </label>

      <hr />

      <label>
        <CheckBack defaultChecked /> CheckBack
      </label>
      <label>
        <CheckBackFill defaultChecked /> CheckBackFill
      </label>
      <label>
        <CheckBox defaultChecked /> CheckBox
      </label>
      <label>
        <CheckFill defaultChecked /> CheckFill
      </label>
      <label>
        <Toggle defaultChecked /> Toggle
      </label>
      <label>
        <ToggleFill defaultChecked /> ToggleFill
      </label>
      <label>
        <ToggleOut defaultChecked /> ToggleOut
      </label>
    </Section>
  );
}
