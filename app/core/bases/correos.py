
from django.core.mail import EmailMultiAlternatives, EmailMessage
from django.template.loader import get_template

from app.settings import prod_mode, DEFAULT_FROM_EMAIL, DEFAULT_RECEIVER_EMAIL

class BaseMail:
    def __init__(self, **kwargs):
        self.to_email = [DEFAULT_RECEIVER_EMAIL]
        self.bcc_email = []

        for k, v in kwargs.items():
            setattr(self, k, v)

        if type(self.to_email) == str:
            self.to_email = [self.to_email]
        if type(self.bcc_email) == str:
            self.bcc_email = [self.bcc_email]


class EmailSend(BaseMail):
    def send(self):
        from_email = DEFAULT_FROM_EMAIL
        to_email = self.to_email if prod_mode else [DEFAULT_RECEIVER_EMAIL]
        if hasattr(self, 'bcc_email'):
            bcc_email = self.bcc_email
        else:
            bcc_email = []
        bcc_email = bcc_email if prod_mode else []


        email_html = self.email_html
        email_message = EmailMultiAlternatives(
            subject = self.email_subject,
            body = email_html,
            from_email = from_email,
            to = to_email,
            bcc = bcc_email
        )
        email_message.attach_alternative(email_html, 'text/html')
        # verify if self has file_names attribute
        if hasattr(self, 'file_names'):
            for file_name in self.file_names:
                with open(f'{self.rute_file}/{file_name[0]}', 'rb') as f:
                    email_message.attach(file_name[0], f.read(), file_name[1])
        email_message.send()
        return True


class EmailTextSend(BaseMail):
    def send(self):
        from_email = DEFAULT_FROM_EMAIL
        to_email = self.to_email if prod_mode else [DEFAULT_RECEIVER_EMAIL]
        if hasattr(self, 'bcc_email'):
            bcc_email = self.bcc_email
        else:
            bcc_email = []
        bcc_email = bcc_email if prod_mode else []

        email_message = EmailMessage(
            subject = self.email_subject,
            body = self.email_text,
            from_email = from_email,
            to = to_email,
            bcc = bcc_email
        )
        
        if hasattr(self, 'file_names'):
            for file_name in self.file_names:
                with open(f'{self.rute_file}/{file_name[0]}', 'rb') as f:
                    email_message.attach(file_name[0], f.read(), file_name[1])
        email_message.send()
        return True



