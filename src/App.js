import { useEffect, useState } from "react";
import "./styles.css";
import styled, { createGlobalStyle } from "styled-components";

import CheckBoxDemo from "./components/CheckBox/demo";
import CheckFillDemo from "./components/CheckFill/demo";
import CheckBackDemo from "./components/CheckBack/demo";
import CheckBackFillDemo from "./components/CheckBackFill/demo";

import ToggleDemo from "./components/Toggle/demo";
import ToggleFillDemo from "./components/ToggleFill/demo";
import ToggleOutDemo from "./components/ToggleOut/demo";

import CheckBox from "./components/CheckBox";
import CheckBack from "./components/CheckBack";
import Toggle from "./components/Toggle";
import ToggleFill from "./components/ToggleFill";

import { md } from "./helpers";
import MixDemo from "./MixDemo";

const Global = createGlobalStyle`
  :root {
    --color-primary: #f33;
    --color-light: #ccc;
    --color-gray: #aaa;

    --line-thin: 1px;
    --line-normal: 1.5px;
    --line-thick: 2px;

    --radius-tiny: 2px;
    --radius-small: 4px;
    --radius-normal: 8px;
    --radius-large: 16px;
    --radius-huge: 100px;

    --ratio-small: 1.5;
    --ratio-normal: 1.75;
    --ratio-large: 2;
  }
`;

const Body = styled.div`
  margin: 30px auto;
  max-width: 960px;
  display: flex;
  gap: 20px;
`;

const AsideWrap = styled.div`
  width: 240px;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
`;

const AsideContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  position: sticky;
  top: 30px;

  a {
    display: block;
    width: 100%;
    color: inherit;
    text-decoration: none;
    padding: 3px 10px;
    border: 1px solid #ccc;
  }
`;

const Main = styled.main``;

const Aside = () => {
  const [titles, setTitles] = useState([]);
  useEffect(() => {
    setTitles(
      [...document.querySelectorAll("main h2")].map((el) => ({
        id: el.id,
        text: el.textContent,
      }))
    );
  }, []);
  return (
    <AsideWrap>
      <AsideContent>
        <a href="#basik">
          <h1 id="basik">Basik</h1>
        </a>
        {titles.map(({ id, text }) => (
          <a href={`#${id}`}>{text}</a>
        ))}
      </AsideContent>
    </AsideWrap>
  );
};

const Text = md`
Basic React components for \$100. [Buy it now in the Alpha for just \$20](https://app.lemonsqueezy.com/products/2880)! It's different from your typical component library because:

- Many variations: you have multiple alternative components for the same element, making mix and match very easy.
- High quality: each component is designed from the ground up to match the rest of them while remaining high quality.
- Customizable: adapt them to your needs with templates, CSS variables, styled components, or just props. Pick your preferred style!
- Well documented:
- Tiny React: import only the components you are going to use to avoid bloat.

It's optimized so you only bundle the components that you use. Themable, configurable, keyboard accessible, if you want a component it's there. Or simply [request it](https://github.com/franciscop/hundred/issues).

[Subscribe to our newsletter](https://notyet.com/) to get notified with new components and before the price bump!

To use this library you need a license; however we do make the code readable and you are free to modify it for your own use, [see our license](https://github.com/franciscop/hundred/LICENSE).

A small mix of some of the components we have so far:
`;

const Intro = styled.div`
  margin-bottom: 30px;

  p {
    margin: 10px 0;
  }

  pre {
    background: #eee;
    padding: 10px;
  }
`;

const Half = styled.div`
  display: flex;
  border: 1px solid #ccc;
  margin: 10px 0;

  pre {
    flex-basis: 50%;
    padding: 10px;
    border-right: 1px solid #ccc;
  }
`;
const Content = styled.div`
  padding: 10px;

  & > label {
    display: block;
  }
`;
const CodePreview = ({ code, children }) => {
  code = code
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .join("\n");
  return (
    <Half>
      <pre>{code}</pre>
      <Content>{children}</Content>
    </Half>
  );
};

export default function App() {
  return (
    <Body>
      <Global />

      <Aside />

      <Main>
        <Intro>
          <h1>
            Basik <sup>𝝰</sup>
          </h1>
          <Text />
          <MixDemo />
          <p>
            They are very easy to customize with simple props or styled
            components:
          </p>

          <CodePreview
            code={`
            <CheckBox color="blue" /> CheckBox
            <CheckBack radius="0" /> CheckBack
            <Toggle radius="0" color="blue" /> Toggle
            <ToggleFill radius="0" /> ToggleFill
          `}
          >
            <label>
              <CheckBox radius="0" color="blue" /> CheckBox
            </label>
            <label>
              <CheckBack radius="0" /> CheckBack
            </label>
            <label>
              <Toggle color="blue" /> Toggle
            </label>
            <label>
              <ToggleFill radius="0" /> ToggleFill
            </label>
          </CodePreview>
        </Intro>

        <CheckBoxDemo />
        <CheckFillDemo />
        <CheckBackDemo />
        <CheckBackFillDemo />

        <ToggleDemo />
        <ToggleFillDemo />
        <ToggleOutDemo />
      </Main>
    </Body>
  );
}
