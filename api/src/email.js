import nodemailer from 'nodemailer';


    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: "apen.adotpetz@gmail.com",
            pass: "TIApen123"
        }
    })


    async function EnviarEmail(email, assunto, texto, htmlBody){
        try {         
            let response = await transporter.sendMail({
                from: 'AdotPetz <apen.adotpetz@gmail.com> ', 
                to: email,
                subject: assunto, 
                text: texto, 
                html: htmlBody
            });

            return response   
            
        } catch (error) {
            return error.toString()
        }
    }


export default EnviarEmail