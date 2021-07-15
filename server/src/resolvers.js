const resolvers = {
    Query:{
        //returns an array of Tracks and will be used to populate 
        //out home 

        //(parent, args, context, info)
        tracksForHome:(_, __, {dataSources}) =>{
            return dataSources.trackAPI.getTracksForHome()
        }
    },
    Track:{
        author:({authorId}, _, {dataSources}) => {
            return dataSources.trackAPI.getAuthor(authorId)
        }
    }
}

module.exports = resolvers