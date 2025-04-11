import migrationRunner from "node-pg-migrate";
import path from "path";

export default async function migrations(req, res) {
  const defaultMigrationOptions = {
    databaseUrl: process.env.DATABASE_URL,
    dryRun: false,
    dir: path.join("infra", "migrations"),
    direction: "up",
    verbose: true,
    migrationsTable: "pgmigrations",
    noLock: true,
  };

  if (req.method === "POST") {
    const migratedMigrations = await migrationRunner(defaultMigrationOptions);
    res.status(200).json(migratedMigrations);
  }

  if (req.method === "GET") {
    const pendingMigrations = await migrationRunner({
      ...defaultMigrationOptions,
      dryRun: true,
    });
    res.status(200).json(pendingMigrations);
  }

  res.status(405).end();
}
