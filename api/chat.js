let currentController = null;

export default async function chat(question, onChunk) {
  currentController = new AbortController();
  let reader;
  try {
    const res = await fetch('https://staging.api.fairhub.io/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question }),
      signal: currentController.signal,
    });

    if (!res.ok) {
      return 'Sorry, something went wrong. Please try again later.';
    }

    reader = res.body.getReader();
    const decoder = new TextDecoder();
    let full = '';
    // eslint-disable-next-line no-constant-condition
    while (true) {
      // eslint-disable-next-line no-await-in-loop
      const { done, value } = await reader.read();
      if (done) break;
      const piece = decoder.decode(value, { stream: true });
      full += piece;
      onChunk(full);
    }

    return full;
  } catch (err) {
    if (err.name === 'AbortError') {
      return null;
    }
    return 'Sorry, something went wrong. Please try again later.';
  } finally {
    if (reader) {
      try {
        await reader.cancel();
      } catch {
        /* ignore */
      }
    }
  }
}

export function cancelRequest() {
  if (currentController) {
    currentController.abort();
  }
}
