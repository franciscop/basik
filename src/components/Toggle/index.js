import styled from "styled-components";
import withBlur from "../../helpers/withBlur.js";

const Wrap = styled.label`
  --radius: ${(p) => p.radius ?? "var(--radius-huge)"};
  --color: ${(p) => p.color ?? "var(--color-primary)"};
  --line: ${(p) => p.line ?? "var(--line-normal)"};
  --inactive: ${(p) => p.inactive ?? "var(--color-gray)"};
  --size: ${(p) => String(p.size || 16).replace(/px$/, "")}px;
  --ratio: ${(p) => p.ratio ?? "var(--ratio-normal)"};

  display: inline-block;
  vertical-align: sub;
  width: calc(var(--ratio) * var(--size));
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

  ::after {
    content: "";
    position: absolute;
    top: var(--line);
    left: var(--line);
    width: calc(var(--size) - 4 * var(--line));
    height: calc(var(--size) - 4 * var(--line));
    background: var(--inactive);
    border-radius: var(--radius);
    transition: all 0.2s ease;
  }

  input:focus + & {
    box-shadow: 0 0 0 2px #fff, 0 0 0 4px var(--color-light);
  }

  input:checked + & {
    border-color: var(--color);
  }

  input:checked + &::after {
    left: calc(100% - var(--size) + 3 * var(--line));
    background: var(--color);
    border-color: var(--color);
  }
`;

export default function Toggle({ onClick, ...props }) {
  return (
    <Wrap {...props}>
      <PhanthomCheckbox {...props} onClick={withBlur(onClick)} />
      <Check />
    </Wrap>
  );
}
