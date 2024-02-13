const express = require('express');
const { Client } = require('@notionhq/client');

const app = express();

app.use(express.json());

const notion = new Client({ auth: process.env.NOTION_KEY });
const databaseId = process.env.NOTION_DATABASE_ID;

async function addItem(type, category, action, feedbackText = '') {
  try {
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        Category: {
          title: [
            {
              text: {
                content: category,
              },
            },
          ],
        },
        Action: {
          rich_text: [
            {
              text: {
                content: action,
              },
            },
          ],
        },
        Feedback: {
          rich_text: [
            {
              text: {
                content: feedbackText,
              },
            },
          ],
        },
        Type: {
          rich_text: [
            {
              text: {
                content: type,
              },
            },
          ],
        },
      },
    });
    // eslint-disable-next-line no-console
    console.log(response);
    // eslint-disable-next-line no-console
    console.log('Success! Entry added.');
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error.body);
  }
}

app.post('/api/feedback', async (req, res) => {
  const { body } = req;

  // eslint-disable-next-line no-console
  console.log(`Feedback received: ${JSON.stringify(body)}`);

  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');

  if (body === undefined) {
    res.status(400).json({ message: `Invalid Request ${req.body}` });
  } else if (body.category === undefined) {
    res.status(400).json({ message: `Category Missing ${body}` });
  } else if (body.action === undefined) {
    res.status(400).json({ message: `Action Missing ${body}` });
  } else {
    const { type, category, action, feedbackText } = body;

    // eslint-disable-next-line no-console
    console.log(`Feedback submitted for Category '${category}' with Action '${action}'`);

    await addItem(type, category, action, feedbackText);

    res.json({ success: true, message: `Feedback Sent` });
  }
});

module.exports = app;

// const port = process.env.PORT || 5000;

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });
