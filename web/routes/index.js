const express = require('express')
const router = express.Router();




router.post("/", function(req, res){
 
    let yas = Number(req.body.yas);

    let tarih  = new Date();
    let gun    = tarih.getDay();
    let saat   = tarih.getHours();
    let dakika = tarih.getMinutes();
    let saniye = tarih.getSeconds();	
    
    
    // res.send("yasiniz: " + yas);
    
    if ( gun == 0 || gun ==6){
         res.render("<h1>Hafta Sonu Disariya Cikamazsiniz</h1>")
    }
    
    else if( yas>65 ){
         res.render( " Yasiniz "+ yas+ " oldugu icin sadece saat 10 ile 13.00 arasi disari cikabilirsiniz.")
    }
    
    else if( yas<20 ){
         res.render(" Yasiniz " + yas + " oldugu icin saat 13.00 ile 16.00 arasi disariya cikabilirsin.")
    }
    
    else if( ( yas>20 && yas<65 ) && ( saat>10 && saat<21 ) ){
         res.render("Disariya Cikabilirsiniz")
    }
    
    else if( (yas>20 && yas<65 ) && (saat<10 || saat>21) ){
         res.render( " Disariya saat " + saat+":"+dakika+":"+saniye+ " oldugu icin cikamazsiniz." )
    }
    
    
});


module.exports = router;