import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import pixelmatch from "pixelmatch";
import { PNG } from "pngjs";
import { qaOutputRoot, qaPages, viewports } from "./qa-config.mjs";

const readPng = async (filePath) => PNG.sync.read(await readFile(filePath));

const comparePair = async (pageConfig, viewport) => {
  const sourcePath = path.join(qaOutputRoot, "source", viewport.id, `${pageConfig.id}.png`);
  const localPath = path.join(qaOutputRoot, "local", viewport.id, `${pageConfig.id}.png`);
  const diffDir = path.join(qaOutputRoot, "compare", viewport.id);
  const diffPath = path.join(diffDir, `${pageConfig.id}.png`);

  const source = await readPng(sourcePath);
  const local = await readPng(localPath);

  if (source.width !== local.width || source.height !== local.height) {
    return {
      page: pageConfig.id,
      viewport: viewport.id,
      status: "dimension-mismatch",
      sourceSize: `${source.width}x${source.height}`,
      localSize: `${local.width}x${local.height}`,
      mismatchRatio: null,
      diffPath: "",
    };
  }

  await mkdir(diffDir, { recursive: true });

  const diff = new PNG({ width: source.width, height: source.height });
  const mismatchedPixels = pixelmatch(source.data, local.data, diff.data, source.width, source.height, {
    threshold: 0.12,
    includeAA: false,
  });
  const totalPixels = source.width * source.height;
  const mismatchRatio = mismatchedPixels / totalPixels;

  await writeFile(diffPath, PNG.sync.write(diff));

  return {
    page: pageConfig.id,
    viewport: viewport.id,
    status: "compared",
    sourceSize: `${source.width}x${source.height}`,
    localSize: `${local.width}x${local.height}`,
    mismatchRatio,
    diffPath,
  };
};

const formatPercent = (value) => {
  if (value === null) {
    return "n/a";
  }

  return `${(value * 100).toFixed(2)}%`;
};

const compare = async () => {
  const results = [];

  for (const viewport of viewports) {
    for (const pageConfig of qaPages) {
      results.push(await comparePair(pageConfig, viewport));
    }
  }

  const lines = [
    "# Visual QA Compare Report",
    "",
    "Reference screenshots are captured from `https://tronhouse.com`; local screenshots are captured from the Astro dev server.",
    "Source-only contact widgets are hidden during source capture because local scope intentionally excludes Contact/Zalo/WhatsApp widgets.",
    "",
    "| Viewport | Page | Status | Diff | Source | Local |",
    "| --- | --- | --- | ---: | --- | --- |",
    ...results.map((result) =>
      `| ${result.viewport} | ${result.page} | ${result.status} | ${formatPercent(result.mismatchRatio)} | ${result.sourceSize} | ${result.localSize} |`,
    ),
    "",
  ];

  const reportPath = path.join(qaOutputRoot, "compare", "report.md");

  await mkdir(path.dirname(reportPath), { recursive: true });
  await writeFile(reportPath, `${lines.join("\n")}\n`);
  console.log(lines.join("\n"));
  console.log(`Report: ${reportPath}`);
};

compare().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
