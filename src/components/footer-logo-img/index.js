import footerLogoSrc from '../../assets/images/footer-logo.png';

const FooterLogoImg = ({clasName, style}) => {
  return (
    <img src={footerLogoSrc} alt="FooterLogoImg"
    clasName={clasName} style={{...style, objectFit:'cover'}}/>
  )
}

export default FooterLogoImg