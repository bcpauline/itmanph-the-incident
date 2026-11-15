# IT MAN PH — THE INCIDENT | Interactive Seminar V5

Open `index.html` in your browser, or deploy this directory to GitHub + Cloudflare Pages. Keep all images next to `index.html`.

## Classroom
- First-slide registration and 15-second timed challenges.
- Answers are selectable/changeable until 15 seconds expires and then locked in that local browser.
- Use the fullscreen button or F key. Desktop fills the viewport; mobile reflows.
- Certificate uses the attendee's registration name, seminar details, branding, and two signatories.

## Hidden editor
- Click the BytesCrafter company logo near IT MAN PH on the header to reveal the sign-in dialog.
- Enter the administrator password supplied by the event organizer.
- Edit slide content, prompts, answer choices, event information, labels, and images. Use Save & apply.
- Export settings JSON to back up and publish changes. Import JSON on another browser to restore them.
- For publishing changes to all participants, export settings and arrange distribution/import or embed saved JSON in a future built package. This version's edits are browser-local and are NOT centrally synchronized.

## Security limitations
This is a **static HTML site** and has **no secure server-side login**. Its editor password exists in downloadable JavaScript; it is a convenience UI guard, not secure authentication. Do not store confidential materials here or assume students cannot modify quiz data through developer tools. For secure admin access, shared updates, or tamper-resistant scores, add a server-side backend or an authentication provider and database.

## Certification
Signature 1 comes from the supplied Caezar image. The second signatory name is prefilled as Paolo Fidelis; no signature for Paolo was supplied. Upload his authorized signature in the editor. Check titles, date, organizer, and venue in editor before issuing certificates. Certificate is participation evidence, not an accreditation.

## V6 changes
- Removed square IT badge beside IT MAN PH. BytesCrafter logo remains the hidden admin entry.
- Fresh participant registration/session storage for V6 to prevent an older test participant name or expired quiz timer from appearing. Browsers may autofill other form values, but the registration field has autocomplete disabled.
- 15-second timers start on first visit to each scored challenge, permit answer changes until expiry, then lock the latest choice. Returning to an existing question does not restart the clock.
- Admin Studio now provides certificate HEX colors (paper, frame, primary text, accent, secondary text) and an optional photo/artwork background; these affect both the preview and downloadable PNG.
- Admin can reset the local student test session without losing slide or certificate settings. This option clears locally saved scores and answers.
- Previous V5 admin settings are retained if stored in this browser. Export/Import JSON remains necessary to transfer edits between devices.

Note: local-storage controls are not an anti-cheat mechanism. A backend is needed for secure scoring and authentication.

## V7 usability fixes
- BytesCrafter branding preserves transparent alpha on both the certificate preview and exported certificate (no solid dark rectangle behind the logo).
- Certificate PNG uses a Blob download and also presents a persistent "Save certificate PNG" link if the browser blocks automatic downloads.
- On iOS, use the visible Save link and the system Share/Save Image or Save to Files option when necessary.
- Certificate download button is temporarily disabled during generation to prevent double taps.
