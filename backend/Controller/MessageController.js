
const Visitors = require('../Model/Visitors');

const sendMessage = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newMessage = new Visitors({ name, email, message });
    await newMessage.save();

    res.status(201).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



const getMessages = async (req, res) => {
    try {
      const messages = await Visitors.find().sort({ timestamp: -1 });
      res.json(messages);
    } catch (error) {
      console.error('Error fetching messages:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  module.exports = {
    sendMessage,
    getMessages,
  };


