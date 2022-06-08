import styled from "styled-components";

export default styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  border: 1px solid #ddd;
  padding: 10px;
  line-height: 1;
  border-radius: var(--radius);

  width: 100px;
  height: 100px;
  justify-content: center;

  & > * {
    flex-grow: 0;
    flex-shrink: 0;
    transform: scale(${(p) => p.scale || 1});
  }
`;
