import { Divider, Text, Container, Heading, Image, Box } from '@chakra-ui/react'

const Qa = ({ q, a }) =>
  <Box mt={6}>
    <Heading size='sm'>{q}</Heading>
    <Text>{a}</Text>
  </Box>

const Concept = ({ name, children }) =>
  <Box mt={5}>
    <Heading size='sm' mt={1}>
      {name}
    </Heading>

    <Box mt={1}>
      {children}
    </Box>
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
        a='Commands come in to the system (a "Cause") and if your business logic gives the go-ahead, an "Event" is persisted and then one or more "Effects" can happen.  Everything boils down to cause and effect.  With a complete history of Events, the Merovingian architecture allows you to have full understanding of the "why". ("why is this order in a state of canceled?")  "Why is what separates us from them"'
      />

      <Qa
        q='Give me the elevator pitch'
        a="No, I'm not selling anything.  I simply love what I've built and feel compelled to share it because it brings me so much joy in my daily work."
      />

      <Qa
        q='Is this just CQRS?'
        a='It definitely is CQRS, but also DDD, Event Sourcing, and a strategy to organize your Event Effects and how to generate/maintain a read store of your business entities (orders, users, etc.)'
      />

      <Qa
        q='If this is just a collection of pre-existing concepts, why give a name and make it a thing?'
        a='As I was breaking away from OOP and REST/CRUD frameworks it took me weeks of cherry-picking concepts in order to create my ideal web backend architecure.  Merv is the result of that effort.'
      />

      <Qa
        q='What language do I have to use?'
        a="Any (see, it's not a framework)"
      />

      <Box mt={3}>
        <Heading color={headingColor} size='md' mt={10}>
          The Concepts
        </Heading>
      </Box>

      <Concept name='Commands'>
        <Text p={1}>
          Commands are phrases in the imperative present tense, like a git commit.  Like a git commit they can carry with them some data used to alter state.
        </Text>

        <Text p={1}>
          I have been using pascal case to define my commands:
          <br />
          "VisitorSubmitContactForm", "UserUpdateEmail", "ManagerOverridePrice"
          <br />
          I have been using the format of [Actor][Action][Subject]
          <br />
          or, Who's doing what to what?
        </Text>

        <Text p={1}>
          At this "Command Layer" you're speaking to the manager and he knows what his team can do and cannot do.
          <br />
          Commands can be accepted or rejected, just like in real life.
          <br />
          Your business logic validation, authentication, et cetera lives right here.  Commands are the way your system receives state altering data, you decide what to accept or reject right here.
        </Text>
      </Concept>

      <Concept name='Events'>
        <Text>
          If a command is accepted one or more Events can be written.  Because Events are typically the result of a command, and they are usually named accordingly.
          <br />
          "VisitorSubmittedContactForm", "UserUpdatedEmail", "ManagerOverrodePrice"
          <br />
          Aside from the event name, the data from the command is stored alongside, or not.  Additional data can be added or anything omitted, there's no hard rule, only the concept.
          <br />
          Let's get philosophical for a moment (just kidding, I always am).  These events are named in past tense, because they are always reflected upon (used to alter state) at a future time, even if that future time is the next cpu tick.  Likewise, when something happens (an event) in physical reality, we only observe it happening after it has already happened, and our response to it can only happen after the observation.  Consider the chain of causality:  prime mover causes an event (user clicks a button), we observe it (pub/sub), we consider what we observed (possible conditional logic), and possibly take action (effect) to become our own prime mover.  This chain of causation can continue indefinitely, or until there's no more energy left in existence with which to convert into expressions of will.
          <br />
          Also, consider Pharaoh Rameses II's proclamation from "The Ten Commandments" (1956) (so aptly named?) - "So let it be written, so let it be done".  What is written?  The Event.  What is done?  The Effect(s).
        </Text>
      </Concept>

      <Concept name='Effects'>
        <Text>
          effects
        </Text>
      </Concept>

      <Concept name='Aggregates'>
        <Text>
          aggregates
        </Text>
      </Concept>

      <Concept name='Read store'>
        <Text>
          read store
        </Text>
      </Concept>

      ...

    </Container>
  )
}

export default Home
