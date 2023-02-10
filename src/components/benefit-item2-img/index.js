import benefitItem2Src from '../../assets/images/benefit-item2.png';
const BenfitItem2Img = ({className, style})=>{
    return <img src={benefitItem2Src} alt="BenfitItem1Img" className={className} style={{...style, objectFit:'cover'}} />
}
export default BenfitItem2Img;