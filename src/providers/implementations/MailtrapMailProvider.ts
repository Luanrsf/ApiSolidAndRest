import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from "nodemailer"
import Mail from "nodemailer/lib/mailer";

export class MailtrapMailProvider implements IMailProvider{
  private transporter:Mail;

  constructor(){
    this.transporter = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 0000,
      auth: {
        user: "xxxxxxxxxxxxxx",
        pass: "xxxxxxxxxxxxxx"
      }
    });
  }


  async sendMail(message:IMessage):Promise<void>{
    await this.transporter.sendMail({
      to:{
        name:message.to.name,
        address:message.to.name,
      },
      from:{
        name:message.from.name,
        address:message.from.name,
      },
      subject:message.subejct,
      html:message.body,
    })
  }
}
