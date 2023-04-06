const helpDetails = (req,res)=>{
    return res.status(200).send({
        message:'Successfully hitting API',
        success:true,
        data:{
            contact:"+91 7735648011",
        },
    })
}

module.exports = {
    helpDetails
}