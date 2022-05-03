import { open, readFile } from "fs/promises";

export async function createDatabase() {
  let filehandle = null;
  try {
    filehandle = await open("./sample.db", "w+");
  } finally {
    await filehandle?.close();
  }
}

export async function isExistDatabase() {
  await readFile("./sample.db");
}

export async function flow() {
  const sqlite3 = (await import("sqlite3")).verbose();
  const db = new sqlite3.Database("./sample.db", sqlite3.OPEN_READWRITE);
  db.serialize(() => {
    db.run(`CREATE TABLE lorem (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        info TEXT
      )`);

    const stmt = db.prepare("INSERT INTO lorem (info) VALUES (?)");
    for (let i = 0; i < 10; i++) {
      stmt.run("Ipsum " + i);
    }
    stmt.finalize();

    db.each("SELECT rowid AS id, info FROM lorem", (err, row) => {
      console.log(row.id + ": " + row.info);
    });
  });

  db.close();
}
