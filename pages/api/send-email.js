import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ message: 'Name, email are required' });
    }

    try {
      // Отправляем POST-запрос к Brevo API для добавления контакта в список
      const response = await axios.post(
        'https://api.brevo.com/v3/contacts',
        {
          email: email,
          attributes: {
          firstName: name
           },
          listIds: [9]
        },
        {
          headers: {
            'api-key': process.env.BREVO_API_KEY,
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('Contact added successfully:', response.data);
      return res.status(200).json({ message: 'Contact added successfully' });
    } catch (error) {
      console.error('Error adding contact:', error.response ? error.response.data : error.message);
      return res.status(500).json({ message: 'Failed to add contact', error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
