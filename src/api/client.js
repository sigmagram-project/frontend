// Thin fetch wrapper for the backend API.
// Base URL points at the Spring Boot backend (default port 8080).
const BASE_URL = 'http://localhost:8080/api';

// ---------------------------------------------------------------
// ===== PLACEHOLDER: FRONTEND TEAM (Task 1) =====

export async function uploadImage(file) {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch(`${BASE_URL}/images`, {
    method: "POST",
    body: formData,
  });
  // TODO: build a FormData object with the file under the key "file",
  // then POST it to ${BASE_URL}/images using fetch().
  // const formData = ...
  // const res = await fetch(...);
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export async function fetchImages() {
  const res = await fetch(`${BASE_URL}/images`);
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

// Helper (already usable, not a placeholder): builds the <img src> URL
// for a given image id.
export function imageDataUrl(imageId) {
  return `${BASE_URL}/images/${imageId}/data`;
}
// ======================================

// ---------------------------------------------------------------
// ===== PLACEHOLDER: FRONTEND TEAM (Task 2) =====

// TODO: implement likeImage(imageId) -> POST {BASE_URL}/images/{id}/like
// TODO: implement unlikeImage(imageId) -> POST {BASE_URL}/images/{id}/unlike
// Both should return the updated like count.
// POST {BASE_URL}/images/{imageId}/like
export async function likeImage(imageId) {
  const res = await fetch(`${BASE_URL}/images/${imageId}/like`, {
    method: "POST",
  });

  if (!res.ok) {
    throw new Error("Failed to like image");
  }

  const data = await res.json();
  return data.likeCount;
}

// POST {BASE_URL}/images/{imageId}/unlike
export async function unlikeImage(imageId) {
  const res = await fetch(`${BASE_URL}/images/${imageId}/unlike`, {
    method: "POST",
  });

  if (!res.ok) {
    throw new Error("Failed to unlike image");
  }

  const data = await res.json();
  return data.likeCount;
}
// ======================================

// ---------------------------------------------------------------
// ===== PLACEHOLDER: FRONTEND TEAM (Task 3) =====
// TODO: implement fetchComments(imageId) -> GET {BASE_URL}/images/{id}/comments
// TODO: implement addComment(imageId, text) -> POST {BASE_URL}/images/{id}/comments
export async function fetchComments(imageId) {
  const res = await fetch(`${BASE_URL}/images/{id}/comments`);

  if (!res.ok) {
    throw new Error("Failed to fetch comments");
  }

  return await res.json();
}

export async function addComment(imageId, text) {
  const res = await fetch(`${BASE_URL}/images/${imageId}/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text: text,
    }),
  });

  if (!res.ok) {
    throw new Error("Failed to add comment");
  }

  return await res.json();
}
// ======================================

// ---------------------------------------------------------------
// ===== PLACEHOLDER: FRONTEND TEAM (Task 4) =====
// TODO: implement submitFeedback(message) -> POST {BASE_URL}/feedback
// Keep in mind this may run from a page-unload handler, so consider
// navigator.sendBeacon(...) instead of fetch() for reliability.
export async function submitFeedback(message) {
  throw new Error('TODO: implement submitFeedback (Task 4 - frontend)');
}
// ======================================
