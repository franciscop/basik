import styled from "styled-components";
import withBlur from "../../helpers/withBlur.js";

const Wrap = styled.label`
  --radius: ${(p) => p.radius ?? "var(--radius-small)"};
  --color: ${(p) => p.color ?? "var(--color-primary)"};
  --inactive: ${(p) => p.inactive ?? "#ddd"};
  --size: ${(p) => String(p.size || 16).replace(/px$/, "")}px;
  --stroke: ${(p) => p.stroke || "calc(var(--size) / 6)"};

  display: inline-block;
  vertical-align: sub;
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
  background: var(--inactive);
  transition: all 0.2s ease;

  ::after {
    content: "";
    position: absolute;
    top: 40%;
    left: 50%;
    width: 65%;
    height: 42%;
    transform: translate(-50%, -50%) rotate(-45deg);
    border: var(--stroke) solid white;
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
    background: var(--color);
  }

  input:checked + &::after {
    opacity: 1;
  }
`;

export default function CheckBackFill({ onClick, ...props }) {
  return (
    <Wrap {...props}>
      <PhanthomCheckbox {...props} onClick={withBlur(onClick)} />
      <Check />
    </Wrap>
  );
}
