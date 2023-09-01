import { Grid, GridItem, Image } from '@chakra-ui/react'
const Home = () => {
  return (
    <Grid
      templateAreas={`"header header" "nav main"`}
      gridTemplateRows={'50px 1fr'}
      gridTemplateColumns={'150px 1fr'}
      h='200px'
      gap='1'
      color='blackAlpha.700'
      fontWeight='bold'
    >
      <GridItem pl='2' bg='orange.300' area={'header'}>
        Header
      </GridItem>
      <GridItem pl='2' bg='pink.300' area={'nav'}>
        Nav
      </GridItem>
      <GridItem pl='2' bg='green.300' area={'main'}>
        The Merovingian Architecture
        <p>
          <Image src='https://merv-arch.s3.us-west-2.amazonaws.com/merovingian.jpg' />
        </p>

        <em>
          "You see, there is only one constant, one universal, it is the only real truth: causality. Action. Reaction. Cause and effect." - the Merv
        </em>

        <br />
        <hr width='800' />
        <hr width='400' />
        <hr width='200' />
        <hr width='100' />
        <hr width='50' />

        <p>
          DDD, CQRS, Event Sourcing, Sanity
        </p>

        <p>
          Straight to business, like Trinity -
        </p>
      </GridItem>
      <GridItem pl='2' bg='blue.300' area={'footer'}>
        Footer
      </GridItem>
    </Grid>
  )
}

export default Home
