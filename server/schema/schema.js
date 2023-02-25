const { GraphQLObjectType, GraphQLID, GraphQLString, 
    GraphQLSchema, GraphQLList, GraphQLNonNull } = require('graphql')
const Project = require('../models/Project')
const Client = require('../models/Client')


const ClientType = new GraphQLObjectType({
    name: "Client",
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        phone: {type: GraphQLString}
    })
})

const ProjectType = new GraphQLObjectType({
    name: "Project",
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        description: {type: GraphQLString},
        status: {type: GraphQLString},
        client: { 
            type: ClientType,
            resolve: (parent, args) => Client.findById(parent.clientId)
        }
    })
})

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        clients: {
            type: new GraphQLList(ClientType),
            resolve: (parent, args) => Client.find()
        },
        client: {
            type: ClientType,
            args: { id: { type: GraphQLID } },
            resolve: (parent, args) => Client.findById(args.id)
            
        },
        projects: {
            type: new GraphQLList(ProjectType),
            resolve: (parent, args) => Project.find()
        },
        project: {
            type: ProjectType,
            args: { id: { type: GraphQLID } },
            resolve: (parent, args) => Project.findById(args.id)
        }
    }
})

const mutation = new GraphQLObjectType({
    name: 'mutation',
    fields: {
        addClient: {
            type: ClientType,
            args: {
                name: { type: GraphQLNonNull(GraphQLString) },
                email: { type: GraphQLNonNull(GraphQLString) },
                phone: { type: GraphQLNonNull(GraphQLString) }
            },
            resolve(parent, args){
                const client = new Client({
                    name: args.name, email: args.email, phone: args.phone
                })
                return client.save()
            } 
        },
        deleteClient: {
            type: ClientType,
            args: { id: { type: GraphQLNonNull(GraphQLID) } },
            resolve(parent, args){
                return Client.findByIdAndRemove((args.id))
            }
        }
    }
})

module.exports = new GraphQLSchema({query: RootQuery, mutation})