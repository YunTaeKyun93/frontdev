import experienceSrc from '../../assets/images/experience.png';
const ExperienceImg = ({className, style})=>{
    return <img src={experienceSrc} alt="ExperienceImg" className={className} style={{...style, objectFit:'cover'}} />
}
export default ExperienceImg;