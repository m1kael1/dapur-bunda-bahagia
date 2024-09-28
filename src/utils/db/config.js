import PocketBase from "pocketbase";
// initialise client
export const pb = new PocketBase("http://127.0.0.1:8090");
pb.autoCancellation(false);