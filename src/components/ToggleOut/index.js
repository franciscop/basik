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
  width: calc(var(--ratio) * var(--size));
  height: var(--size);
  border-radius: var(--radius);
  transition: all 0.2s ease;

  ::before {
    content: "";
    position: absolute;
    top: calc(50% - (var(--size) - 4 * var(--line)) / 2);
    left: calc(1 * var(--line));
    width: calc(100% - 2 * var(--line));
    height: calc(var(--size) - 4 * var(--line));
    border-radius: var(--radius);
    background: var(--inactive);
  }

  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: var(--size);
    height: var(--size);
    background: var(--inactive);
    border-radius: var(--radius);
    transition: all 0.2s ease;
    box-shadow: inset 0 0 0 100px rgba(255, 255, 255, 0.4),
      1px 1px 2px -1px rgba(0, 0, 0, 0.5);
  }

  input:focus + & {
    box-shadow: 0 0 0 2px #fff, 0 0 0 4px var(--color-light);
  }

  input:checked + &::before {
    background: var(--color);
  }

  input:checked + &::after {
    left: calc(100% - var(--size));
    background: var(--color);
  }
`;

export default function ToggleFilled({ onClick, ...props }) {
  return (
    <Wrap {...props}>
      <PhanthomCheckbox {...props} onClick={withBlur(onClick)} />
      <Check />
    </Wrap>
  );
}
