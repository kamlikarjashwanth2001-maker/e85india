// bulk-indexer.js
// Bulk-submits URLs (from urls.txt) to Google Indexing API (type: URL_UPDATED)

const fs = require('fs');
const path = require('path');
const { GoogleAuth } = require('google-auth-library');

// ---------- CONFIG ----------
const URLS_FILE = path.join(__dirname, 'urls.txt');
const LOG_FILE = path.join(__dirname, 'results.log');
const SERVICE_ACCOUNT_KEY = path.join(__dirname, 'service-account.json');
const SCOPES = ['https://www.googleapis.com/auth/indexing'];
const API_ENDPOINT = 'https://indexing.googleapis.com/v3/urlNotifications:publish';
// ----------------------------

async function main() {
  // Load URLs
  if (!fs.existsSync(URLS_FILE)) {
    console.error('❌ urls.txt not found. Run npm run extract first.');
    process.exit(1);
  }
  const urls = fs.readFileSync(URLS_FILE, 'utf8').split(/\r?\n/).filter(Boolean);
  if (urls.length === 0) {
    console.warn('⚠️ No URLs to process.');
    return;
  }

  // Authenticate using GoogleAuth (proven working)
  const auth = new GoogleAuth({
    keyFile: SERVICE_ACCOUNT_KEY,
    scopes: SCOPES,
  });
  const client = await auth.getClient();

  // Logging
  const logStream = fs.createWriteStream(LOG_FILE, { flags: 'w' });
  const log = (msg) => {
    const ts = new Date().toISOString();
    const line = `[${ts}] ${msg}`;
    console.log(line);
    logStream.write(line + '\n');
  };

  log(`Starting indexing of ${urls.length} URLs...`);

  let success = 0;
  let failed = 0;

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    try {
      const res = await client.request({
        url: API_ENDPOINT,
        method: 'POST',
        data: {
          url: url,
          type: 'URL_UPDATED',
        },
      });
      success++;
      log(`✅ [${i + 1}/${urls.length}] ${url} – submitted (${res.status})`);
    } catch (err) {
      failed++;
      const errMsg = err?.response?.data?.error?.message || err.message || 'unknown error';
      log(`❌ [${i + 1}/${urls.length}] ${url} – ${errMsg}`);
    }

    // Throttle: 1 second between requests
    if (i < urls.length - 1) {
      await new Promise(r => setTimeout(r, 1000));
    }
  }

  log('');
  log('=== SUMMARY ===');
  log(`Total URLs processed : ${urls.length}`);
  log(`Successfully submitted: ${success}`);
  log(`Failed submissions   : ${failed}`);

  logStream.end();
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
