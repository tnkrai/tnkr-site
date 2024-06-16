// import Button from "@components/ui/Button"; //TODO: Fix path alias not working in netlify build (works locally)
import Button from "../components/ui/Button";
import styled from "styled-components";

// import { useContext } from "react";
// import ThemeContext, {
//   ThemeProvider,
//   Theme,
//   // DARK_TEXT_COLOR,
// } from "@contexts/Theme";

//TODO: Ipad pro looks weird, need to fix
const FooterContainer = styled.footer`
  margin-top: 1.5em;
  display: flex;
  flex-direction: row;
  padding: 1rem;
  text-align: center;
  p {
    margin: 0;
  }

  @media (max-width: 430px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const FooterSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const FooterButton = styled(Button)`
  background-color: transparent;
  color: white;

  &:hover {
    background-color: transparent;
    color: #119c5b;
  }
`;

// TODO: Will need to revisit, slowing me down resolving typings
//   color: ${({ theme }: { theme: Theme }) =>
//     theme === Theme.Dark
//       ? DARK_TEXT_COLOR
//       : theme === Theme.Light
//         ? WHITE_TEXT_COLOR
//         : DARK_TEXT_COLOR};
// `;

const AllRightsReserved = styled.section`
  margin-top: 1rem;
`;

const currentYear = new Date().getFullYear();

const Footer = () => {
  // const context = useContext(ThemeContext);

  // if (!context) {
  //   console.warn("theme context not found! defaulting to dark theme.");
  // }

  // const theme: Theme = context ? context.theme : Theme.Dark;

  //TODO: Change to NextJS Links for SSR and prefetching and scope to environments
  return (
    <FooterContainer>
      {/*TODO: Implement actual back to top function */}
      <FooterSection>
        <FooterButton url="https://tnkr.ai/about_us">about us</FooterButton>
        {/* <FooterButton url="https://tnkr.ai">blog</FooterButton> */}
        <FooterButton url="https://discord.gg/fcpeKMKn3E">discord</FooterButton>
        {/* <FooterButton url="https://buildspace.com/#tnkr.ai">
          buildspace
        </FooterButton> */}
        {/* <FooterButton url="https://twitter.com/#tnkr.ai">twitter</FooterButton> */}
      </FooterSection>
      {/* <FooterSection>
        <FooterButton url="https://tnkr.ai">privacy policy</FooterButton>
        <FooterButton url="https://tnkr.ai">terms of service</FooterButton>
        <FooterButton url="https://tnkr.ai">contact us</FooterButton>
      </FooterSection> */}
      <FooterSection>
        <FooterButton url="https://tnkr.ai">tnkr.explorer</FooterButton>
        <FooterButton url="https://tnkr.ai">tnkr.discord.bot</FooterButton>
      </FooterSection>
      <FooterSection>
        <FooterButton url="https://tnkr.ai">Back to top</FooterButton>
        <FooterButton url="https://tnkr.ai">
          <p>© {currentYear}, All rights reserved</p>
        </FooterButton>
      </FooterSection>
    </FooterContainer>
  );
};

export default Footer;
