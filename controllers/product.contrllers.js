const Products=require("../product.model")

const getProducts=async(req,res)=>{
    try{
        const products=await Products.find({});
        res.status(200).json(products);
      
        }catch(error){
          res.status(500).json({message: error.message})
      
        }
};
const getProductsingle=async(req,res)=>{

    try{
        const {id}=req.params;
      const productsbyid=await Products.findById(id);
      res.status(200).json(productsbyid);
    
      }catch(error){
        res.status(500).json({message: error.message})
    
      }

};


const createProduct=async(req,res)=>{
    try{
        const product=await Products.create(req.body);
        res.status(200).json(product)
    
    
    
    
      }catch(error){
        res.status(500).json({message: error.maessage})
    
      }
      console.log(req.body)
      res.send(req.body);

};


const updateproduct=async(req,res)=>{
    try {
        const { id } = req.params;
    
       
        if (!mongoose.Types.ObjectId.isValid(id)) {
          return res.status(400).json({ message: "Invalid ObjectId format" });
        }
    
        const product = await Products.findByIdAndUpdate(id, req.body, { new: true });
    
        if (!product) {
          return res.status(404).json({ message: "Product not found" });
        }
    
        res.status(200).json(product);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
};

const  deleteproduct=async(req,res)=>{

    try{

        const {id}=req.params;
        const product=await Products.findByIdAndDelete(id);
        if(!product){
          return res.status(400).json({message:" product not found"})
        }
        res.status(200).json({message:"Product deleted successfully"})
    
      }catch(error){
        res.status(500).json({message:error.message})
    
      }
    


}

module.exports={
    getProducts,
    getProductsingle,
    createProduct,
    updateproduct,
    deleteproduct
}
  