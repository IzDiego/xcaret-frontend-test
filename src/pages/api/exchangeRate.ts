export default async function handler(req, res) {
    const { target } = req.query;
  
    if (!target) {
      return res.status(400).json({ error: 'Please provide a target currency.' });
    }
  
    const API_KEY = 'f0604747dc17f7aa09c0ffcea1c70d94';
    const endpoint = `https://open.er-api.com/v6/latest/MXN?apikey=${API_KEY}`;
  
    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error('Failed to fetch exchange rate.');
      }
  
      const data = await response.json();
      const rates = data.rates;
  
      if (!rates || !rates[target]) {
        return res.status(400).json({ error: 'Target currency not supported.' });
      }
  
      return res.status(200).json({ rate: rates[target] });
  
    } catch (error) {
      return res.status(500).json({ error: 'Failed to fetch exchange rate.' });
    }
  }
  