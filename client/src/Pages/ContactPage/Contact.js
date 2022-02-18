import Container from '../../components/container/Container'
import Banner from '../../components/Banner/Banner'
import TextContainer from '../../components/textContainer/TextContainer'

function Contact(){
  const content = (
    <>
      <Banner />
      <TextContainer content={<h1>Contact</h1>}/>
      
    </>
  )
  return <Container content={content} />
}


export default Contact;