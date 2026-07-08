import { useEffect, useState } from 'react';
import { submitFeedback } from '../api/client.js';

/**
 * =========================================================================
 * TASK 4: Closing the page and asking for feedback
 * =========================================================================
 * Browsers won't let you show a custom modal in the native
 * "are you sure you want to leave" dialog, so the usual approaches are:
 *   - `visibilitychange` (tab hidden) to show an in-page modal asking for
 *     feedback before the user actually navigates away, and/or
 *   - a "Close" button in the UI that opens this modal directly, and/or
 *   - `beforeunload` + navigator.sendBeacon(...) to fire-and-forget submit
 *     whatever feedback was typed so far.
 * Pick whichever fits the assignment best -- that decision is part of the
 * task.
 */
export default function FeedbackModal() {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');

  // ---------------------------------------------------------------
  // ===== PLACEHOLDER: FRONTEND TEAM =====
  // TODO (Task 4 - frontend):
  //   1. Decide on a trigger (see options above) and wire it up here,
  //      e.g. a `visibilitychange`/`beforeunload` listener that calls
  //      setVisible(true).
  //   2. On submit, call submitFeedback(message) from ../api/client.js.
  // ======================================
  useEffect(() => {
    // TODO: implement trigger
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: implement
  };

  if (!visible) return null;

  return (
    <div role="dialog" aria-label="Feedback">
      <form onSubmit={handleSubmit}>
        <label>
          Before you go, any feedback?
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
        </label>
        <button type="submit">Send</button>
        <button type="button" onClick={() => setVisible(false)}>
          Skip
        </button>
      </form>
    </div>
  );
}
