# StudyNest

## Browser configuration

Copy `.env.example` to `.env.local` and provide the Supabase values plus the Google OAuth web Client ID. The Google Client ID is a public browser identifier; never add a Google client secret to this repository.

GitHub Pages reads the Client ID from the repository Actions variable `VITE_GOOGLE_CLIENT_ID` during its verified build.

An offline-first study organizer for subjects, PDF reviewers, notes, identification question banks, manual mastery levels, and test history.

## Live application

Open StudyNest at <https://marvmarv08.github.io/StudyNest/>.

Existing links under `/reviewer-organizer/` forward to the new address. Production email verification and password-reset links retain that established callback path; a same-origin compatibility page forwards their query and fragment to StudyNest. Existing database, backup, and import identifiers are preserved.

On a phone, open the link in a browser and choose **Add to Home Screen** or **Install app**. Study data is stored separately on each device; use the built-in backup and restore tools to transfer it.

## Status

Version 1 is under active development.

## Local development

```bash
npm install
npm run dev
```

Then open the local address printed by Vite.

## Verification

```bash
npm run lint
npm run test
npm run build
```

## Data and privacy

The source code is public, but student content is stored locally in the browser using IndexedDB. PDFs, notes, questions, and test results are not uploaded to this GitHub repository.
