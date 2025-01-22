import { useEffect, useState } from "react";
import { WASQLitePowerSyncDatabaseOpenFactory } from "@powersync/web";
import { AppSchema } from "../library/powersync/AppSchema";

const usePowerSync = () => {
  const [powerSync, setPowerSync] = useState<any>(null);

  useEffect(() => {
    const powerSyncInstance = new WASQLitePowerSyncDatabaseOpenFactory({
      dbFilename: "react-todo.db", // React-specific DB name
      schema: AppSchema,
    }).getInstance();

    setPowerSync(powerSyncInstance);

    // Optional: Add any cleanup or sync handling if needed
    return () => {
      powerSyncInstance.close();
    };
  }, []);

  return powerSync;
};

export default usePowerSync;