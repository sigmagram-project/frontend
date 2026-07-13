// Thin fetch wrapper for the backend API.
// Base URL points at the Spring Boot backend (default port 8080).
const BASE_URL = 'http://localhost:8080/api';

// ---------------------------------------------------------------
// ===== PLACEHOLDER: FRONTEND TEAM (Task 1) =====

export async function uploadImage(file) {
  // TODO: build a FormData object with the file under the key "file",
  // then POST it to `${BASE_URL}/images` using fetch().
  //
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
export async function likeImage(imageId) {
  // TODO: send a POST request to:
  // `${BASE_URL}/images/${imageId}/like`
  //
  // const res = await fetch(...);
  if (!res.ok) throw new Error(await res.text());
  return res.json();

}

export async function unlikeImage(imageId) {
  // TODO: send a POST request to:
  // `${BASE_URL}/images/${imageId}/unlike`
  //
  // const res = await fetch(...);
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}
// ======================================

// ---------------------------------------------------------------
// ===== PLACEHOLDER: FRONTEND TEAM (Task 3) =====
// TODO: implement fetchComments(imageId) -> GET {BASE_URL}/images/{id}/comments
// TODO: implement addComment(imageId, text) -> POST {BASE_URL}/images/{id}/comments
export async function fetchComments(imageId) {
  throw new Error('TODO: implement fetchComments (Task 3 - frontend)');
}

export async function addComment(imageId, text) {
  throw new Error('TODO: implement addComment (Task 3 - frontend)');
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
