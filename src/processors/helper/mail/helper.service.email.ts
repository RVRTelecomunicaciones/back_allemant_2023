import { Injectable } from '@nestjs/common';
import { InjectSendGrid, SendGridService } from '@ntegral/nestjs-sendgrid';
import { confirmMail } from './templates';

// 邮件格式
export interface IEmailOptions {
  to: string;
  subject?: string;
  text?: string;
  html?: string;
  link?: string;
}

@Injectable()
export class EmailService {
  private transporter;
  private clientIsValid: boolean;
  private socials: string;

  /* constructor(@InjectSendGrid() private readonly sendgridClient: SendGridService) {
    this.transporter = nodemailer.createTransport({
      auth: {
        user: APP_CONFIG.MAIL_SENDGRID.user,
        pass: APP_CONFIG.MAIL_SENDGRID.pass,
      },
      host: APP_CONFIG.MAIL_SENDGRID.host,
    });
    console.log('TRANSPORTE');
    console.log(this.transporter);

    this.socials = APP_CONFIG.PROJECT_EMAIL.socials
      .map(
        (social) =>
          `<a href="${social[1]}" style="box-sizing:border-box;color:${APP_CONFIG.PROJECT_EMAIL.color};font-weight:400;text-decoration:none;font-size:12px;padding:0 5px" target="_blank">${social[0]}</a>`,
      )
      .join('');
    this.verifyClient();
  } */

  public constructor(@InjectSendGrid() private readonly sendgridClient: SendGridService) {}

  // 验证有效性
  private verifyClient(): void {
    return this.transporter.verify((error) => {
      if (error) {
        this.clientIsValid = false;
        setTimeout(this.verifyClient.bind(this), 1000 * 60 * 30);
      } else {
        this.clientIsValid = true;
      }
    });
  }

  // 发邮件

  /* async sendVerifyEmailSendGrid(name: string, email: string, token: string): Promise<boolean> {
    const buttonLink = `${APP_CONFIG.PROJECT_EMAIL.mailVerificationUrl}${token}`;
    const mail = confirmMail
      .replace(new RegExp('--PersonName--', 'g'), name)
      .replace(new RegExp('--ProjectName--', 'g'), APP_CONFIG.PROJECT_EMAIL.name)
      .replace(new RegExp('--ProjectAddress--', 'g'), APP_CONFIG.PROJECT_EMAIL.address)
      .replace(new RegExp('--ProjectLogo--', 'g'), APP_CONFIG.PROJECT_EMAIL.logoUrl)
      .replace(new RegExp('--ProjectSlogan--', 'g'), APP_CONFIG.PROJECT_EMAIL.slogan)
      .replace(new RegExp('--ProjectColor--', 'g'), APP_CONFIG.PROJECT_EMAIL.color)
      .replace(new RegExp('--ProjectLink--', 'g'), APP_CONFIG.PROJECT_EMAIL.url)
      .replace(new RegExp('--Socials--', 'g'), this.socials)
      .replace(new RegExp('--ButtonLink--', 'g'), buttonLink)
      .replace(new RegExp('--TermsOfServiceLink--', 'g'), APP_CONFIG.PROJECT_EMAIL.termsOfServiceUrl);

    const mailOptions = {
      to: email, // list of receivers (separated by ,)
      from: 'no-reply@allemantperitos.com.pe',
      subject: `Welcome to ${APP_CONFIG.PROJECT_EMAIL.name} ${name}! Confirm Your Email`,
      html: mail,
    };

    return new Promise<boolean>(() =>
      this.sendgridClient.send(mailOptions).then(
        () => '',
        (error) => {
          console.error(error);

          if (error.response) {
            console.error(error.response.body);
          }
        }
      )
    );
  } */
}
