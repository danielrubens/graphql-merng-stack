const { project, clients } = require('../sampleData.js')
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema } = require('graphql')

const ClientType = new GraphQLObjectType({
    name: "Client",
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        phone: {type: GraphQLString}
    })
})

const RootQuery = GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        client: {
            type: ClientType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args){
                return clients.fiend(client => client.id === args.id)
            }
        }
    }
})

module.exports = new GraphQLSchema({query: RootQuery})