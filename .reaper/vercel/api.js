module.exports = async(req,res)=>{
    const main = await require("./vercel");
    await main.default(req,res)
}