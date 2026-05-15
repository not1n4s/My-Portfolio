import { createReadStream } from "node:fs";
import { access, stat } from "node:fs/promises";
import http from "node:http";
import path from "node:path";

const [targetDir = ".", portArg = "4173"] = process.argv.slice(2);
const root = path.resolve(process.cwd(), targetDir);
const port = Number(portArg);

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
};

const server = http.createServer(async (req, res) => {
  try {
    const urlPath = decodeURIComponent(new URL(req.url, `http://${req.headers.host}`).pathname);
    const normalizedPath = urlPath === "/" ? "/index.html" : urlPath;
    const filePath = path.join(root, normalizedPath);
    const relative = path.relative(root, filePath);

    if (relative.startsWith("..") || path.isAbsolute(relative)) {
      res.writeHead(403);
      res.end("Forbidden");
      return;
    }

    await access(filePath);
    const fileStat = await stat(filePath);
    const finalPath = fileStat.isDirectory() ? path.join(filePath, "index.html") : filePath;
    const extension = path.extname(finalPath).toLowerCase();

    res.writeHead(200, {
      "Content-Type": mimeTypes[extension] || "application/octet-stream",
      "Cache-Control": "no-cache",
    });

    createReadStream(finalPath).pipe(res);
  } catch {
    res.writeHead(404);
    res.end("Not found");
  }
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Serving ${root} at http://127.0.0.1:${port}`);
});
