//here will export the all 404 and the next is a callBack

module.exports =(req,res,next)=>{
    res.status(404).json({error :'Not Found'});

};