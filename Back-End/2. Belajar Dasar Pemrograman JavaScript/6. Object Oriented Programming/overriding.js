class MailService {
  constructor(sender) {
    this.sender = sender;
  }

  sendMessage(message, receiver) {
    return `${this.sender} sent ${message} to ${receiver}`;
  }
}

class WhatsAppService extends MailService {
  constructor(sender, isBusiness) {
    super(sender);
    this.isBusiness = isBusiness;
  }

  sendMessage(message, receiver) {
    let result = `${super.sendMessage(message, receiver)} ${this.isBusiness ? "WhatsApp Business" : ""}`;
    console.log(result);
  }

  sendBroadcastMessage(message, receivers) {
    for (const receiver of receivers) {
      this.sendMessage(message, receiver);
    }
  }
}

const whatsapp = new WhatsAppService("+6281234567890", true);

whatsapp.sendMessage("Hello", "+6289876543210");
whatsapp.sendBroadcastMessage("Hello", ["+6289876543210", "+6282234567890"]);
