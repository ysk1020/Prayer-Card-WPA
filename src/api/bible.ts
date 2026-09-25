const API_URL = import.meta.env.VITE_BIBLE_API_URL;
const API_KEY = import.meta.env.VITE_BIBLE_API_KEY;
const BIBLE_ID = import.meta.env.VITE_BIBLE_ID;

export interface Passage {
  text: string;
  ref: string;
}

interface Book {
  id: string;
  chapters: { id: string }[];
}

async function get<T>(path: string): Promise<T> {
  const res = await fetch(`${API_URL}/bibles/${BIBLE_ID}${path}`, {
    headers: { "api-key": API_KEY },
  });
  if (!res.ok) throw new Error(`Bible API error: ${res.status}`);
  const json = await res.json();
  return json.data;
}

function pickRandom<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

const textParams = new URLSearchParams({
  "content-type": "text",
  "include-verse-numbers": "false",
  "include-titles": "false",
  "include-notes": "false",
});

async function fetchText(path: string): Promise<Passage> {
  const data = await get<{ content: string; reference: string }>(
    `${path}?${textParams}`,
  );
  return {
    text: data.content.replace(/¶/g, "").trim(),
    ref: data.reference,
  };
}

// passageId uses api.bible format, e.g. "PSA.34.18" or "PHP.4.6-PHP.4.7"
export function fetchPassage(passageId: string): Promise<Passage> {
  return fetchText(`/passages/${passageId}`);
}

// The book list never changes, so fetch it once and reuse it
let booksPromise: Promise<Book[]> | null = null;

function getBooks(): Promise<Book[]> {
  booksPromise ??= get<Book[]>("/books?include-chapters=true").catch((err) => {
    booksPromise = null;
    throw err;
  });
  return booksPromise;
}

export async function fetchRandomVerse(): Promise<Passage> {
  const books = await getBooks();
  const book = pickRandom(books);
  const chapters = book.chapters.filter((c) => !c.id.endsWith(".intro"));
  const chapter = pickRandom(chapters);

  const verses = await get<{ id: string }[]>(`/chapters/${chapter.id}/verses`);
  const verse = pickRandom(verses);

  return fetchText(`/verses/${verse.id}`);
}
