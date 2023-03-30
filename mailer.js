import mailer from 'nodemailer'

class Mailer {

  async execute()  {
    console.log("Executing")
    this.accoutEmail = process.env.FROM_EMAIL
    this.userEmail = process.env.USER_EMAIL
    this.app_password = process.env.APP_PASSWORD
    
    this.interval = setInterval(async () => {
      const pageStatus = await this.fetchPage()
      if(pageStatus === true){
        this._clearInterval()
      }
    }, 5000)

  }

  _clearInterval() {
    clearInterval(this.interval)
  }

  async fetchPage(interval){

    return new Promise(async (res, rej) => {
      const response = await fetch('https://siic.saime.gob.ve/')
      if(response.ok){
        this.send()
        .catch(e => console.log(e))
        res(true)
      }
    })
  }

  prepareMailer(){
    this.transporter = mailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        type: "login",
        user: this.accoutEmail,
        pass: this.app_password
      }
    })
  }

  async send(){
    this.prepareMailer();
    if(!this.transporter) throw new Error("No se configuro mailer correctamente");
    const status = await this.transporter.sendMail({
      from : "Miguelo el suanfanson <docker@gmail.com>",
      to: this.userEmail,
      subject: "Hellow it's me you looking for",
      text: "Saime esta operativo GET IN!",
      html: `
      <h1> SAIME OPERATIVO WEY ! DALE PA ENTRO</h1>
      <a href="https://siic.saime.gob.ve/"> GO! </a>
      `})

    console.log("Message Sent: %s",status.messageId)
  }
}

export default Mailer;