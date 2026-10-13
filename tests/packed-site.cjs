const fs = require("node:fs"),
  os = require("node:os"),
  path = require("node:path"),
  assert = require("node:assert/strict")
const { spawnSync } = require("node:child_process")
const repository = path.resolve(__dirname, "..")
const output = path.resolve(process.argv[2])
fs.mkdirSync(output, { recursive: true })
function run(command, args, cwd) {
  const result = spawnSync(command, args, {
    cwd,
    encoding: "utf8",
    env: { ...process.env, PUPPETEER_SKIP_DOWNLOAD: "true" },
  })
  if (result.status !== 0)
    throw new Error(
      `${command} ${args.join(" ")}\n${result.stdout}\n${result.stderr}`,
    )
  return result.stdout
}
const temporary = fs.mkdtempSync(path.join(os.tmpdir(), "biel-docus-contract-"))
try {
  const packed = JSON.parse(
    run(
      "npm",
      ["pack", "--ignore-scripts", "--json", "--pack-destination", temporary],
      repository,
    ),
  )[0]
  assert(packed.files.some((file) => file.path === "build/index.js"))
  for (const version of ["3.0.0", "3.10.2"]) {
    const consumer = path.join(temporary, version)
    fs.mkdirSync(consumer)
    fs.writeFileSync(
      path.join(consumer, "package.json"),
      JSON.stringify({
        name: "docs-consumer",
        private: true,
        version: "1.0.0",
      }),
    )
    run(
      "npm",
      [
        "install",
        "--ignore-scripts",
        "--no-audit",
        "--no-fund",
        path.join(temporary, packed.filename),
        `@docusaurus/core@${version}`,
        `@docusaurus/preset-classic@${version}`,
        "react@18.3.1",
        "react-dom@18.3.1",
        "webpack@5.96.1",
      ],
      consumer,
    )
    const text =
      'Ask "quoted" 日本語 </script><script>window.injected=1</script><img src=x onerror="window.injected=2">'
    const options = {
      project: text,
      bielButtonText: text,
      disableInput: true,
      renderMath: false,
      renderDiagrams: false,
      initialMessages: [{ text: "Hello 日本語", sender: "ai" }],
      errorMessage403: 'Access "quoted" 日本語',
    }
    fs.writeFileSync(
      path.join(consumer, "docusaurus.config.js"),
      `module.exports={title:'Contract',url:'https://example.test',baseUrl:'/',onBrokenLinks:'throw',presets:[['classic',{docs:false,blog:false}]],plugins:[[require.resolve('docusaurus-biel'),${JSON.stringify(options)}]]};`,
    )
    fs.mkdirSync(path.join(consumer, "src/pages"), { recursive: true })
    fs.writeFileSync(
      path.join(consumer, "src/pages/index.js"),
      "import React from 'react'; export default function Home(){return <main>Local fixture 日本語</main>}",
    )
    run(
      process.execPath,
      ["node_modules/@docusaurus/core/bin/docusaurus.mjs", "build"],
      consumer,
    )
    const html = fs.readFileSync(
      path.join(consumer, "build/index.html"),
      "utf8",
    )
    assert(html.includes("biel-search@latest"))
    const plugin = require(path.join(consumer, "node_modules/docusaurus-biel"))(
      {},
      options,
    )
    assert(
      plugin
        .injectHtmlTags()
        .postBodyTags[1].innerHTML.includes("\\u003c/script\\u003e"),
    )
    const installedPlugin = require(
      path.join(consumer, "node_modules/docusaurus-biel"),
    )
    assert(
      installedPlugin({}, {})
        .injectHtmlTags()
        .postBodyTags[0].attributes.src.includes("biel-search@latest"),
    )
    assert.equal(
      installedPlugin({}, { enable: false }).injectHtmlTags().postBodyTags[1]
        .innerHTML,
      "",
    )
    assert(
      installedPlugin({}, { version: "0.1.94" })
        .injectHtmlTags()
        .postBodyTags[0].attributes.src.includes("biel-search@0.1.94"),
    )
    assert(
      installedPlugin({}, { version: "0.1.94" })
        .injectHtmlTags()
        .headTags[0].attributes.href.includes("biel-search@0.1.94"),
    )
    fs.writeFileSync(
      path.join(consumer, "contract.ts"),
      `import plugin = require('docusaurus-biel');
const options: Parameters<typeof plugin>[1] = {project:'日本語', renderMath:false, keepConversation:true, initialMessages:[{text:'Hi',sender:'ai'}]};
plugin({}, options);
// @ts-expect-error canonical widget props reject unknown flags
plugin({}, {unknownAuditFlag:true});
`,
    )
    run(
      process.execPath,
      [
        path.join(repository, "node_modules/typescript/bin/tsc"),
        "--noEmit",
        "--strict",
        "--skipLibCheck",
        "--moduleResolution",
        "node",
        "--esModuleInterop",
        "--lib",
        "dom,es2020",
        "contract.ts",
      ],
      consumer,
    )
    assert(!html.includes("window.injected=1</script>"))
    const target = path.join(output, version)
    fs.cpSync(path.join(consumer, "build"), target, { recursive: true })
    fs.writeFileSync(
      path.join(target, "expected.json"),
      JSON.stringify(options),
    )
    console.log(
      `PASS packed Docusaurus ${version}: installed plugin, actual site build, latest default, explicit numeric override and safe HTML serialization`,
    )
  }
} finally {
  fs.rmSync(temporary, { recursive: true, force: true })
}
