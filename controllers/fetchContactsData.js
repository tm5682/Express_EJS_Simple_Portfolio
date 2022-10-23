//we use this controller to load conactsData

var fetchModel= require('../models/Contact');
module.exports={
 
    fetchData:function(req, res){
      
      fetchModel.fetchData(function(data){
          res.render('businesspage',{page:'Businesspage', menuId:'businesspage', userData:data});
      })



    }
}