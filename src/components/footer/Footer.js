import logoLetters from "../../assets/logo-letters.png";
import {
  FooterSection,
  FullWidth,
  FooterInfo,
  Logo,
  SocialMedias,
  SocialMedia,
  Copyright,
} from "./Footer-Styles";
import { H3 } from "../../constants/typography";
import resume from "../../assets/Sreya.Kata.Resume.pdf";
import "./Footer.css";
import ContactForm from "./contact-form/Contact-Form";

const socialMedias = [
  {
    icon: "<i class='fas fa-envelope footer-icon'></i>",
    url: "mailto:sreya.kata@gmail.com",
  },
  {
    icon: "<i class='fab fa-linkedin footer-icon'></i>",
    url: "https://www.linkedin.com/in/sreya-kata/",
  },
  {
    icon: "<i class='fab fa-github footer-icon'></i>",
    url: "https://github.com/sreya-kata",
  },
  {
    icon: "<i class='fas fa-file footer-icon'></i>",
    url: resume,
  },
];

const Footer = () => {
  return (
    <FooterSection id="contact">
      <FullWidth>
        <FooterInfo>
          <Logo src={logoLetters} alt="white 'sk' initials" />
          <SocialMedias>
            {socialMedias.map((socialMedia) => {
              return (
                <SocialMedia
                  href={socialMedia.url}
                  target="_blank"
                  key={socialMedia.url}
                >
                  <div
                    dangerouslySetInnerHTML={{ __html: socialMedia.icon }}
                  ></div>
                </SocialMedia>
              );
            })}
          </SocialMedias>
          <Copyright>
            <b>© {new Date().getFullYear()} Sreya Katabathuni</b>
          </Copyright>
          <H3 white>
            Designed in <b>Figma</b>, built in <b>React</b>, and deployed with{" "}
            <b>Netlify</b>
          </H3>
        </FooterInfo>
        <div>
          <ContactForm />
        </div>
      </FullWidth>
    </FooterSection>
  );
};

export default Footer;
