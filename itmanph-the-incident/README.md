# IT MAN PH — THE INCIDENT V9 (Cloud-Synced Admin)

This version retains the original 39 interactive slides, quizzes, Alex, timers, and certificate editor. Admin changes are published to a Cloudflare KV namespace and loaded across devices.

## Deployment — repository folder is `itmanph-the-incident`

1. Replace the existing files in your GitHub `itmanph-the-incident` subfolder with all files here (including `worker.mjs`, `wrangler.toml` and the `public/` folder).
2. In Cloudflare dashboard, go to **Workers & Pages → KV → Create namespace**. Name it `itmanph-incident-settings`. Copy the namespace ID.
3. Open `wrangler.toml` in GitHub and replace `REPLACE_WITH_YOUR_KV_NAMESPACE_ID` with the KV ID. Commit.
4. In Cloudflare Workers → your Worker → **Settings → Variables and Secrets**, add `ADMIN_PASSWORD` as an encrypted **Secret**. Choose a new strong password (minimum 12 characters). Never commit it to GitHub. This replaces the previous public client-side password.
5. Under **Settings → Build**, keep **Path** as `itmanph-the-incident` and change **Deploy command** to `npx wrangler deploy`. No extra `--assets .` flags; Wrangler reads `wrangler.toml`.
6. Deploy the updated commit. Your existing custom domain remains attached to the Worker when reusing the same Worker name.
7. Open the website, click the BytesCrafter logo, log in using the new secret, change a setting and click **Save & publish to all devices**. Check another device.

### Notes
- Changes may take up to ~60 seconds to propagate globally due to Cloudflare KV caching; attendees' open tabs check for updates every 30 seconds when idle. Reload to check manually. Changes don't interrupt currently timed Q&A.
- Browsers store student registrations and answers locally, as before. This release synchronizes **admin settings only**, not student scores.
- The certificate background, custom elements, signatures, questions, titles, and uploaded images all share one KV settings JSON payload. Keep the total payload below 8 MB; use optimized images. To store larger galleries use R2 later.
- No admin password exists in public JavaScript. Endpoint requests are authenticated server-side; for production consider Cloudflare Access, rate limiting, and auditing.
- Export JSON remains available as backup. Import JSON creates a draft; click Save & publish to send to all devices.
- Existing admin settings that were saved *only* in your previous browser are not automatically uploaded. Export them from V8 first and import them into V9, then publish.
