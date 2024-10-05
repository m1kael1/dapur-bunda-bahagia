import PocketBase from "pocketbase";
// initialise client
// export const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);
export const pb = new PocketBase('https://dbb-lsp1.pockethost.io/');

pb.autoCancellation(false);