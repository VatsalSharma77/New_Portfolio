import Array "mo:core/Array";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import Order "mo:core/Order";

actor {
  type ContactMessage = {
    name : Text;
    email : Text;
    message : Text;
  };

  module ContactMessage {
    public func compare(message1 : ContactMessage, message2 : ContactMessage) : Order.Order {
      switch (Text.compare(message1.name, message2.name)) {
        case (#equal) { Text.compare(message1.email, message2.email) };
        case (order) { order };
      };
    };
  };

  let contactMessages = Map.empty<Nat, ContactMessage>();
  var messageId = 0;

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, message : Text) : async () {
    let contactMessage : ContactMessage = {
      name;
      email;
      message;
    };
    contactMessages.add(messageId, contactMessage);
    messageId += 1;
  };

  public query ({ caller }) func getAllContactMessages() : async [ContactMessage] {
    contactMessages.values().toArray().sort();
  };

  public query ({ caller }) func getContactMessage(id : Nat) : async ContactMessage {
    switch (contactMessages.get(id)) {
      case (null) { Runtime.trap("Contact message does not exist") };
      case (?contactMessage) { contactMessage };
    };
  };
};
