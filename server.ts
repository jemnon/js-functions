// deno run --allow-net --allow-read server.ts
// Docs: https://deno.land/std/http
import { serve } from "https://deno.land/std@0.63.0/http/server.ts";
const s = serve({ port: 8080 });
for await (const req of s) {
  req.respond({ body: `My Deno Server` });
}