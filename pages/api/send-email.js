import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, folderId } = req.body;

    if (!name || !email || !folderId) {
      return res.status(400).json({ message: 'Name, email, and folderId are required' });
    }

    try {
      // Отправляем POST-запрос к Brevo API для добавления контакта в список
      const response = await axios.post(
        'https://api.brevo.com/v3/contacts/lists',
        {
          // Измените данные на ту схему, которая требуется в Brevo
          // В данном случае мы отправляем данные так, как это делается в Postman
          name: name,
          email: email,
          folderId: folderId
        },
        {
          headers: {
            'api-key': process.env.NEXT_PUBLIC_BREVO_API_KEY,
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
