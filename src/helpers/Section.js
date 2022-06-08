import styled from "styled-components";
import { FileText } from "react-feather";

const SectionStyle = styled.a`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid #ddd;

  hr {
    width: 100%;
    margin: 5px 0;
    border: 1px solid #ddd;
    border-color: #ddd transparent transparent transparent;
  }

  h1,
  h2,
  h3 {
    padding: 0;
    width: 100%;
    scroll-margin-top: 30px;
  }
`;

const Documentation = styled.a`
  color: inherit;
  display: flex;
  align-items: center;
  gap: 5px;
  text-decoration: none;
  float: right;
  margin-right: 10px;
`;

const Flex = styled.div`
  width: 100%;
  display: flex;
`;

const Spacer = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
`;

export default function Section({ title, children }) {
  return (
    <SectionStyle>
      {title && (
        <>
          <Flex>
            <h2 id={title.replace(/\W/g, "").toLowerCase()}>{title}</h2>
            <Spacer />
            <Documentation href={`/${title.replace(/\W/g, "").toLowerCase()}`}>
              <FileText /> Docs
            </Documentation>
          </Flex>

          <hr />
        </>
      )}
      {children}
    </SectionStyle>
  );
}
