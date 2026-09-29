# One Dark Reading for Logseq

An independent dark theme for Logseq inspired by [Binaryify's One Dark Pro](https://github.com/Binaryify/OneDark-Pro). It adapts the One Dark palette for pages, sidebars, menus, embeds, and code editing. CodeMirror's active line and selection remain visible while the code editor has focus.

The theme also styles the optional [Agenda](https://github.com/haydenull/logseq-plugin-agenda) Pomodoro timer. It loads no JavaScript and makes no network requests.

## Install

1. Download the ZIP attached to a GitHub Release and extract it.
2. In Logseq Desktop, enable **Developer mode**, open **Plugins**, choose **Load unpacked plugin**, and select the extracted directory containing `package.json`.
3. Open **Themes** and select **One Dark Reading**. Enable dark mode if needed.

For local development, load this repository directory directly. Edit `theme.css` and reload the theme to see changes; there is no build step or dependency installation. If your graph's `logseq/custom.css` contains overlapping theme rules, those rules may override this theme.

The theme has been visually checked in Logseq Desktop 0.10.12. Other versions and database graphs have not yet been verified.

## Agenda integration

The theme works without Agenda. When Agenda is installed, it styles the toolbar timer and Pomodoro links. `tomato-outline.woff2` supplies the outline tomato glyph used by those links.

The optional `🍅×N` compact display requires [`integrations/agenda/compact-pomodoro.js`](integrations/agenda/compact-pomodoro.js). This script is **not loaded by the theme** and is **not included in the installable ZIP**. To use it with the current Agenda plugin, copy it into Agenda's `dist/assets/` directory and add `<script defer src="./assets/compact-pomodoro.js"></script>` to Agenda's `dist/index.html`. It changes displayed links only; saved note content is untouched. An Agenda update may replace these local changes.

## Publish

The repository is the unpacked Logseq plugin. `.github/workflows/publish.yml` attaches an installable ZIP to each published GitHub Release. No Python, npm, or CSS build process is needed.

1. Create a public GitHub repository named `logseq-one-dark-theme` and push this directory's contents to its root.
2. Add a screenshot made with sample notes to this README. Avoid publishing images of a personal graph.
3. Create and publish a GitHub Release from a tag such as `v0.1.0`. Wait for the **Publish theme** workflow and check that the release has `logseq-one-dark-theme-v0.1.0.zip` attached in addition to GitHub's automatic source archives.
4. Fork [logseq/marketplace](https://github.com/logseq/marketplace). Add `packages/logseq-one-dark-theme/manifest.json` with your actual `author`, `repo` (`owner/logseq-one-dark-theme`), `icon: "icon.svg"`, and `theme: true`, then open a pull request. The Marketplace manifest belongs in the Marketplace repository, not this theme repository.

## Attribution and license

This Logseq adaptation is independent of Binaryify. The palette is inspired by [One Dark Pro](https://github.com/Binaryify/OneDark-Pro). `icon.svg` comes from that project under the MIT license; its copyright and license notice are preserved in [`LICENSES/OneDark-Pro-MIT.txt`](LICENSES/OneDark-Pro-MIT.txt) and [`NOTICE.md`](NOTICE.md). This theme's own source is MIT licensed in [`LICENSE`](LICENSE).
