import { Client, ID, Query, TablesDB, type Models } from "appwrite";

const PROJECT_ID: string = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID: string = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const TABLE_ID: string = import.meta.env.VITE_APPWRITE_Table_ID;

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
}: UpdateSearchCountProps) => {
  try {
    const { id, poster_path } = movie;

    const result = await tablesDB.listRows({
      databaseId: DATABASE_ID,
      tableId: TABLE_ID,
      queries: [Query.equal("searchTerm", searchTerm)],
    });

    if (result.total > 0) {
      const row = result.rows[0];

      await tablesDB.updateRow({
        databaseId: DATABASE_ID,
        tableId: TABLE_ID,
        rowId: row.$id,
        data: { count: row.count + 1 },
      });
    } else {
      await tablesDB.createRow({
        databaseId: DATABASE_ID,
        tableId: TABLE_ID,
        rowId: ID.unique(),
        data: {
          searchTerm: searchTerm,
          count: 1,
          poster_url: `https://image.tmdb.org/t/p/w500${poster_path}`,
          movie_id: id,
        },
      });
    }
  } catch (error) {
    console.error("Error updating search count:", error);
  }
};

export const getTrendingMovies = async (): Promise<Models.DefaultRow[]> => {
  try {
    const result = await tablesDB.listRows({
      databaseId: DATABASE_ID,
      tableId: TABLE_ID,
      queries: [Query.orderDesc("count"), Query.limit(5)],
    });

    return result.rows;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    return [];
  }
};
