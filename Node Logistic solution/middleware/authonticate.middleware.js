const jwt=require("jsonwebtoken");

const userauthonticate=(req,res,next)=> {
    const token=req.headers.authorization
    if(token){
      const decode=jwt.verify(token,"masai")
      if(decode){
          const userId=decode.user_id
        
          req.body.user_id=userId
          next()
      }
      else{
        return res.status(401).json({isError:true, message: 'Unauthorized Acsess' });
      }
    }
    else{
        return res.status(401).json({isError:true, message: 'Unauthorized Acsess' });
    }
  }
  
  
  module.exports={
    userauthonticate
  }
