import { Divider, Text, Container, Heading, Image, Box } from '@chakra-ui/react'

const Qa = ({ q, a }) =>
  <Box mt={6}>
    <Heading size='sm'>{q}</Heading>
    <Text>{a}</Text>
  </Box>

const headingColor = '#6c4e8e'

const Home = () => {
  return (
    <Container maxWidth='1180'>
      <Container maxWidth='100%' centerContent>
        <Heading pt='9' pb='9' color={headingColor}>
          The Merovingian Architecture
        </Heading>

        <Image width='550px' src='https://merv-arch.s3.us-west-2.amazonaws.com/merovingian.jpg' />

        <Text fontSize='18' mt='5'>
          <em>
            "You see, there is only one constant, one universal, it is the only real truth: causality. Action. Reaction. Cause and effect." - the Merv
          </em>
        </Text>
      </Container>

      <Divider mt={10} />

      <Heading mt={10} size='md' color={headingColor}>Here's some high level Q and A to intrigue [or confuse] you.</Heading>

      <Qa
        q='What is this'
        a='The Merovingian Architecture, Merv, is a collection of simple concepts that, when used together, create a beautiful web application backend.'
      />

      <Qa
        q='Why is it called The Merovingian Architecture'
        a='One of the main components is CQRS.  Commands come in to the system, and if your business logic gives the go-ahead, an "Event" is persisted and then one or more "Effects" can happen.  Those with power, give commands.  Those without power, the Effects, do as they are told.'
      />

      <Qa
        q='Give me the elevator pitch'
        a="No, I'm not selling anything.  I simply love what I've built and feel compelled to share it because it brings me so much joy in my daily work."
      />

      <Qa
        q='What language do I have to use?'
        a="Any (see, it's not a framework)"
      />

      <Divider mt={10} />

      <Heading color={headingColor} size='md' mt={10}>
        The components
      </Heading>

      <Heading size='sm'>
        Commands
      </Heading>

      <Heading size='sm'>
        Events
      </Heading>

      <Heading size='sm'>
        Effects
      </Heading>

      <Heading size='sm'>
        Aggregates
      </Heading>

      <Heading size='sm'>
        Read store
      </Heading>

      ...

    </Container>
  )
}

export default Home
