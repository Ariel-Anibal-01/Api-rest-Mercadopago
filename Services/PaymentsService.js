const axios = require("axios"); 

class PaymentService {
    async createPayment() {
        const url = "https://api.mercadopago.com/checkout/preferences";

        const body = {
           payer_email: "test_user_16470183@testuser.com",
            items: [
                {
                    title: "Dummy Title",
                    description: "Dummy description",
                    picture_url: "http://www.myapp.com/myimage.jpg",
                    category_id: "category123",
                    quantity: 1,
                    unit_price: 10
                }
            ],
            back_urls: {
                success: "https://www.success.com",
                failure: "http://www.failure.com",
                pending: "http://www.pending.com"
            },
            notification_url: "https://www.your-site.com/1pn"
        };

        const payment = await axios.post(url, body, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
            }
        });

      return payment.data;
    }

    async createSubscription() {
        const url= "https://api.mercadopago.com/preapproval";

 

        const body = {
           // preapproval_plan_id: "2c938084726fca480172750000000000",
           // card_token_id: "e3ed6f098462036dd2cbabe314b9de2a",
          
            reason: "Suscripción de ejemplo",
            auto_recurring: {
                frequency:1,
                
                frequency_type: "months",
                transaction_amount: 10,
                currency_id: "ARS"
            },
            back_url: "https://google.com.ar",
        
            payer_email: "test_user_16470183@testuser.com",
        };

        const subscription = await axios.post(url, body, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
            }
        });

        console.log(subscription.data)

        return subscription.data;
    }
}

module.exports = PaymentService;