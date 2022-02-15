import Container from '../../components/container/Container'
import TextContainer from '../../components/textContainer/TextContainer'

function Home(){
  const content = (
    <>
      <TextContainer content={
        <>
          <h3>Welcome</h3>
          <p>This is a small web app used to display all of my projects i have works on as an aspiring full stack developer</p>
        </>
      }/>
    </>
  )
  return <Container content={content} />
}

export default Home