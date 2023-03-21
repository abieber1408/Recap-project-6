import dbConnect from "../../../../components/db/models/connect";
import Place from "../../../../components/db/Place";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const place = await Place.findById(id);
    if (!place) {
      return response.status(404).json({ status: 'Not found' });
    }
  response.status(200).json(place);
}
}