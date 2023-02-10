import benefitItem4Src from '../../assets/images/benefit-item4.png';
const BenfitItem4Img = ({className, style})=>{
    return <img src={benefitItem4Src} alt="BenfitItem4Img" className={className} style={{...style, objectFit:'cover'}} />
}
export default BenfitItem4Img;