import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import mongoose from 'mongoose'
import { PORT, MONGODB_URI } from './config.js'
import Author from './models/author.js'
import Book from './models/book.js'
import { GraphQLError } from 'graphql'

mongoose.set('strictQuery', false)

try {
  mongoose.connect(MONGODB_URI)
  console.info('connected to MongoDB')
} catch (error) {
  console.error('error connecting to MongoDB:', error.message)
}

const typeDefs = `
  type Author {
    name: String!
    bookCount: Int!
    id: ID!
    born: Int
  }
  type Book {
    title: String!
    published: Int!
    author: Author!
    id: ID!
    genres: [String!]!
  }
  type Query {
    bookCount: Int!
    authorCount: Int!
    allBooks(author: String, genre: String): [Book!]!
    allAuthors: [Author!]!
  }
  type Mutation {
    addBook(
      title: String!, 
      published: Int!, 
      author: String!, 
      genres: [String!]!
    ): Book      
  }
  type Mutation {
    editAuthor(name: String!, setBornTo: Int): Author
  }
`

const filterBooks = async (_root, args) => {
  return await Book.find(args.genre ? { genres: args.genre } : {})
}

const addBook = async (_root, args) => {
  let author = await Author.findOne({ name: args.author })
  if (!author) {
    const newAuthor = new Author({ name: args.author })
    author = await newAuthor.save().catch((error) => {
      console.error(error)
      throw new GraphQLError('Creating the author failed', {
        extensions: {
          code: 'BAD_AUTHOR_INPUT',
          invalidArgs: args.author,
          error
        }
      })
    })
  }
  let newBook = new Book({ ...args, author: author.id })
  newBook = await newBook.save().catch((error) => {
    console.error(error)
    throw new GraphQLError('Creating the book failed', {
      extensions: {
        code: 'BAD_BOOK_INPUT',
        invalidArgs: args.title,
        error
      }
    })
  })
  return await newBook.populate('author')
}

const editAuthor = async (_root, args) => {
  let author = await Author.findOne({ name: args.name })
  if (author) {
    author.born = args.setBornTo
    author = await author.save()
  }
  return author
}

const resolvers = {
  Query: {
    bookCount: async () => await Book.countDocuments(),
    authorCount: async () => await Author.countDocuments(),
    allBooks: filterBooks,
    allAuthors: async () => await Author.find()
  },
  Author: {
    bookCount: async (author) =>
      await Book.countDocuments({ author: author.id })
  },
  Mutation: {
    addBook,
    editAuthor
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

const { url } = await startStandaloneServer(server, {
  listen: { port: PORT }
})

console.log(`🚀  Server ready at: ${url}`)
