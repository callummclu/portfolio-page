import Container from '../../components/container/Container'
import Banner from '../../components/Banner/Banner'
import TextContainer from '../../components/textContainer/TextContainer'
import ContactBox from '../../components/contactBox/ContactBox'

function Contact(){

  const email_icon = "https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/256/000000/external-email-interface-kiranshastry-lineal-kiranshastry.png"
  const github_icon = "https://img.icons8.com/glyph-neue/256/000000/github.png"
  const linkedIn_icon = "https://img.icons8.com/ios/200/000000/linkedin.png"

  const content = (
    <>
      <Banner />
      <TextContainer content={
        <>
          <h1>Contact</h1>
          <p>Here are some of my contact details feel free to contact me using any of the below options</p>
        </>
      }/>
      
      <div style={{paddingBottom:"25px"}} className="contact-box-container">
        <ContactBox text="callummcluskey100@gmail.com" icon={email_icon} isEmail="true" />
        <ContactBox text={<a href="https://www.linkedin.com/in/callum-mcluskey-69a6b7226/">Callum McLuskey</a>} icon={linkedIn_icon}/>
        <ContactBox text={<a href="https://github.com/callummclu">callummclu</a>} icon={github_icon}/>
      </div>
    </>
  )
  return <Container content={content} />
}


export default Contact;