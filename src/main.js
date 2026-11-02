import "./styles.css";

// Set VITE_API_URL in Vercel (or frontend/.env.local for local dev).
const API_URL = (import.meta.env.VITE_API_URL || "http://localhost:3000").replace(/\/$/, "");
const output = document.getElementById("output");
const link = document.getElementById("backend-link");

link.href = `${API_URL}/api/hello`;
link.textContent = `${API_URL}/api/hello`;

document.getElementById("call").addEventListener("click", async () => {
  output.textContent = "Calling backend… (first call can take ~30s if Render is waking up)";
  try {
    const res = await fetch(`${API_URL}/api/hello`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    output.textContent = JSON.stringify(await res.json(), null, 2);
  } catch (err) {
    output.textContent = `Error: ${err.message}`;
  }
});
