import styled from "styled-components";
import withBlur from "../../helpers/withBlur.js";

const Wrap = styled.label`
  --radius: ${(p) => p.radius ?? "var(--radius-tiny)"};
  --color: ${(p) => p.color ?? "var(--color-primary)"};
  --line: ${(p) => p.line ?? "var(--line-normal)"};
  --inactive: ${(p) => p.inactive ?? "var(--color-gray)"};
  --size: ${(p) => String(p.size || 16).replace(/px$/, "")}px;
  --stroke: ${(p) => p.stroke || "calc(var(--line) * 1.5)"};

  display: inline-block;
  vertical-align: middle;
  width: var(--size);
  height: var(--size);
  cursor: pointer;
`;

// Hide the input, we don't need it here
const PhanthomCheckbox = styled.input.attrs({ type: "checkbox" })`
  opacity: 0;
  pointer-events: none;
  position: absolute;
`;

const Check = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  border-radius: var(--radius);
  border: var(--line) solid var(--inactive);
  transition: all 0.2s ease;

  display: flex;
  justify-content: center;
  align-items: center;

  // The checkmark
  ::after {
    content: "";

    width: calc(var(--size) * 0.65);
    height: calc(var(--size) * 0.38);
    transform: translate(0%, -20%) rotate(-45deg);
    transform-origin: center center;
    border: var(--stroke) solid var(--color);
    border-top-width: 0;
    border-right-width: 0;
    z-index: 1;
    opacity: 0;
    transition: all 0.2s ease;
  }

  input:focus + & {
    box-shadow: 0 0 0 2px #fff, 0 0 0 4px var(--color-light);
  }

  input:checked + & {
    border-color: var(--color);
    /* background: var(--color); */
  }

  input:checked + &::after {
    opacity: 1;
  }
`;

export default function CheckBox({ onClick, ...props }) {
  return (
    <Wrap {...props}>
      <PhanthomCheckbox {...props} onClick={withBlur(onClick)} />
      <Check />
    </Wrap>
  );
}
