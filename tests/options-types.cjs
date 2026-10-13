const assert = require("node:assert/strict")
const fs = require("node:fs")
const os = require("node:os")
const path = require("node:path")
const ts = require("typescript")

const directory = fs.mkdtempSync(path.join(os.tmpdir(), "biel-options-"))
try {
  const declaration = path.resolve(__dirname, "../build/conf.d.ts")
  assert(!fs.readFileSync(declaration, "utf8").includes("biel-search"))
  const consumer = path.join(directory, "consumer.ts")
  fs.writeFileSync(
    consumer,
    `
    import type { BielOptions } from ${JSON.stringify(declaration)};
    const options: BielOptions = {
      project: "demo", version: "latest", bielButtonText: 'Ask "Docs" <&>',
      buttonPosition: "bottom-left", buttonStyle: "light", modalPosition: "center",
      headerTitle: "Docs helper", keepConversation: false, hideFeedback: true,
      suggestedQuestions: '["How do I install?"]', aiIcon: "sparks",
      defaultThinkMode: "fast", loadingIndicator: "dots",
      initialMessages: [{ text: "Welcome", sender: "ai", feedback: 1 }],
    };
    // @ts-expect-error booleans remain checked
    const invalidBoolean: BielOptions = { renderMath: "false" };
    // @ts-expect-error misspelled options remain checked
    const typo: BielOptions = { headerTitel: "Oops" };
    // @ts-expect-error widget enums remain checked
    const invalidIcon: BielOptions = { aiIcon: "unknown" };
    // @ts-expect-error message senders remain checked
    const invalidMessage: BielOptions = { initialMessages: [{ text: "Hi", sender: "bot" }] };
    // @ts-expect-error feedback values remain checked
    const invalidFeedback: BielOptions = { initialMessages: [{ text: "Hi", sender: "ai", feedback: 2 }] };
  `,
  )
  const program = ts.createProgram([consumer], {
    strict: true,
    noEmit: true,
    skipLibCheck: false,
    types: [],
    target: ts.ScriptTarget.ES2020,
    moduleResolution: ts.ModuleResolutionKind.NodeJs,
  })
  const diagnostics = ts.getPreEmitDiagnostics(program)
  assert.deepEqual(
    diagnostics.map((d) =>
      ts.flattenDiagnosticMessageText(d.messageText, "\n"),
    ),
    [],
  )
  console.log(
    "PASS self-contained consumer types: valid overrides accepted; invalid options rejected",
  )
} finally {
  fs.rmSync(directory, { recursive: true, force: true })
}
