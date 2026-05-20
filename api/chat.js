export default async function chat(question) {
  try {
    const res = await fetch('https://staging.api.fairhub.io/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question }),
    });

    if (!res.ok) throw new Error('Server error');

    const data = await res.json();
    return data.answer || 'Sorry, I could not find an answer.';
  } catch {
    return 'Sorry, something went wrong. Please try again later.';
  }
}
