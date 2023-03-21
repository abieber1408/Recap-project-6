import dbConnect from "../../../components/db/models/connect";
import Place from "../../../components/db/Place";

export default async function handler(request, response) {
  await dbConnect();

if (request.nmethod === "GET"){
 const places = await Place.find();
 return response.status(200).json(places);
}else {
  return response.status(405).json({ message: "Method not allowed" });
}
}
