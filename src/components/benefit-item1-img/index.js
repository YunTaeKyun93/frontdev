import benefitItem1Src from '../../assets/images/benefit-item1.png';
const BenfitItem1Img = ({className, style})=>{
    return <img src={benefitItem1Src} alt="BenfitItem1Img" className={className} style={{...style, objectFit:'cover'}} />
}
export default BenfitItem1Img;