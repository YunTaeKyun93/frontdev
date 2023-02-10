import benefitItem3Src from '../../assets/images/benefit-item3.png';
const BenfitItem3Img = ({className, style})=>{
    return <img src={benefitItem3Src} alt="BenfitItem3Img" className={className} style={{...style, objectFit:'cover'}} />
}
export default BenfitItem3Img;