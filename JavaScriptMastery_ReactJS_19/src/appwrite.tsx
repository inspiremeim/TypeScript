import { Client, ID, Query, TablesDB } from "appwrite";
import type { TrendingMovie } from "./types";
import { getErrorMessage, EnvironmentError } from "./utils/errors";

// Validate environment variables
const validateEnvVariables = (): void => {
  const requiredVars = [
    "VITE_APPWRITE_PROJECT_ID",
    "VITE_APPWRITE_DATABASE_ID",
    "VITE_APPWRITE_Table_ID",
  ] as const;

  for (const varName of requiredVars) {
    const value = import.meta.env[varName];
    if (!value) {
      throw new EnvironmentError(`Missing required environment variable: ${varName}`);
    }
  }
};

validateEnvVariables();

const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const TABLE_ID = import.meta.env.VITE_APPWRITE_Table_ID;

const client = new Client()
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject(PROJECT_ID);

const tablesDB = new TablesDB(client);

export type UpdateSearchCountProps = {
  searchTerm: string;
  movie: { id: number; poster_path: string };
};

export const updateSearchCount = async ({
  searchTerm,
  movie,
}: UpdateSearchCountProps): Promise<void> => {
  try {
    const { id, poster_path } = movie;

    const result = await tablesDB.listRows({
      databaseId: DATABASE_ID,
      tableId: TABLE_ID,
      queries: [Query.equal("searchTerm", searchTerm)],
    });

    if (result.total > 0) {
      const row = result.rows[0] as TrendingMovie;

      await tablesDB.updateRow({
        databaseId: DATABASE_ID,
        tableId: TABLE_ID,
        rowId: row.$id,
        data: { count: (row.count ?? 0) + 1 },
      });
    } else {
      await tablesDB.createRow({
        databaseId: DATABASE_ID,
        tableId: TABLE_ID,
        rowId: ID.unique(),
        data: {
          searchTerm,
          count: 1,
          poster_url: `https://image.tmdb.org/t/p/w500${poster_path}`,
          movie_id: id,
        },
      });
    }
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    console.error("Error updating search count:", errorMessage);
  }
};

export const getTrendingMovies = async (): Promise<TrendingMovie[]> => {
  try {
    const result = await tablesDB.listRows({
      databaseId: DATABASE_ID,
      tableId: TABLE_ID,
      queries: [Query.orderDesc("count"), Query.limit(5)],
    });

    return result.rows as TrendingMovie[];
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    console.error("Error fetching trending movies:", errorMessage);
    return [];
  }
};
