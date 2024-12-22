import * as path from "node:path";
import * as fs from "node:fs";

export default defineEventHandler(async () => {
  const summaryFilePath = path.join(process.cwd(), "public", "summary.json");
  const creatorFilePath = path.join(process.cwd(), "public", "creator.json");
  const trendingFilePath = path.join(process.cwd(), "public", "trending.json");

  try {
    const [summaryData, creatorData, trendingData] = await Promise.all([
      fs.promises.readFile(summaryFilePath, "utf-8"),
      fs.promises.readFile(creatorFilePath, "utf-8"),
      fs.promises.readFile(trendingFilePath, "utf-8"),
    ]);

    return {
      summary: JSON.parse(summaryData),
      creator: { ...JSON.parse(creatorData).data.creator },
      trending: JSON.parse(trendingData),
    };
  } catch (err) {
    console.error(err);
    return {
      summary: null,
      creator: null,
      trending: null,
    };
  }
});
