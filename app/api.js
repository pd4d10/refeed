import { AppKey, Authorization, AppId } from './config';

const fetchInoreader = (url, options) =>
  fetch('https://www.inoreader.com/reader/api/0' + url, {
    ...options,
    headers: { AppKey, Authorization, AppId },
  });

export async function fetchTags() {
  const res = await fetchInoreader('/tag/list');
  const { tags } = await res.json();
  return tags;
}

export async function fetchList() {
  const res = await fetchInoreader('/subscription/list');
  const { subscriptions } = await res.json();
  return subscriptions;
}

export async function fetchItem(id, c) {
  console.log('fetch', id, c);
  const query = c ? `?c=${c}` : '';
  const res = await fetchInoreader(`/stream/contents/${id}${query}`);
  const { continuation, items } = await res.json();
  items.forEach(item => {
    item.summary.content = item.summary.content.replace(/^[\w\W]*?<\/center>/, '');
  });
  return {
    continuation,
    items,
  };
}
