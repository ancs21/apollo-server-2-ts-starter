import { ApolloServer } from "apollo-server"
import typeDefs from './schema'

const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  }
];

const resolvers = {
    Query: {
        books: () => books
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({url}) => console.log(`Server running on ${url}`))