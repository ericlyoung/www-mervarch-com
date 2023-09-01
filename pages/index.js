import { Container, Heading, Image, Box } from '@chakra-ui/react'

const Home = () => {
  return (
    <Container centerContent maxWidth='1180'>
      <Heading p='9'>
        The Merovingian Architecture
      </Heading>

      <Image width='550px' src='https://merv-arch.s3.us-west-2.amazonaws.com/merovingian.jpg' />

      <Box>
        <em>
          "You see, there is only one constant, one universal, it is the only real truth: causality. Action. Reaction. Cause and effect." - the Merv
        </em>
      </Box>

      <Box>
        DDD, CQRS, Event Sourcing, Sanity
      </Box>

      <Box>
        Straight to business, like Trinity:
      </Box>
    </Container>
  )
}

export default Home
