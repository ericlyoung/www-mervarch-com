import {
  Divider, Text, Container, Heading, Image, Box, Link
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

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
    <Container maxWidth='1180' pb={10}>
      <Container maxWidth='100%' centerContent>
        <Heading pt='9' pb='9' color={headingColor}>
          The Merovingian Architecture (Merv)
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
        q='What is it?'
        a='The Merovingian Architecture, Merv, is a collection of simple concepts that, when used together, create a beautiful web application backend.'
      />

      <Qa
        q='Is there something to install?'
        a={'No.  Merv takes the "Teach a man to fish..." approach.  I\'m busy catching my own fish and happy to teach.'}
      />

      <Qa
        q='Why is it called The Merovingian Architecture'
        a='The Merovingian, my favorite character from my favorite movie!  Cause and Effect.  A powerful rule of nature.  Maybe the only rule.  "Commands" come in to the system and are considered a "Cause".  An "Event" is persisted and then one or more "Effects" happen.  Think of "Events" as recorded causes.  Everything boils to cause and effect.  With a complete history of Events, the Merovingian architecture allows you to have full understanding of system state.  Full understanding of how things came to be gives you the Why.  ("Why is what separates us from them" - the Merv)'
      />

      <Qa
        q='Is this just CQRS?'
        a='It definitely is CQRS, but also DDD, EDA, Event Sourcing, and a strategy to organize your Event Effects and how to generate/maintain a read store of your business entities (orders, users, et cetera.)'
      />

      <Qa
        q='If this is just a collection of pre-existing concepts, why give it a name and make it a thing?'
        a='As I was crawling out of the ooze (OOP and REST/CRUD frameworks) I spent weeks cherry picking bits and pieces to create my ideal web backend architecure.  Merv is the result of that effort.'
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
          Commands are phrases in the imperative present tense, like a git commit.  Like a git commit they can carry with them some data, potentially used to alter state.
        </Text>

        <Text p={1}>
          I have been using pascal case to define my commands:
          <br />
          "VisitorSubmittedContactForm", "UserUpdateEmail", "ManagerOverridePrice"
          <br />
          [Actor][Action][Subject], Who's doing what to what
        </Text>

        <Text p={1}>
          Commands can be accepted or rejected, just like in real life.
          <br />
          Your business logic validation, authentication, et cetera lives right here.  Commands are the way your system receives state altering data, you decide what to accept or reject right here.
        </Text>
      </Concept>

      <Concept name='Streams'>
        <Text p={1}>
          Taken directly from the Event Sourcing world.  A Stream is a named series of Events.  Simple, but extremely powerful concept.
        </Text>

        <Text p={1}>
          Required viewing:
        </Text>
        <iframe width='330' src='https://www.youtube.com/embed/JHGkaShoyNs?si=BgOwKnYSmrSmgh3V' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen />
      </Concept>

      <Concept name='Events'>
        <Text p={1}>
          If a command is accepted, one or more Events can be persisted [to a stream].  The command examples above could generate the following Events:
          <br />
          "VisitorSubmittedContactForm", "UserUpdatedEmail", "ManagerOverrodePrice"
          <br />
          Aside from the event name, the data from the command is stored alongside, or not.  Additional data can be added or anything omitted, there's no hard rule, do whatever is needed for your domain.
        </Text>

        <Text p={1}>
          Let's get philosophical for a moment (Just kidding, I always am).  These events are named in past tense, because they are reflected upon (used to alter state) at a future time, even if that future time is the next cpu tick.  Likewise, when something happens (an event) in physical reality, we only observe it happening after it has already happened, and our response to it can only happen after the observation.  Consider the chain of causality:  prime mover causes an event (user clicks a button), we observe it (pub/sub), we consider what we observed (possible conditional logic), and possibly take action (effect) to become our own prime mover.  This chain of causation can continue indefinitely, or until there's no more energy left in existence with which to convert into expressions of will.
          <br />
          Also, consider Pharaoh Rameses II's proclamation from "The Ten Commandments" (1956) (so aptly named?) - "So let it be written, so let it be done".  What is written?  The Event.  What is done?  The Effect(s).
        </Text>
      </Concept>

      <Concept name='Effects'>
        <Text p={1}>
          Ah, the effects.  Those that do as they are told.  Unwilling links in the chain [of cause and effect].
          <br />
          Something has been written, and now something will be done.
          <br />
          Here's some common examples:
          <br />
          A form submission event (VisitorSubmitContactForm) lands in the event store and in response to that we'll drop a document in mongo.
          <br />
          Of course more than one effect can be bound, so in addition we'll create a Task in our system for a sales agent to munch on.
          <br />
          A note on TIME.  Effects are real-time only.  There's no such thing as "replaying" effects.  Merv respects nature and in nature events happen only in the now, and their effects also only happen in the now.  Note that I'm not talking about the concept of replaying Events in order to build or rebuild state; that is done constantly in Merv.  Events get played and replayed frequently, like your VHS copy of Beauty and the Beast as a child (you can an admit it, err, ok I will), but Effects are for the now only.
          <br />
          Since Effects are time-safe, you can know that you're safe to do stuff that is time relevant, like send a text message or webhook.
        </Text>
      </Concept>

      <Concept name='Derivatives'>
        <Text p={1}>
          Some event sourcers call these aggregates.  I use a more accurate word.  Derivative.
          <br />
          The Latin roots of “derive” are de, a prefix that means “from” and rivus, a word that means “stream”.
          <br />
          The etymology lines up perfectly here.  A derivative in Merv is the current state of a stream.
          <br />
        </Text>
      </Concept>

      <Concept name='Read store'>
        <Text>
          read store
        </Text>
      </Concept>

      <Divider mt={10} />

      <Heading mt={10} mb={5} size='md' color={headingColor}>Example repo</Heading>

      <Box>
        <Link p={1} href='https://github.com/merv-arch/example' isExternal>
          https://github.com/merv-arch/example <ExternalLinkIcon mx='2px' />
        </Link>

        <Text p={1}>
          The example project shows off all the concepts explained above.
        </Text>
      </Box>
    </Container>
  )
}

export default Home
