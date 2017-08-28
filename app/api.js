import { AppKey, Authorization, AppId } from './config';

const fetchInoreader = (url, options) =>
  fetch('https://www.inoreader.com/reader/api/0' + url, {
    ...options,
    headers: { ...((options && options.headers) || {}), AppKey, Authorization, AppId },
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
  const query = c ? `?c=${c}` : '';
  const res = await fetchInoreader(`/stream/contents/${id}${query}`);
  const { continuation, items } = await res.json();
  return {
    continuation,
    items: items.map(item => ({
      id: item.id,
      title: item.title,
      originTitle: item.origin.title,
      publishTime: item.published,
      content: item.summary.content.replace(/^[\w\W]*?<\/center>/, ''),
      read: item.categories.some(c => /\/state\/com.google\/read$/.test(c)),
      starred: item.categories.some(c => /\/state\/com.google\/starred$/.test(c)),
    })),
  };
}

export async function markAsRead(id) {
  const res = await fetchInoreader(`/edit-tag?i=${id}&a=user/-/state/com.google/read`, {
    // headers: {
    //   'Content-Type': 'application/json',
    // },
    method: 'POST',
    // body: JSON.stringify({
    //   i: id,
    //   r: 'user/-/state/com.google/read',
    // }),
  });
  const text = await res.text()
  return text
}
