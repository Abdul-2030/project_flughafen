exports.handler = async (event) => {
    try {
      const { data } = JSON.parse(event.body);
      // Process the data (e.g., store it in a database or in-memory storage).
      // Update the data as needed.
  
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Data received and processed successfully' }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Error processing data' }),
      };
    }
  };

  